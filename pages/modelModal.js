import React from 'react';

import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/ModelModal.module.css';

import swift from '../public/model/swift.png';
import dezire from '../public/model/dezire.png';
import alto from '../public/model/alto.png';
import unnamed from '../public/model/unnamed.png';

const modeldModal = (props) => {
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
            <FontAwesomeIcon className={styles.brand_model_icon} icon={faArrowLeft} /> Maruti Suzuki
          </Modal.Title>
        </Modal.Header>
      </div>
      <Modal.Body>
        <div className="d-flex">
          <div className={styles.form_group}>
            <FontAwesomeIcon icon={faSearch} className={styles.search_icon} />{' '}
            <input
              type="text"
              placeholder="select Model"
              className={styles.input_form}
            />
          </div>

          <button className={styles.next_button}>NEXT</button>
        </div>
        <div className={styles.brand_model_car_brands}>
          <div className={styles.brand_model_car_brands_div_1}>
            <div className={styles.brand_model_car_brands_logo}>
              <a href="">
                <img src={swift.src} alt="" width="82px" height="56px" />
              </a>
            </div>
            <div className={styles.brand_model_car_brands_logo}>
              <a href="">
                <img src={alto.src} alt="" width="82px" height="56px" />
              </a>
            </div>
            <div className={styles.brand_model_car_brands_logo}>
              <a href="">
                <img src={dezire.src} alt="" width="82px" height="56px" />
              </a>
            </div>
            <div className={styles.brand_model_car_brands_logo}>
              <a href="">
                <img src={unnamed.src} alt="" width="82px" height="56px" />
              </a>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default modeldModal;
