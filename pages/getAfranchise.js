import React, { Component } from 'react';

import styles from '../styles/GetAFranchise.module.css';

import franshise from '../public/franchise.png';

import { DropdownButton, Dropdown } from 'react-bootstrap';

export default class getAfranchise extends Component {
  render() {
    return (
      <div className={styles.get_a_franchise}>
        <h1 className={styles.get_a_franchise_h1}>Benefits:</h1>
        <div className="row">
          <div className="col">
            <div className={styles.franchise_first_div}>
              <div className={styles.franchise_first_internal_div}>
                <h3 className={styles.get_a_franchise_h3}>Lorem Ipsum</h3>
                <p className={styles.franchise_icon}>icon</p>
              </div>
              <p className={styles.franchise_para}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                in egestas vel, eget risus varius sit volutpat consequat. Id
                justo, nam sit in ultricies.
              </p>
            </div>
            <div className={styles.franchise_first_div}>
              <div className={styles.franchise_first_internal_div}>
                <h3 className={styles.get_a_franchise_h3}>Lorem Ipsum</h3>
                <p className={styles.franchise_icon}>icon</p>
              </div>
              <p className={styles.franchise_para}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                in egestas vel, eget risus varius sit volutpat consequat. Id
                justo, nam sit in ultricies.
              </p>
            </div>
          </div>
          <div className="col">
            <div className={styles.franchise_first_div}>
              <div className={styles.franchise_first_internal_div}>
                <h3 className={styles.get_a_franchise_h3}>Lorem Ipsum</h3>
                <p className={styles.franchise_icon}>icon</p>
              </div>
              <p className={styles.franchise_para}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                in egestas vel, eget risus varius sit volutpat consequat. Id
                justo, nam sit in ultricies.
              </p>
            </div>
            <div className={styles.franchise_first_div}>
              <div className={styles.franchise_first_internal_div}>
                <h3 className={styles.get_a_franchise_h3}>Lorem Ipsum</h3>
                <p className={styles.franchise_icon}>icon</p>
              </div>
              <p className={styles.franchise_para}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                in egestas vel, eget risus varius sit volutpat consequat. Id
                justo, nam sit in ultricies.
              </p>
            </div>
          </div>
        </div>
        {/*  Become a EZ AutoCare Member  container */}

        <div className="container" id={styles.ez_autoCare_member_container}>
          <div>
            <h3 className={styles.ez_autoCare_member_h3}>
              Become a EZ AutoCare Member{' '}
            </h3>
          </div>
          <div className="row " id={styles.ez_autoCare_member}>
            <div className="col" id={styles.franchise_img}>
              <img id={styles.franchise_img_part} src={franshise.src} alt="" />
            </div>
            <div className="col mt-5">
              <form className={styles.ez_autoCare_member_form}>
                <div className="row">
                  <div className="col">
                    <input
                    id={styles.ez_autoCare_member_form_input}
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div class="col">
                    <input
                    id={styles.ez_autoCare_member_form_input}
                      type="text"
                      class="form-control"
                      placeholder="Contact no"
                    />
                  </div>
                </div>
                <div>
                  <input
                    id={styles.ez_autoCare_member_form_input}
                    type="text"
                    class="form-control"
                    placeholder="Mail id"
                  />
                </div>
                <div>
                  <DropdownButton
                    className={styles.ez_autoCare_member_form_input}
                    variant="light"
                    id="dropdown-basic-button "
                    title="Preferred Location"
                  >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </DropdownButton>
                </div>

                <div class="form-group ">
                  <textarea
                    className={styles.ez_autoCare_member_form_textarea}
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="Ask a Query"
                  ></textarea>
                </div>

                <button type="submit" className={styles.ez_autoCare_member_form_button}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/*  Become a EZ AutoCare Member  container */}
      </div>
    );
  }
}
