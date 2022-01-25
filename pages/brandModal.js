import React from 'react';

import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/BrandModal.module.css';

import audilogo from '../public/Brands/Audi.png';
import bentely from '../public/Brands/bentely.png';
import ford from '../public/Brands/ford.png';
import honda from '../public/Brands/honda.png';
import jaguar from '../public/Brands/jaguar.png';
import maruti from '../public/Brands/maruti.png';
import nissan from '../public/Brands/nissan.png';

const brandModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <FontAwesomeIcon icon={faArrowLeft} /> Select Your Car
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex">
          <div className={styles.form_group}>
            <FontAwesomeIcon icon={faSearch} className={styles.search_icon} />{' '}
            <input
              type="text"
              placeholder="select brand"
              className={styles.input_form}
            />
          </div>

          <button className={styles.next_button}>NEXT</button>
        </div>
        <div>
          <div className="row">
            <div className="col">
              <a href="">
                <img src={honda.src} alt="" width="82px" height="56px" />
              </a>
            </div>
            <div className="col">
              <a href="">
                <img src={honda.src} alt="" width="82px" height="56px" />
              </a>
            </div>
            <div className="col">
              <a href="">
                <img src={honda.src} alt="" width="82px" height="56px" />
              </a>
            </div>
            <div className="col">
              <a href="">
                <img src={ford.src} alt="" width="82px" height="56px" />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a href="">
                <img src={honda.src} alt="" width="82px" height="56px" />
              </a>
            </div>
            <div className="col">
              <a href="">
                <img src={honda.src} alt="" width="82px" height="56px" />
              </a>
            </div>
            <div className="col">
              <a href="">
                <img src={honda.src} alt="" width="82px" height="56px" />
              </a>
            </div>
            <div className="col">
              <a href="">
                <img src={ford.src} alt="" width="82px" height="56px" />
              </a>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default brandModal;
