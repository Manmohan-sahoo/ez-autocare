import React, { Component } from 'react';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretRight,
  faChevronRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Designercombo.module.css';

import designerComboContainerImage from '../public/Designer combo packages/carwork.png';
import vector9 from '../public/Designer combo packages/Vector 9.png';
import combo1 from '../public/Designer combo packages/1.png';
import combo2 from '../public/Designer combo packages/Group 1.png';
import combo3 from '../public/Designer combo packages/Group 564.png';
import engineOil from '../public/Designer combo packages/oil-change-icon.png';
import oilFilter from '../public/Designer combo packages/oil-change-logo-vector-icon-circle-.png';
import fuelFilter from '../public/Designer combo packages/fuel-filter.png';
import CabinFilter from '../public/Designer combo packages/air-car-lifter.png';
import carwire from '../public/Designer combo packages/car-electrical-wiring-line-icon.png';
import rearBreak from '../public/Designer combo packages/brake-icon.png';
import batteryWater from '../public/Designer combo packages/battery-water-topup.png';
import carClean from '../public/Designer combo packages/istockphoto.png';
import tyrePolish from '../public/Designer combo packages/wheel-polish.png';
import minorScartch from '../public/Designer combo packages/scuff-mark-minor-scrat.png';
import fortuner from '../public/Custom your package/fortuner.png';
import swift from '../public/Custom your package/swift.png';

export default class designercombo extends Component {
  render() {
    return (
      <div className={styles.designermambership}>
        <img src={designerComboContainerImage.src} alt="" width="101.7%" />
        <div className={styles.designercombo_container}>
          <img className={styles.vectorImage} src={vector9.src} alt="" />
          <h1 className={styles.designercomboh1}>Designer Combo Packages</h1>
          <div className={styles.priceButton}>₹ 3299</div>
        </div>

        {/* Designer Combo Section */}

        <div className={styles.combo_container}>
          <div className="row">
            <div className="col" id={styles.comboContainer}>
              <Image src={combo3} alt="custom" />
              <div className={styles.combotext}>
                <h4 className={styles.comboh4}>WINGS OF FREEDOM</h4>
                <p className={styles.combopara}>
                  SPEED COMBO{' '}
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className={styles.comboIcon}
                  />
                </p>
              </div>
            </div>
            <div className="col" id={styles.comboContainer}>
              <Image src={combo2} alt="custom" />
              <div className={styles.combotext}>
                <h4 className={styles.comboh4}>ARISTOCRAT</h4>
                <p className={styles.combopara}>
                  SHINE COMBO{' '}
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className={styles.comboIcon}
                  />
                </p>
              </div>
            </div>
            <div className="col" id={styles.comboContainer}>
              <Image src={combo1} alt="custom" />
              <div className={styles.combotext}>
                <h4 className={styles.comboh4}>WANDERLUST</h4>
                <p className={styles.combopara}>
                  ROAD TRIP COMBO{' '}
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className={styles.comboIcon}
                  />
                </p>
              </div>
            </div>
            <a href="#" className={styles.rightIcon}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
            </a>
          </div>
        </div>

        {/* Designer Combo Section */}

        {/* speed combo section */}
        <div className={styles.speed_combo_container}>
          <h3 className={styles.speed_combo_container_h3}>Speed Combo</h3>
          <div className="row">
            <div className="col">
              <div className={styles.engineOilDiv}>
                <div className={styles.image1}>
                  <img
                    src={engineOil.src}
                    alt=""
                    width="60px"
                    height="60px"
                    className={styles.engine_oil_icon}
                  />
                </div>
                <div className={styles.engine_div}>Engine Oil Replacement</div>
              </div>
              <div className={styles.engineOilDiv}>
                <div className={styles.image1}></div>
                <div className={styles.engine_div}>
                  Heater/Spark Plug Checking & Cleaning
                </div>
              </div>
              <div className={styles.engineOilDiv}>
                <div className={styles.image1}>
                  <img
                    src={oilFilter.src}
                    alt=""
                    width="60px"
                    height="60px"
                    className={styles.engine_oil_icon}
                  />
                </div>
                <div className={styles.engine_div}>Oil Filter Replacment</div>
              </div>
              <div className={styles.engineOilDiv}>
                <div className={styles.image1}>
                  <img
                    src={fuelFilter.src}
                    alt=""
                    width="60px"
                    height="60px"
                    className={styles.engine_oil_icon}
                  />
                </div>
                <div className={styles.engine_div}>Fuel Filter Checking</div>
              </div>
              <div className={styles.engineOilDiv}>
                <div className={styles.image1}>
                  <img
                    src={CabinFilter.src}
                    alt=""
                    width="60px"
                    height="60px"
                    className={styles.engine_oil_icon}
                  />
                </div>
                <div className={styles.engine_div}>
                  Cabin Filter/AC Filter Checking & Cleaning
                </div>
              </div>
              <div className={styles.engineOilDiv}>
                <div className={styles.image1}>
                  <img
                    src={carwire.src}
                    alt=""
                    width="60px"
                    height="60px"
                    className={styles.engine_oil_icon}
                  />
                </div>
                <div className={styles.engine_div}>
                  Car Electrical Wiring Checking
                </div>
              </div>
              <div className={styles.engineOilDiv}>
                <div className={styles.image1}>
                  <img
                    src={rearBreak.src}
                    alt=""
                    width="60px"
                    height="60px"
                    className={styles.engine_oil_icon}
                  />
                </div>
                <div className={styles.engine_div}>
                  Rear Break Pads Servicing
                </div>
              </div>
              <div className={styles.engineOilDiv}>
                <div className={styles.image1}></div>
                <div className={styles.engine_div}>
                  Front Break Pads ServicingHeater
                </div>
              </div>
              <div className={styles.engineOilDiv}>
                <div className={styles.image1}>
                  <img
                    src={batteryWater.src}
                    alt=""
                    width="60px"
                    height="60px"
                    className={styles.engine_oil_icon}
                  />
                </div>
                <div className={styles.engine_div}>Battery Water Topup </div>
              </div>
              <div className={styles.engineOilDiv}>
                <div className={styles.image1}>
                  <img
                    src={carClean.src}
                    alt=""
                    width="60px"
                    height="60px"
                    className={styles.engine_oil_icon}
                  />
                </div>
                <div className={styles.engine_div}>Car Cleaning</div>
              </div>
              <div className={styles.engineOilDiv}>
                <div className={styles.image1}>
                  <img
                    src={tyrePolish.src}
                    alt=""
                    width="60px"
                    height="60px"
                    className={styles.engine_oil_icon}
                  />
                </div>
                <div className={styles.engine_div}>
                  Tyre & Alloy Dressing & Polishing
                </div>
              </div>
              <div className={styles.engineOilDiv}>
                <div className={styles.image1}>
                  <img
                    src={minorScartch.src}
                    alt=""
                    width="60px"
                    height="60px"
                    className={styles.engine_oil_icon}
                  />
                </div>
                <div className={styles.engine_div}>Minor Scratch Removal</div>
              </div>
            </div>

            <div className="col" id={styles.bestTreatContainer}>
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
                    <table class="table table-borderless">
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
                    <table class="table table-borderless">
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
              <div className={styles.goldPackContainer}>
                <div id={styles.goldPackRow}>
                  <div>
                    <p>
                      <b>Speed Combo</b>
                    </p>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div id={styles.priceSide}>
                    <p className={styles.priceSidePara}>
                      <b>₹ 3299</b>
                    </p>
                    <p>No additional charges*</p>
                  </div>
                </div>
              </div>
              <br />

              <div className={styles.grandTotalContainer}>
                <span className="d-flex" id={styles.routineServicestext}>
                  <p>Grand Total (1 item)</p>{' '}
                  <span className={styles.rupee}>₹ 3,299</span>
                </span>
              </div>
              <br />
              <button className={styles.singinCheckoutButton}>
                Sign in & Checkout
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        {/* speed combo section */}
      </div>
    );
  }
}
