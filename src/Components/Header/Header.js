import React from 'react';
import { Link } from 'react-router-dom';
// CSS
import style from './Header.css';
import FontAwesome from 'react-fontawesome';

// COMPONENTS
import SideNavigation from './SideNav/SideNavigation';

const Header = props => (
  <header className={style.header}>
    <SideNavigation {...props} />
    <div className={style.headerOptions}>
      <div className={style.bars}>
        <FontAwesome
          onClick={props.onOpenNav}
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
