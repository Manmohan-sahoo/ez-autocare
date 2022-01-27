import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Accordion } from 'react-bootstrap';

import styles from '../styles/Contact.module.css';
import enquiry from '../public/enquiry.png';

export default class contact extends Component {
  render() {
    return (
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15552.438003415431!2d77.7573448!3d12.9648444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7c5aeff831c5a8fd!2sEZ%20Auto%20Care%20Whitefield!5e0!3m2!1sen!2sin!4v1643255532688!5m2!1sen!2sin"
          width="100%"
          height="650"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <h2 className={styles.get_in_touch}>GET IN TOUCH</h2>
        <p className={styles.contact_p_tag}>
          Want to get in touch? We would love to hear from you. Here’s how you
          can reach us..
        </p>

        <div>
          <div className="row" id={styles.ez_autocare_row}>
            <div className="col">
              <h3 className={styles.ez_autoCare}> EZ Auto Care Whitefield</h3>
              <p className={styles.ez_autoCare_p_tag}>
                <FontAwesomeIcon icon={faMapMarker} />
                EZ Auto Care, Hagadur Main Rd, near Orchid, Immadihalli,
                Whitefield, Bengaluru, Karnataka 560066.
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarker} />
                <a href="">ezautocare.in</a>
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} />
                +91 7544001292
              </p>
            </div>
            <div className="col">
              <h3 className={styles.ez_autoCare}> EZ Auto Care Bellandur</h3>
              <p className={styles.ez_autoCare_p_tag}>
                <FontAwesomeIcon icon={faMapMarker} />
                2/1, Bellandur Lake Rd, Yemalur, Bellandur, Bengaluru, Karnataka
                560037.
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarker} />
                <a href="">ezautocare.in</a>
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} />
                +91 7544001292
              </p>
            </div>

            <div className="col">
              <h3 className={styles.ez_autoCare}>
                {' '}
                EZ Auto Care- Electonic city
              </h3>
              <p className={styles.ez_autoCare_p_tag}>
                <FontAwesomeIcon icon={faMapMarker} />
                Bettadasanapura Main Rd, Electronics City Phase 1, Electronic
                City, Bengaluru, Karnataka 560100.
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarker} />
                <a href="">ezautocare.in</a>
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} />
                +91 7544001292
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2>Common Car Service Questions</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Metus
                sit.
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit Metus
                  sit.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <br />
            <Accordion.Item eventKey="1">
              <Accordion.Header className={styles.accordion_header_1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Metus
                sit.
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit Metus
                  sit.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <br />

            <Accordion.Item eventKey="2">
              <Accordion.Header className={styles.accordion_header}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Metus
                sit.
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit Metus
                  sit.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <br />

            <Accordion.Item eventKey="3">
              <Accordion.Header className={styles.accordion_header_1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Metus
                sit.
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit Metus
                  sit.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <br />
          </Accordion>
        </div>

        <div className="container" id={styles.enquiry_container}>
          <div>
            <h3 className={styles.enquiry_h3}>Enquire Now</h3>
            <p className={styles.enquiry_para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
              iaculis auctor quis velit id pulvinar in.
            </p>
          </div>
          <div className="row ">
            <div className="col">
              <img src={enquiry.src} alt="" />
            </div>
            <div className="col mt-5">
              <form className={styles.enquiry_form}>
                <div className="row">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Car"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Request a Service"
                    />
                  </div>
                </div>
                <div className="form-group ">
                  <textarea
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="How May we help you?"
                    className={styles.textarea}
                  ></textarea>
                </div>

                <button type="submit" className={styles.enquiry_submit_button}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
