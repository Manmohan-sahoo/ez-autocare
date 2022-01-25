import React from 'react';

import { Modal } from 'react-bootstrap';

import styles from '../styles/SelectCityModal.module.css';

import mumbai from '../public/city/mumbai.png';
import agra from '../public/city/agra.png';
import bangalore from '../public/city/bangalore.png';
import delhi from '../public/city/delhi.png';
import hyderabad from '../public/city/hyderabad.png';
import jaipur from '../public/city/jaipur.png';
import kolkata from '../public/city/kolkata.png';
import mysore from '../public/city/mysore.png';
import punjab from '../public/city/punjab.png';

const selectCityModal = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <h4>Select City</h4>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <a href="">
                <img src={mumbai.src} alt="" />
                <p>Mumbai</p>
              </a>
            </div>
            <div className="col">
              <a href="">
                <img src={jaipur.src} alt="" />
                <p>Jaipur</p>
              </a>
            </div>
            <div className="col">
              <a href="">
                <img src={agra.src} alt="" />
                <p>Agra</p>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a href="">
                <img src={hyderabad.src} alt="" />
                <p>Hyderabad</p>
              </a>
            </div>
            <div className="col">
              <a href="">
                <img src={mysore.src} alt="" />
                <p>Mysore</p>
              </a>
            </div>
            <div className="col">
              <a href="">
                <img src={punjab.src} alt="" />
                <p>Punjab</p>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a href="">
                <img src={kolkata.src} alt="" />
                <p>Kolkata</p>
              </a>
            </div>
            <div className="col">
              <a href="">
                <img src={bangalore.src} alt="" />
                <p>Bangalore</p>
              </a>
            </div>
            <div className="col">
              <a href="">
                <img src={delhi.src} alt="" />
                <p>Delhi</p>
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default selectCityModal;
