import React from 'react';
import { Modal } from 'react-bootstrap';
import styles from '../styles/SigninModal.module.css';

const signinModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4 className={styles.verify_h4}>
          Verify your mobile number to continue
        </h4>
        <input type="number" className={styles.number_input} />
        <br />
        <button className={styles.send_otp_button}>SEND OTP</button>
      </Modal.Body>
    </Modal>
  );
};

export default signinModal;
