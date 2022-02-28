import React from "react";
import "./Footer.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Unete a nosotros y se parte de esta gran comunidad Dev
        </p>
        <p className="footer-subscription-text">
          Puedes aprender en cualquier momento
        </p>
        <div className="input-areas">
          <form>
            <input className="footer-input" name="email" type="email" placeholder="Tu Correo"/>
            <Button buttonStyle="btn--outline">Suscribete</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Acerca de</h2>
            <Link to="/sign-up">Nuestro trabajo</Link>
            <Link to="/">Testimonios</Link>
            <Link to="/">Carreras</Link>
            <Link to="/">Inversores</Link>
            <Link to="/">T y C</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contactanos</h2>
            <Link to="/">Contacto</Link>
            <Link to="/">Ayuda</Link>
            <Link to="/">Sponsors</Link>
            <Link to="/">Trabaja con nosotros</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Videos 4k</Link>
            <Link to="/">Agencia</Link>
            <Link to="/">Influencers</Link>
          </div>
          <div className="footer-link-items">
            <h2>Redes Sociales</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <MdFingerprint className="navbar-icon" />
              JESUS V.
            </Link>
          </div>
          <small className="website-rights">JESUS V. © 2022</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
