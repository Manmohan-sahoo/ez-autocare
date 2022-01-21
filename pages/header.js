import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown, Button, Modal } from 'react-bootstrap';
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
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import car from '../public/header 7.jpg';

export default class header extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  handleModal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <header className={styles.subHeader}>
          <div className="" id={styles.subHeaderRow}>
            <div className="">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="me-4 text-reset "
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  style={{ color: 'white' }}
                />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="me-4 text-reset "
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: 'white' }}
                />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="me-4 text-reset "
              >
                <FontAwesomeIcon icon={faLinkedin} style={{ color: 'white' }} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="me-4 text-reset "
              >
                <FontAwesomeIcon icon={faTwitter} style={{ color: 'white' }} />
              </a>
            </div>
            <div className="d-flex" id={styles.subHeaderIcon}>
              <p className="me-5 text-reset">
                <i className="fa fa-phone"> 0755001292</i>
              </p>
              <p className="me-5 text-reset">
                <i className="fa fa-envelope-o text-light">
                  <a href="">dm@ezautocare.in</a>
                </i>
              </p>
              <a href="" className="me-5 text-reset">
                FAQ
              </a>
              <a href="" className="me-5 text-reset">
                BLOGS
              </a>
            </div>
          </div>
        </header>
        <div className={styles.nav_container}>
          <nav className="navbar  navbar-expand-lg navbar-light bg-none">
            <Link href="/">
              <a>
                <Image src={logo} alt="nav image" height="50%" />
              </a>
            </Link>
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
                <li className="nav-item dropdown">
                  <button
                    onClick={() => {
                      this.handleModal();
                    }}
                    className={styles.cityButton}
                  >
                    {' '}
                    Select City
                  </button>
                  <Modal
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.show}
                    onHide={() => {
                      this.handleModal();
                    }}
                  >
                    <Modal.Header closeButton>Modal Head Part</Modal.Header>
                    <Modal.Body>hi, modal is here</Modal.Body>
                  </Modal>
                </li>
                <li className="nav-item active">
                  <Link href="/">
                    <a className="nav-link text-dark ">
                      HOME <span className="sr-only">(current)</span>
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/service">
                    <a className="nav-link text-dark ">SERVICE</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/luxcare">
                    <a className="nav-link text-dark">LUXE CARE</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/package">
                    <a className="nav-link text-dark" href="#">
                      OFFERS
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/designercombo">
                    <a className="nav-link text-dark">MEMBERSHIP</a>
                  </Link>
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
                  <button
                    onClick={() => {
                      this.handleModal();
                    }}
                    className={styles.signin}
                  >
                    SIGN IN
                  </button>
                  <Modal
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.show}
                    onHide={() => {
                      this.handleModal();
                    }}
                  >
                    <Modal.Header closeButton>Modal Head Part</Modal.Header>
                    <Modal.Body>hi, modal is here</Modal.Body>
                  </Modal>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
