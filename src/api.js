const _KEY = "465ddbff109a7dbb37d2c241a60a4426";
const _ID = "bf96a2c4";
const API = 'https://api.edamam.com/search?q='
const credentials = `&app_id=${_ID}&app_key=${_KEY}&from=0&to=22`;

export default {
  categories: [
    { id: 1, category: 'tacos', url: `${API}tacos${credentials}` },
    { id: 2, category: 'pasta', url: `${API}pasta${credentials}` },
    { id: 3, category: 'pizza', url: `${API}pizza${credentials}` },
    { id: 4, category: 'hamburger', url: `${API}hamburger${credentials}` },
    { id: 5, category: 'steak', url: `${API}steak${credentials}` },
    { id: 6, category: 'chicken', url: `${API}chicken${credentials}` },
    { id: 7, category: 'bread', url: `${API}bread${credentials}` },
    { id: 8, category: 'salads', url: `${API}salads${credentials}` },
    { id: 9, category: 'dessert', url: `${API}salads${credentials}` }
  ]
}