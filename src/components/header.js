import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import styles from "./header.module.css";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to="/">
          <Icon symbol="logo" /> ricco.dev.br
        </Link>
      </div>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          {/* <li>
            <Link to="/portifolio/">Portifólio</Link>
          </li> */}
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
          <li>
            <Link to="/sobre/">Sobre</Link>
          </li>
        </ul>
      </nav>
      
      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

    </div>
  </div>
);

export default Header;
