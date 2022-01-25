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
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <FontAwesomeIcon icon={faArrowLeft} /> Maruti Suzuki,Swift
        </Modal.Title>
      </Modal.Header>
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
        <div>
          <div className="row">
            <div className="col">
              <a href="">
                <img src={petrol.src} alt="" width="82px" height="56px" />
                <p>Petrol</p>
              </a>
            </div>
            <div className="col">
              <a href="">
                <img src={disel.src} alt="" width="82px" height="56px" />
                <p>Disel</p>
              </a>
            </div>
            <div className="col">
              <a href="">
                <img src={cng.src} alt="" width="82px" height="56px" />
                <p>CNG</p>
              </a>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default fuelModal;
