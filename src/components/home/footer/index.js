import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-section">
        <div className="container"> 
          <div className="row">
            <div className="col-md-12">
              <nav className="footer__navigation text-center">
                <ul className="footer__navigation-list">
                  <li className="footer__navigation-item">All recipes</li>
                  <li className="footer__navigation-item">Profile</li>
                  <li className="footer__navigation-item">My books</li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <p>Using Edam API | 2018</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;