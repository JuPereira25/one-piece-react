import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import menuIcon from "../assets/icon/menu.svg";
import MusicPlayer from "../components/MusicPlayer/MusicPlayer"


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.leftAndLogoGroup}>
        <Link to="/">
          <img src="/One-Piece-Logo.png" alt="logo principal" />
        </Link>

        {/* Menu de navegação para desktop */}
        <div className={styles.leftGroupy}>
          <nav>
            <ul>
              <li>
                <Link to="/about">Sobre</Link>
              </li>
              <li>
                <Link to="/characters">Tripulantes</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={styles.rightGroupy}>
        <nav>
          <ul>
            <li>
              <Link to="/ships">Navios</Link>
            </li>
          </ul>
        </nav>

        <MusicPlayer /> 
      </div>

      <button onClick={handleMenuToggle} className={styles.menuButton}>
        <img src={menuIcon} alt="Menu" />
      </button>

      {isMenuOpen && (
        <div className={styles.menuOpen}>
          <button className={styles.closeButton} onClick={handleMenuToggle}>
            ✕
          </button>

          <nav>
            <ul>
              <li>
                <Link to="/about" onClick={handleMenuToggle}>Sobre</Link>
              </li>
              <li>
                <Link to="/characters" onClick={handleMenuToggle}>Tripulantes</Link>
              </li>
              <li>
                <Link to="/ships" onClick={handleMenuToggle}>Navios</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
