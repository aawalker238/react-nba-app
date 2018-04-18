import React from 'react';

// CSS
import styles from './Footer.css';

// COMPONENTS
import { Link } from 'react-router-dom';

// HELPERS
import { CURRENT_YEAR, COMPANY_NAME } from '../../helpers/helperContants';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link to="/" className={styles.logo}>
        <img alt="nba logo" src="/images/nba_logo.png" />
      </Link>
      <div className={styles.right}>
        @{COMPANY_NAME} {CURRENT_YEAR} All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
