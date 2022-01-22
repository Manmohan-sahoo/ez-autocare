import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faChevronDown,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Service.module.css';
import istockphoto from '../public/Custom your package/istockphoto.jpg';
import fortuner from '../public/Custom your package/fortuner.png';
import swift from '../public/Custom your package/swift.png';

export default class servics extends Component {
  render() {
    return (
      <div>
        <img src={istockphoto.src} className={styles.istockphoto} />
        <div className={styles.desiredContainer}>
          <h1 className={styles.h1}>Create your own Package</h1>

          <div className="row" id={styles.desiredServicesRow}>
            <div className="col-6">
              <div className="desired_service_container">
                <div className={styles.tagContainer}>
                  <div className={styles.tagContainerPara1}>
                    <div href="#" className={styles.tagContainerPara}>
                      <p>Oil Filter Replacment</p>
                      <FontAwesomeIcon className={styles.tagContainer_Icon} icon={faTimesCircle} />
                    </div>
                    <div href="#" className={styles.tagContainerPara}>
                      <p>Air Filter Replacement</p>
                      <FontAwesomeIcon className={styles.tagContainer_Icon} icon={faTimesCircle} />
                    </div>
                    <div href="#" className={styles.tagContainerPara}>
                      <p>Air Filter Replacement</p>
                      <FontAwesomeIcon className={styles.tagContainer_Icon} icon={faTimesCircle} />
                    </div>
                  </div>
                    <button className={styles.tagContainerbutton}>Add To card</button>
                </div>
                <br />
                
              </div>
            </div>
            <div className="col-6">
              <div className="col-5" id={styles.bestTreatContainer}>
                <h1 className="text-center">Best Treat</h1>
                <p className="text-center">
                  <b>for your vechile</b>
                </p>
                <div id={styles.dropdownBasic}>
                  <div className={styles.selectBrand}>
                    Select Brand
                    <span className={styles.downIcon}>
                      <a href="#">
                        <FontAwesomeIcon icon={faChevronDown} />
                      </a>
                    </span>
                  </div>
                </div>
                <br />
                <div id={styles.dropdownBasic}>
                  <div className={styles.selectBrand}>
                    Select Model
                    <span className={styles.downIcon}>
                      <a href="#">
                        <FontAwesomeIcon icon={faChevronDown} />
                      </a>
                    </span>
                  </div>
                </div>
                <br />

                <div id={styles.dropdownBasic}>
                  <div className={styles.selectBrand}>
                    Select Fuel Type
                    <span className={styles.fueldownIcon}>
                      <a href="#">
                        <FontAwesomeIcon icon={faChevronDown} />
                      </a>
                    </span>
                  </div>
                </div>
                <br />
                <button className={styles.addNewCarButton}>Add New Car</button>
                <br />
                <div className={styles.addNewCarContainer}>
                  <div className="row" id={styles.addNewCarRow}>
                    <div className="col-3" id={styles.imageCol}>
                      <img src={swift.src} width="80px" height="80px" />
                    </div>
                    <div className="col-9">
                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">Brand</th>
                            <th scope="col">Model</th>
                            <th scope="col">Fuel</th>
                            <th scope="col">Activate</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Maruti Suzuki</td>
                            <td>Swift</td>
                            <td>Diesel</td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <br />
                <div className={styles.addNewCarContainer}>
                  <div className="row" id={styles.addNewCarRow}>
                    <div className="col-3" id={styles.imageCol}>
                      <img src={fortuner.src} width="80px" height="80px" />
                    </div>
                    <div className="col-9">
                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">Brand</th>
                            <th scope="col">Model</th>
                            <th scope="col">Fuel</th>
                            <th scope="col">Activate</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Toyato</td>
                            <td>Fortuner</td>
                            <td>Diesel</td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <br />
                <div className={styles.routineServices}>
                  <span className="d-flex" id={styles.routineServicestext}>
                    <p>Routine Services</p>{' '}
                    <span className={styles.rupee}>₹ 3299</span>
                  </span>
                </div>
                <br />
                <div className={styles.routineServices}>
                  <span className="d-flex" id={styles.routineServicestext}>
                    <p>Tyre Replacements</p>{' '}
                    <span className={styles.rupee}>₹ 3299</span>
                  </span>
                </div>
                <br />
                <div className={styles.routineServices}>
                  <span className="d-flex" id={styles.routineServicestext}>
                    <p>Windshield Repair</p>{' '}
                    <span className={styles.rupee}>₹ 3299</span>
                  </span>
                </div>
                <br />
                <div className={styles.routineServices}>
                  <span className="d-flex" id={styles.routineServicestext}>
                    <p>Oil Change</p>{' '}
                    <span className={styles.rupee}>₹ 3299</span>
                  </span>
                </div>
                <br />
                <div className={styles.routineServices}>
                  <span className="d-flex" id={styles.routineServicestext}>
                    <p>Air Filter Repair</p>{' '}
                    <span className={styles.rupee}>₹ 3299</span>
                  </span>
                </div>
                <br />
                <div className={styles.grandTotalContainer}>
                  <span className="d-flex" id={styles.routineServicestext}>
                    <p>Grand Total (5 items)</p>{' '}
                    <span className={styles.rupee}>₹ 16,495</span>
                  </span>
                </div>
                <br />
                <button className={styles.singinCheckoutButton}>
                  Sign in & Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
