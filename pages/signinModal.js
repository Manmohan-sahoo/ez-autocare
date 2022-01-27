import React from 'react';
import { Modal } from 'react-bootstrap';
import styles from '../styles/SigninModal.module.css';

const signinModal = (props) => {
  return (
    <Modal 
      className={styles.model_sign_in_main_div}
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className={styles.verify_model}>
          <h4 className={styles.verify_h4}>
            Verify your mobile number to continue
          </h4>
          <input type="tel" className={styles.number_input} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder='Enter Your Contact No.' />
          <br />
          <button className={styles.send_otp_button}>SEND OTP</button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default signinModal;
