import React from 'react';
import { Link } from 'react-router-dom';
// css
import style from './Header.css';
import FontAwesome from 'react-fontawesome';

const Header = () => (
  <header className={style.header}>
    <div className={style.headerOptions}>
      <div className={style.bars}>
        <FontAwesome
          name="bars"
          style={{
            color: '#dfdfdf',
            cursor: 'pointer',
            padding: '10px'
          }}
        />
      </div>
      <Link to="/" className={style.logo}>
        <img alt="nba logo" src="/images/nba_logo.png" />
      </Link>
    </div>
  </header>
);
export default Header;
