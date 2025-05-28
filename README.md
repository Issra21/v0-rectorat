# UG-Research

Plateforme de gestion des chercheurs de l'Université de Gabès

## Description

UG-Research est une application web moderne développée avec Next.js 14 qui permet de centraliser et gérer l'ensemble des activités de recherche de l'Université de Gabès.

## Fonctionnalités principales

- 🔐 **Authentification LDAP** - Connexion avec les identifiants universitaires
- 👥 **Gestion des profils** - Profils complets des chercheurs
- 📚 **Base de publications** - Gestion des publications scientifiques
- 🎯 **Projets de recherche** - Suivi des projets et collaborations
- 💬 **Messagerie** - Communication entre chercheurs
- 📊 **Tableaux de bord** - Analytics et métriques de recherche
- 🔍 **Recherche avancée** - Moteur de recherche intelligent

## Technologies utilisées

- **Frontend**: Next.js 14, React 18, TypeScript
- **UI**: Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes, Prisma ORM
- **Base de données**: PostgreSQL
- **Authentification**: NextAuth.js avec LDAP
- **Déploiement**: Vercel

## Installation

1. Cloner le repository
\`\`\`bash
git clone https://github.com/ug-gabes/ug-research.git
cd ug-research
\`\`\`

2. Installer les dépendances
\`\`\`bash
npm install
\`\`\`

3. Configurer les variables d'environnement
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Configurer la base de données
\`\`\`bash
npx prisma migrate dev
npx prisma db seed
\`\`\`

5. Lancer l'application
\`\`\`bash
npm run dev
\`\`\`

## Configuration

### Variables d'environnement

\`\`\`env
# Base de données
DATABASE_URL="postgresql://user:password@localhost:5432/ug_research"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# LDAP
LDAP_URL="ldap://ldap.ug.edu.tn"
LDAP_BIND_DN="cn=admin,dc=ug,dc=edu,dc=tn"
LDAP_BIND_PASSWORD="password"
LDAP_SEARCH_BASE="ou=people,dc=ug,dc=edu,dc=tn"

# APIs externes
ORCID_CLIENT_ID="your-orcid-client-id"
ORCID_CLIENT_SECRET="your-orcid-client-secret"
\`\`\`

## Structure du projet

\`\`\`
src/
├── app/                    # App Router (Next.js 14)
│   ├── (auth)/            # Routes d'authentification
│   ├── (dashboard)/       # Routes du tableau de bord
│   ├── api/               # API Routes
│   └── globals.css        # Styles globaux
├── components/            # Composants réutilisables
│   ├── ui/               # Composants de base (shadcn/ui)
│   ├── forms/            # Formulaires
│   └── layout/           # Composants de mise en page
├── lib/                  # Utilitaires et configurations
├── hooks/                # Hooks personnalisés
├── types/                # Types TypeScript
└── docs/                 # Documentation
\`\`\`

## Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit les changements (`git commit -am 'Ajout nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Créer une Pull Request

## Documentation

- [Guide utilisateur](./docs/guide-utilisateur.md)
- [Rapport technique](./docs/rapport-technique-complet.md)
- [API Documentation](./docs/api.md)

## Support

Pour toute question ou problème :

- **Email**: support-ugresearch@ug.edu.tn
- **Issues**: [GitHub Issues](https://github.com/ug-gabes/ug-research/issues)

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

**Développé avec ❤️ par l'équipe technique de l'Université de Gabès**
