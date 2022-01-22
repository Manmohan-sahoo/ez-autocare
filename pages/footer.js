import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import logo from '../public/headerimg.png';
import gplay from '../public/Footer images/getiton.png';
import apple from '../public/Footer images/app.png';

export default class footer extends Component {
  render() {
    return (
      <div>
        {/* <!-- Footer --> */}
        <footer
          class="text-center text-lg-start text-muted"
          style={{ backgroundColor: '#EDECEC' }}
        >
          <div className="container">
            {/* <!-- Section: Social media --> */}
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-dark">
              {/* <!-- Left --> */}
              <div class="me-5 d-none d-lg-block">
                <a href="#">
                  <Image src={logo} alt="footerlogo" />
                </a>
              </div>
              {/* <!-- Left --> */}

              {/* <!-- Right --> */}
              <div>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  class="me-4 text-reset fa-2x"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    style={{ color: 'black' }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  class="me-4 text-reset fa-2x"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: 'black' }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  class="me-4 text-reset fa-2x"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: 'black' }}
                  />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  class="me-4 text-reset fa-2x"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ color: 'black' }}
                  />
                </a>
              </div>
              {/* <!-- Right --> */}
            </section>
            {/* <!-- Section: Social media --> */}

            {/* <!-- Section: Links  --> */}
            <section class="">
              <div class="container text-center text-md-start mt-5">
                {/* <!-- Grid row --> */}
                <div class="row mt-3">
                  {/* <!-- Grid column --> */}
                  <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    {/* <!-- Content --> */}
                    <h6 class="text-uppercase fw-bold mb-4">Company</h6>
                    <p>
                      <a href="#!" class="text-reset">
                        About us
                      </a>
                    </p>
                    <p>
                      <a href="#!" class="text-reset">
                        Membership Plans
                      </a>
                    </p>
                    <p>
                      <a href="#!" class="text-reset">
                        Get a Franchise
                      </a>
                    </p>
                    <p>
                      <a class="text-primary" href="#!">
                        Show More...
                      </a>
                    </p>
                  </div>
                  {/* <!-- Grid column --> */}

                  {/* <!-- Grid column --> */}
                  <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* <!-- Links --> */}
                    <h6 class="text-uppercase fw-bold mb-4">services</h6>
                    <p>
                      <a href="#!" class="text-reset">
                        Car Service & Repair
                      </a>
                    </p>
                    <p>
                      <a href="#!" class="text-reset">
                        Car AC Service
                      </a>
                    </p>
                    <p>
                      <a href="#!" class="text-reset">
                        Premium wash
                      </a>
                    </p>
                    <p>
                      <a href="#!" class="text-primary">
                        Show More...
                      </a>
                    </p>
                  </div>
                  {/* <!-- Grid column --> */}

                  {/* <!-- Grid column --> */}
                  <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* <!-- Links --> */}
                    <h6 class="text-uppercase fw-bold mb-4">popular brands</h6>
                    <p>
                      <a href="#!" class="text-reset">
                        Hyundai
                      </a>
                    </p>
                    <p>
                      <a href="#!" class="text-reset">
                        Toyato
                      </a>
                    </p>
                    <p>
                      <a href="#!" class="text-reset">
                        Maruti Suzuki
                      </a>
                    </p>
                    <p>
                      <a href="#!" class="text-primary">
                        Show More...
                      </a>
                    </p>
                  </div>
                  {/* <!-- Grid column --> */}

                  {/* <!-- Grid column --> */}
                  <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    {/* <!-- Links --> */}
                    <h6 class="text-uppercase fw-bold mb-4">cities</h6>
                    <p>Kolkata</p>
                    <p>Mumbai</p>
                    <p>Delhi</p>
                    <p>
                      <a href="#!" class="text-primary">
                        Show More...
                      </a>
                    </p>
                  </div>
                  {/* <!-- Grid column --> */}
                </div>
                {/* <!-- Grid row --> */}
              </div>
            </section>
          </div>
          {/* <!-- Section: Links  --> */}

          <div class="text-center p-4" style={{ backgroundColor: '#3D3D3D' }}>
            <div class="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div class="row mt-3 text-light" id={styles.row}>
                {/* <!-- Grid column --> */}
                <div class="col" id={styles.company}>
                  {/* <!-- Content --> */}
                  <h6 class="text-uppercase fw-bold mb-4">COMPANY</h6>
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} /> dm@ezautocare.in
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPhone} /> 07544001292
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div class="col" id={styles.company}>
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold mb-4">working time</h6>
                  <p>Monday-Sunday | 7pm-9pm</p>
                  <p>Closed on occasions*</p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div class="col">
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold mb-4">download app</h6>
                  <p className="d-flex">
                    <a href="https://play.google.com/" target="_blank">
                      <img src={gplay.src} alt="" width="90%" />
                    </a>
                    <a
                      href="https://www.apple.com/in/app-store/"
                      target="_blank"
                    >
                      <img src={apple.src} alt="" width="90%" />
                    </a>
                  </p>
                </div>
              </div>
              {/* <!-- Grid row --> */}

              {/* <!-- Copyright --> */}
              <div class="text-center p-4 text-light">
                All Right reserved to EZ Auto Care 2021
              </div>
              {/* <!-- Copyright --> */}
            </div>
          </div>
        </footer>
        {/* <!-- Footer --> */}
      </div>
    );
  }
}
