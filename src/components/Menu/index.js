import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './menu.css';

import Button from '../Button';

export default function Menu({ label, categoryURL }) {
  const labelButton = label;
  
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo da Vituflix" />
      </Link>
      {labelButton !== undefined && (<Button as={Link} className="ButtonLink" to={categoryURL}>{label}</Button>)}
    </nav>
  );
}
