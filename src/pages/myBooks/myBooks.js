import React from "react";
import LocalServer from '../../json-server'
import getMyBooks from '../../redux/actionsCreators/myBooks'
import Favorites from '../../components/myBooks/favorites/'

export default class MyBooks extends React.Component {

  componentDidMount () {
    this.props.getMyBooks(LocalServer.categories[1].url);
  }

  render() {
    const { myBooks } = this.props
    console.log(this.props.isLoading);

    if(this.props.isLoading){
      return (<p>Loading</p>);
    }else {
      return (
        <React.Fragment>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="text-center">
                  <h1>My favorite recipes</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {
                myBooks.map((e, i) => (
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    <div className="text-center">
                      <Favorites label={e.label} image={e.image} key={i}/>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </React.Fragment>
      );
    }



  }
}