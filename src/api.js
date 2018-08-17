const _KEY = "465ddbff109a7dbb37d2c241a60a4426";
const _ID = "bf96a2c4";
const API = 'https://api.edamam.com/search?q='
const credentials = `&app_id=${_ID}&app_key=${_KEY}&from=0&to=22`;

export default {
  categories: [
    { category: 'tacos', url: `${API}tacos${credentials}` },
    { category: 'pasta', url: `${API}pasta${credentials}` },
    { category: 'pizza', url: `${API}pizza${credentials}` },
    { category: 'hamburger', url: `${API}hamburger${credentials}` },
    { category: 'steak', url: `${API}steak${credentials}` },
    { category: 'chicken', url: `${API}chicken${credentials}` },
    { category: 'bread', url: `${API}bread${credentials}` },
    { category: 'salads', url: `${API}salads${credentials}` }
  ]
}

const p = 'https://api.edamam.com/search?q=tacos&app_id=bf96a2c4&app_key=465ddbff109a7dbb37d2c241a60a4426&from=0&to=21'