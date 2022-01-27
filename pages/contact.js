import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Accordion } from 'react-bootstrap';

import styles from '../styles/Contact.module.css';
import enquiry from '../public/enquiry.png';

export default class contact extends Component {
  render() {
    return (
      <div className={styles.contact_info_data}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15552.438003415431!2d77.7573448!3d12.9648444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7c5aeff831c5a8fd!2sEZ%20Auto%20Care%20Whitefield!5e0!3m2!1sen!2sin!4v1643255532688!5m2!1sen!2sin"
          width="101.7%"
          height="650"
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
              <div className={styles.ez_autoCare_internal_div}>
                <FontAwesomeIcon className={styles.ez_autoCare_p_tag_icon} icon={faMapMarker} />
                <p className={styles.ez_autoCare_p_tag}>
                  EZ Auto Care, Hagadur Main Rd, near Orchid, Immadihalli,
                  Whitefield, Bengaluru, Karnataka 560066.
                </p>
              </div>
              <div className={styles.ez_autoCare_internal_div}>
                <FontAwesomeIcon className={styles.ez_autoCare_p_tag_icon}  icon={faMapMarker} />
                <p className={styles.ez_autoCare_p_tag}>
                  <a href="">ezautocare.in</a>
                </p>
              </div>
              <div className={styles.ez_autoCare_internal_div_number}>
                <FontAwesomeIcon className={styles.ez_autoCare_p_tag_icon}  icon={faPhone} />
                <p className={styles.ez_autoCare_p_tag}>
                  +91 7544001292
                </p>
              </div>
            </div>
            <div className="col">
              <h3 className={styles.ez_autoCare}>EZ Auto Care Bellandur</h3>
              <div className={styles.ez_autoCare_internal_div}>
                <FontAwesomeIcon className={styles.ez_autoCare_p_tag_icon} icon={faMapMarker} />
                <p className={styles.ez_autoCare_p_tag}>
                  2/1, Bellandur Lake Rd, Yemalur, Bellandur, Bengaluru, Karnataka
                  560037.
                </p>
              </div>
              <div className={styles.ez_autoCare_internal_div}>
                <FontAwesomeIcon className={styles.ez_autoCare_p_tag_icon} icon={faMapMarker} />
                <p className={styles.ez_autoCare_p_tag}>
                  <a href="">ezautocare.in</a>
                </p>
              </div>
              <div className={styles.ez_autoCare_internal_div_number}>
                <FontAwesomeIcon className={styles.ez_autoCare_p_tag_icon} icon={faPhone} />
                <p className={styles.ez_autoCare_p_tag}>
                  +91 7544001292
                </p>
              </div>
            </div>

            <div className="col">
              <h3 className={styles.ez_autoCare}> EZ Auto Care- Electonic city</h3>
              <div className={styles.ez_autoCare_internal_div}>
                <FontAwesomeIcon className={styles.ez_autoCare_p_tag_icon} icon={faMapMarker} />
                <p className={styles.ez_autoCare_p_tag}>
                  Bettadasanapura Main Rd, Electronics City
                  Phase 1, Electronic City, Bengaluru,
                  Karnataka 560100.
                </p>
              </div>
              <div className={styles.ez_autoCare_internal_div}>
                <FontAwesomeIcon className={styles.ez_autoCare_p_tag_icon} icon={faMapMarker} />
                <p className={styles.ez_autoCare_p_tag}>
                  <a href="">ezautocare.in</a>
                </p>
              </div>
              <div className={styles.ez_autoCare_internal_div_number}>
                <FontAwesomeIcon className={styles.ez_autoCare_p_tag_icon} icon={faPhone} />
                <p className={styles.ez_autoCare_p_tag}>
                  +91 7544001292
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contact_information_accordion}>
          <h2 className={styles.contact_information_accordion_head_h2}>Common Car Service Questions</h2>
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

        <div className="container-fluid" id={styles.enquiry_container}>
          <div className="container-fluid" >
            <h3 className={styles.enquiry_h3}>Enquire Now</h3>
            <p className={styles.enquiry_para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
              iaculis auctor quis velit id pulvinar in.
            </p>
          </div>
          <div className="row ">
            <div className="col">
              <img className={styles.enquiry_form_image} src={enquiry.src} alt="" />
            </div>
            <div className="col mt-5">
              <form className={styles.enquiry_form}>
                <div className={styles.form_fields}>
                  <div className={styles.form_fields_div}>
                    <input className={styles.form_fields_lebel} type="text" placeholder='Full Name'/>
                  </div>
                  <div className={styles.form_fields_div}>
                    <input className={styles.form_fields_lebel_1} type="number" placeholder='Phone Number'/>
                    <input className={styles.form_fields_lebel} type="email" placeholder='Email Address'/>
                  </div>
                  <div className={styles.form_fields_div}>
                    <input className={styles.form_fields_lebel_1} type="text" placeholder='State'/>
                    <input className={styles.form_fields_lebel} type="text" placeholder='City'/>
                  </div>
                  <div className={styles.form_fields_div}>
                    <input className={styles.form_fields_lebel_1} type="text" placeholder='Your Car'/>
                    <input className={styles.form_fields_lebel} type="text" placeholder='Request a service'/>
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
