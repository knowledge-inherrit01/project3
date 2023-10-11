import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MyApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="displayData">Display Data</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="changeColor">Change Color</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="getMovie">Movie</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="functionComponent">Function Component</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="kbc">K B R</Link>
            </li>
           </ul>
        </div>
      </div>
    </nav>
    )
  }
}
