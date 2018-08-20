const API = 'http://localhost:3000/'

export default {
  categories: [
    { collection: 'users', url: `${API}users` },
    { collection: 'recipes', url: `${API}recipes`}
  ]
}