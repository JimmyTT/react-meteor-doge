import React from 'react';
import { NavLink } from 'react-router-dom';

import LoginButtons from './LoginButtons.jsx';

export default class Header extends React.Component {
  render() {
    return (
      <header className='Header'>
        <nav>
          <div className="nav-wrapper">
             <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><NavLink activeClassName="active" exact to="/">You</NavLink></li>
                <li><NavLink activeClassName="active" to="/leaderboard">Leaderboard</NavLink></li>
                <li><NavLink activeClassName="active" to="/tasks">Tasks</NavLink></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
