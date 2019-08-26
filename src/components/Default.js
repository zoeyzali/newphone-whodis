import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text uppercase mt-4 pt5">
            <h3 className="display-3">error 404</h3>
            <h4 className="text-center">Are you lost? <Link to="/"><span className="text-danger">Go back</span></Link>
            </h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Default