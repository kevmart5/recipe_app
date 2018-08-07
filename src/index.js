import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header/';
import LoginForm from './components/main/'

class App extends Component {
  render() {
    return (
      <div className="dcc">
        <Header 
          name="Kevin"
          surName="Martinez"
          dob="Caca"/>
        <LoginForm />
      </div>
     )
   }
 }

 export default App;

ReactDOM.render(<App />, document.getElementById('root'))