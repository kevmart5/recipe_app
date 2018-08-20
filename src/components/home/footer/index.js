import React from "react";
import {Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-section">
        <div className="container"> 
          <div className="row">
            <div className="col-md-12">
              <div className="text-center footer__api-info">
                <p>
                  <span className="footer__api-element-left">Using Edam API</span> 
                  | 
                  <span className="footer__api-element-right">2018</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;