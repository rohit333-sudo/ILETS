import React from 'react'

function Nabvar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand ">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link mx-3 anchor-tag " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3 anchor-tag" href="#">Contact</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link mx-3 anchor-tag" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3 anchor-tag" href="#">Link</a>
        </li>
     
      </ul>
     
    </div>
   
  </div>
</nav>
    </>
  )
}

export default Nabvar