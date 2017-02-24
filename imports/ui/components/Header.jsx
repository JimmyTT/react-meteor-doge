import React from 'react';
import { NavLink } from 'react-router-dom';

import LoginButtons from './LoginButtons.jsx';

export default class Header extends React.Component {
  render() {
    return (
      <header className='Header'>
        <b> DogeTime </b>
        <NavLink activeClassName="active" exact to="/">You</NavLink>
        <NavLink activeClassName="active" to="/leaderboard">Leaderboard</NavLink>
        <NavLink activeClassName="active" to="/tasks">Tasks</NavLink>
        <NavLink to="/bad-url">Not Found Page</NavLink>
        <LoginButtons align='right' />
      </header>
    );
  }
}
