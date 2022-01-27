import React from 'react';

import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/FuelModal.module.css';

import petrol from '../public/fuel/petrol.png';
import disel from '../public/fuel/disel.png';
import cng from '../public/fuel/CNG.png';

const fuelModal = (props) => {
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
              placeholder="select Fuel Type"
              className={styles.input_form}
            />
          </div>

          <button className={styles.next_button}>NEXT</button>
        </div>
        <div className={styles.brand_model_car_brands}>
          <div className={styles.brand_model_car_brands_div_1}>
            <div className={styles.brand_model_car_brands_logo}>
              <a href="" className={styles.brand_model_car_brands_logo_tag}>
                <img src={petrol.src} alt="" width="82px" height="56px" />
                <p className={styles.brand_model_car_brands_p_tag}>Petrol</p>
              </a>
            </div>
            <div className={styles.brand_model_car_brands_logo}>
              <a href="" className={styles.brand_model_car_brands_logo_tag}>
                <img src={disel.src} alt="" width="82px" height="56px" />
                <p className={styles.brand_model_car_brands_p_tag}>Diesel</p>
              </a>
            </div>
            <div className={styles.brand_model_car_brands_logo}>
              <a href="" className={styles.brand_model_car_brands_logo_tag}>
                <img src={cng.src} alt="" width="82px" height="56px" />
                <p className={styles.brand_model_car_brands_p_tag}>CNG</p>
              </a>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default fuelModal;
