import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Modal from '../pages/modal';
import styles from '../styles/Modal.module.css';

export default function ControlledTabs() {
  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);

  return (
    <>
      {show ? (
        <div onClick={closeModalHandler} className={styles.back_drop}></div>
      ) : null}
      <button onClick={() => setShow(true)} className={styles.btn_openModal}>
        Open Modal
      </button>
      <Modal show={show} close={closeModalHandler} />
    </>
  );
}
