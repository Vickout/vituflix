import React from 'react';
import logo from '../../assets/img/logo.png';
import { FooterBase } from './styles';

import './styles.css';

function Footer() {
  return (
    <FooterBase>
      <div style={{ display: 'grid', gridColumn: '1fr', justifyContent: 'center' }}>
        <a href="https://www.alura.com.br/">
          <img style={{ height: '86px' }} src={logo} alt="Logo Alura" />
        </a>
        <div className="icons">
          <a href="https://github.com/Vickout/vituflix">
            <img style={{ height: '30px' }} src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg" alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/victor-louren%C3%A7o-a17a34140/">
            <img style={{ height: '30px' }} src="https://www.iconsdb.com/icons/preview/white/linkedin-3-xxl.png" alt="Github" />
          </a>
        </div>
      </div>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
