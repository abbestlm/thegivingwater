import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"; // Import the CSS module

const Header: React.FC = () => {
  const menuItems = [
    "Home",
    "Label",
    "About Us",
    "Donate",
    "Chug Challenge",
    "SponsorsAndPartners",
    "FAQ",
  ];

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoLink}>
        <img
          src="/favicon.png"
          alt="The Giving Water Logo"
          className={styles.logo}
        />
      </Link>
      <Link to="/" className={styles.titleLink}>
        <h1 className={styles.title}>The Giving Water</h1>
      </Link>
      <ul className={styles.navMenu}>
        {menuItems.map((item) => (
          <li key={item} className={styles.navItem}>
            <Link
              to={`/${item.replace(/\s+/g, "-").toLowerCase()}`}
              className={styles.navLink}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
