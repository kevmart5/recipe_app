const API = 'mongodb://kevin:kevin1@ds229722.mlab.com:29722/recipes'

export default {
  categories: [
    { collection: 'users', url: `${API}users` },
    { collection: 'recipes', url: `${API}`}
  ]
}