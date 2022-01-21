import 'bootstrap/dist/css/bootstrap.css';
import { Modal, Button } from 'react-bootstrap';
import React, { Component } from 'react';

export default class tab extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  handleModal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.handleModal();
          }}
        >
          Open Modal
        </Button>
        <Modal
           aria-labelledby="contained-modal-title-vcenter"
              centered
          show={this.state.show}
          onHide={() => {
            this.handleModal();
          }}
        >
          <Modal.Header closeButton>Modal Head Part</Modal.Header>
          <Modal.Body>hi, modal is here</Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                this.handleModal();
              }}
            >
              Close Modal
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
