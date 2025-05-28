import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@/lib/db"
import bcrypt from "bcryptjs"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Authentification LDAP pour les utilisateurs UG
        if (credentials.email.endsWith("@ug.edu.tn")) {
          try {
            const isValid = await validateLDAPCredentials(credentials.email, credentials.password)

            if (isValid) {
              // Récupérer ou créer l'utilisateur
              let user = await prisma.user.findUnique({
                where: { email: credentials.email },
              })

              if (!user) {
                // Créer un nouvel utilisateur depuis LDAP
                const ldapUser = await getLDAPUserInfo(credentials.email)
                user = await prisma.user.create({
                  data: {
                    email: credentials.email,
                    firstName: ldapUser.firstName,
                    lastName: ldapUser.lastName,
                    department: ldapUser.department,
                    ldapId: ldapUser.ldapId,
                    isActive: true,
                    isVerified: true,
                  },
                })
              }

              return {
                id: user.id,
                email: user.email,
                name: `${user.firstName} ${user.lastName}`,
                department: user.department,
                role: user.isAdmin ? "admin" : "user",
              }
            }
          } catch (error) {
            console.error("LDAP authentication error:", error)
          }
        }

        // Authentification locale pour les invités
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })

        if (user && user.password) {
          const isValid = await bcrypt.compare(credentials.password, user.password)
          if (isValid) {
            return {
              id: user.id,
              email: user.email,
              name: `${user.firstName} ${user.lastName}`,
              department: user.department,
              role: user.isAdmin ? "admin" : "user",
            }
          }
        }

        return null
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 8 * 60 * 60, // 8 heures
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.department = user.department
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.user.role = token.role as string
        session.user.department = token.department as string
      }
      return session
    },
  },
  pages: {
    signIn: "/auth/signin",
    signUp: "/auth/signup",
    error: "/auth/error",
  },
}

// Fonctions utilitaires pour LDAP
async function validateLDAPCredentials(email: string, password: string): Promise<boolean> {
  // Implémentation de l'authentification LDAP
  // Cette fonction devra être adaptée selon la configuration LDAP de l'université
  try {
    const ldap = require("ldapjs")
    const client = ldap.createClient({
      url: process.env.LDAP_URL || "ldap://ldap.ug.edu.tn",
    })

    const bindDN = `uid=${email.split("@")[0]},ou=people,dc=ug,dc=edu,dc=tn`

    return new Promise((resolve) => {
      client.bind(bindDN, password, (err: any) => {
        client.unbind()
        resolve(!err)
      })
    })
  } catch (error) {
    console.error("LDAP connection error:", error)
    return false
  }
}

async function getLDAPUserInfo(email: string) {
  // Récupérer les informations utilisateur depuis LDAP
  return {
    firstName: "Prénom",
    lastName: "Nom",
    department: "Informatique",
    ldapId: email.split("@")[0],
  }
}
