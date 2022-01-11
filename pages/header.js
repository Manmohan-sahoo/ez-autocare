import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-brands-svg-icons';

import logo from '../public/headerimg.png';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import car from '../public/header 7.jpg';

export default function Header() {
  return (
    <div>
      <header className={styles.subHeader}>
        <div className="" id={styles.subHeaderRow}>
          <div class="">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              class="me-4 text-reset "
            >
              <FontAwesomeIcon icon={faFacebookF} style={{ color: 'white' }} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              class="me-4 text-reset "
            >
              <FontAwesomeIcon icon={faInstagram} style={{ color: 'white' }} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              class="me-4 text-reset "
            >
              <FontAwesomeIcon icon={faLinkedin} style={{ color: 'white' }} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              class="me-4 text-reset "
            >
              <FontAwesomeIcon icon={faTwitter} style={{ color: 'white' }} />
            </a>
          </div>
          <div class="d-flex" id={styles.subHeaderIcon}>
            <p class="me-5 text-reset">
              <i class="fa fa-phone"> 0755001292</i>
            </p>
            <p class="me-5 text-reset">
              <i class="fa fa-envelope-o">
                <a href="">dm@ezautocare.in</a>
              </i>
            </p>
            <a href="" class="me-5 text-reset">
              FAQ
            </a>
            <a href="" class="me-5 text-reset">
              BLOGS
            </a>
          </div>
        </div>
      </header>
      <div className={styles.nav_container}>
        <nav className="navbar navbar-expand-lg navbar-light bg-none">
          <a href="#">
            <Image src={logo} alt="nav image" height="50%" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav " id={styles.ul}>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Select City
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item active">
                <a className="nav-link text-dark " href="#">
                  HOME <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark " href="#">
                  SERVICE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  LUXE CARE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  OFFERS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  MEMBERSHIP
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  GET A FRANCHISE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  CONTACT
                </a>
              </li>
              <li className="nav-item">
                <Button className={styles.signin}>SIGN IN</Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
