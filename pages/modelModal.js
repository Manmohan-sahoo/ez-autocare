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
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <FontAwesomeIcon icon={faArrowLeft} /> Maruti Suzuki
        </Modal.Title>
      </Modal.Header>
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
        <div>
          <div className="row">
            <div className="col">
              <a href="">
                <img src={swift.src} alt="" width="82px" height="56px" />
              </a>
            </div>
            <div className="col">
              <a href="">
                <img src={alto.src} alt="" width="82px" height="56px" />
              </a>
            </div>
            <div className="col">
              <a href="">
                <img src={dezire.src} alt="" width="82px" height="56px" />
              </a>
            </div>
            <div className="col">
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
