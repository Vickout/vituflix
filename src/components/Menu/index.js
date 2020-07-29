import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './menu.css';
//import ButtonLink from '../ButtonLink';
import Button from '../Button';

export default function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="logo" src={logo} alt="Logo da Vituflix" />
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">Novo vídeo</Button>
        </nav>
    );
}