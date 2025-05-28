import { Search, Users, BookOpen, Target, Award, Mail, Phone, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 text-white p-2 rounded-lg font-bold">UG</div>
              <span className="text-xl font-bold text-gray-900">UG-Research</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Accueil
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Chercheurs
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Publications
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Projets
              </a>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Se connecter</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">S'inscrire</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Plateforme de Recherche
            <br />
            <span className="text-blue-200">Université de Gabès</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Découvrez les travaux de recherche, collaborez avec des chercheurs et suivez les projets innovants
          </p>
          <div className="max-w-2xl mx-auto flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher publications, chercheurs, projets..."
                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100">
              Rechercher
            </button>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">245</div>
              <div className="text-gray-600">Chercheurs actifs</div>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">1,247</div>
              <div className="text-gray-600">Publications</div>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">89</div>
              <div className="text-gray-600">Projets en cours</div>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">156</div>
              <div className="text-gray-600">Collaborations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications récentes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Publications récentes</h2>
            <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-white">Voir toutes</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Article</span>
                <span className="text-gray-500 text-sm">2024</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 leading-tight">
                Intelligence Artificielle appliquée à l'analyse des données médicales
              </h3>
              <p className="text-gray-600 text-sm mb-4">Dr. Ahmed Ben Salem, Prof. Fatma Gharbi</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>45 citations</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Conférence</span>
                <span className="text-gray-500 text-sm">2024</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 leading-tight">
                Énergies renouvelables et développement durable en Tunisie
              </h3>
              <p className="text-gray-600 text-sm mb-4">Prof. Mohamed Triki, Dr. Leila Mansouri</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>23 citations</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Article</span>
                <span className="text-gray-500 text-sm">2024</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 leading-tight">
                Biotechnologies marines et aquaculture durable
              </h3>
              <p className="text-gray-600 text-sm mb-4">Dr. Sonia Hammami, Prof. Karim Bouaziz</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>67 citations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chercheurs en vedette */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Chercheurs en vedette</h2>
            <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Voir tous</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">AS</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Dr. Ahmed Ben Salem</h3>
              <p className="text-gray-600 text-sm mb-4">Informatique</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Publications:</span>
                  <span className="font-semibold">34</span>
                </div>
                <div className="flex justify-between">
                  <span>h-index:</span>
                  <span className="font-semibold">12</span>
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">FG</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Prof. Fatma Gharbi</h3>
              <p className="text-gray-600 text-sm mb-4">Génie Électrique</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Publications:</span>
                  <span className="font-semibold">67</span>
                </div>
                <div className="flex justify-between">
                  <span>h-index:</span>
                  <span className="font-semibold">18</span>
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">MT</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Prof. Mohamed Triki</h3>
              <p className="text-gray-600 text-sm mb-4">Sciences Biologiques</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Publications:</span>
                  <span className="font-semibold">89</span>
                </div>
                <div className="flex justify-between">
                  <span>h-index:</span>
                  <span className="font-semibold">25</span>
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">SH</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Dr. Sonia Hammami</h3>
              <p className="text-gray-600 text-sm mb-4">Chimie</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Publications:</span>
                  <span className="font-semibold">45</span>
                </div>
                <div className="flex justify-between">
                  <span>h-index:</span>
                  <span className="font-semibold">15</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projets actifs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Projets actifs</h2>
            <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-white">Voir tous</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">En cours</span>
                <span className="text-gray-500 text-sm">2024-2026</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Smart City Gabès - IoT et Développement Urbain</h3>
              <p className="text-gray-600 mb-4">
                Projet de recherche sur l'intégration des technologies IoT pour le développement urbain intelligent
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>8 chercheurs</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Informatique, Génie Civil</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">En cours</span>
                <span className="text-gray-500 text-sm">2023-2025</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Énergies Marines Renouvelables en Méditerranée</h3>
              <p className="text-gray-600 mb-4">
                Étude du potentiel énergétique des ressources marines pour le développement durable
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>12 chercheurs</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Génie Électrique, Sciences Biologiques</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white p-2 rounded-lg font-bold">UG</div>
                <span className="ml-3 text-xl font-semibold">UG-Research</span>
              </div>
              <p className="text-gray-400">Plateforme de recherche de l'Université de Gabès</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Chercheurs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Publications
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Projets
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Collaborations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Ressources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Guide utilisateur
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Université de Gabès, Tunisie</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>support@ug-research.tn</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+216 75 392 600</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Université de Gabès. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
