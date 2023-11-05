import React from 'react'
import './navbar.css'


const Menu = () => (
  <>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Latest movies</a></li>
      <li><a href="#">Top movies</a></li>
      <li><a href="#">Tv shows</a></li>
      <li><a href="#">About</a></li>
    </ul>
  </>
)

const navbar = () => {
  return (
    <div className="movies-navbar">
      <div className="movies-navbar__logo">
        <h1>FilmFlowX</h1>
      </div>
      <div className="movies-navbar__links">
        <Menu />
      </div>
    </div>
  )
}

export default navbar