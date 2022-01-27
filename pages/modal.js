import React from 'react';

import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Modal.module.css';

import audilogo from '../public/Brands/Audi.png';
import bentely from '../public/Brands/bentely.png';
import ford from '../public/Brands/ford.png';
import honda from '../public/Brands/honda.png';
import jaguar from '../public/Brands/jaguar.png';
import maruti from '../public/Brands/maruti.png';
import nissan from '../public/Brands/nissan.png';

const modal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className={styles.brand_model}>
        <Modal.Header closeButton>

          <Modal.Title id="contained-modal-title-vcenter">
            <FontAwesomeIcon className={styles.brand_model_icon} icon={faArrowLeft} /> Select Your brand
          </Modal.Title>
        </Modal.Header>
      </div>
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
        <div className={styles.brand_model_car_brands}>
          <div className={styles.brand_model_car_brands_div_1}>
            <div className={styles.brand_model_car_brands_logo}>
              <a href="" >
                <img src={honda.src} alt="" width="82px" height="56px" />
              </a>
            </div>
            <div className={styles.brand_model_car_brands_logo}>
              <a href="">
                <img src={honda.src} alt="" width="82px" height="56px" />
              </a>
            </div>
            <div className={styles.brand_model_car_brands_logo}>
              <a href="">
                <img src={honda.src} alt="" width="82px" height="56px" />
              </a>
            </div>
            <div className={styles.brand_model_car_brands_logo}>
              <a href="">
                <img src={ford.src} alt="" width="82px" height="56px" />
              </a>
            </div>
          </div>
          <div className={styles.brand_model_car_brands_div_1}>
            <div className={styles.brand_model_car_brands_logo}>
              <a href="">
                <img src={honda.src} alt="" width="82px" height="56px" />
              </a>
            </div>
            <div className={styles.brand_model_car_brands_logo}>
              <a href="">
                <img src={honda.src} alt="" width="82px" height="56px" />
              </a>
            </div>
            <div className={styles.brand_model_car_brands_logo}>
              <a href="">
                <img src={honda.src} alt="" width="82px" height="56px" />
              </a>
            </div>
            <div className={styles.brand_model_car_brands_logo}>
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

export default modal;
