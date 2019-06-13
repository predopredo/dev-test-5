import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css';

const Header = () => (
  <div class="content-container">
    <h1>Questionário</h1>
    <NavLink activeClassName="nav_Link--active" to="/index.html">
      <button className="nav_Link">Questão  1</button>
    </NavLink>

    <NavLink activeClassName="nav_Link--active" to="/questionTwo">
      <button className="nav_Link">Questão  2</button>
    </NavLink>

    <NavLink activeClassName="nav_Link--active" to="/questionThree">
      <button className="nav_Link">Questão  3</button>
    </NavLink>

    <NavLink activeClassName="nav_Link--active" to="/calculator">
      <button className="nav_Link">Bonus - Calculadora</button>
    </NavLink>

    <NavLink activeClassName="nav_Link--active" to="/secret">
      <button className="nav_Link">Bonus - Segredo!</button>
    </NavLink>
  </div>
);

export default Header;