import React, { Component } from "react";
 
class Error extends Component {
  render() {
    return (
      <div>
        <div className="section-l">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 text-center">
                <br/>
                <br/>
                <br/>
                <h1 style={{color:"black",fontFamily:"Arial, Helvetica, sans-serif",fontWeight:"800"}}>Error 404</h1>
                <h3 style={{color:"black",fontFamily:"Arial, Helvetica, sans-serif"}}>Page not Found</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Error;