import React, { Component } from 'react'



export class Navbar extends Component {
 
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark text-body-danger">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="/">NewsMonkey</a> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="/">Home</a> 
        </li>
       <li className="nav-item"><a className="nav-link text-light" href="/business"> Business</a> </li>
       <li className="nav-item"><a className="nav-link text-light" href="/entertainment"> Entertainment</a> </li>
       <li className="nav-item"><a className="nav-link text-light" href="/general"> General</a> </li>
       <li className="nav-item"><a className="nav-link text-light" href="/health"> Health</a> </li>
       <li className="nav-item"><a className="nav-link text-light" href="/science"> Science</a> </li>
       <li className="nav-item"><a className="nav-link text-light" href="/sports"> Sports</a> </li>
       <li className="nav-item"><a className="nav-link text-light" href="/technology"> Technology</a> </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
