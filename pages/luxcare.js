import React, { Component } from 'react';
import styles from '../styles/Luxcare.module.css';
import { Dropdown } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faChevronRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';

import top from '../public/Header images/top.png';
import luxcareSlide from '../public/Ez auto luxe care/slide-image-1.jpg';
import wash from '../public/Our services/car wash.png';
import battery from '../public/Our services/battery.png';
import dentpaint from '../public/Our services/Denting-&-Painting-01-01.png';
import antirust from '../public/Our services/anti rust.png';
import oilchangeicon from '../public/Ez auto luxe care/oilchangeicon.png';
import fuel from '../public/Ez auto luxe care/fuel.png';
import oilrepla from '../public/Ez auto luxe care/oilrepla.png';
import minorcha from '../public/Ez auto luxe care/minorcha.png';
import car from '../public/Ez auto luxe care/car.png';
import oil from '../public/Ez auto luxe care/Rectangle 27.png';
import rectangle28 from '../public/Ez auto luxe care/Rectangle 28.png';
import rectangle29 from '../public/Ez auto luxe care/Rectangle 29.png';
import rectangle30 from '../public/Ez auto luxe care/Rectangle 30.png';
import fortuner from '../public/Custom your package/fortuner.png';
import swift from '../public/Custom your package/swift.png';
import rollsroyce from '../public/Ez auto luxe care/rolls_royce.png';

export default class luxcare extends Component {
  render() {
    return (
      <div>
        <div className={styles.imageContainer}>
          <img className={styles.luxcareImage} src={luxcareSlide.src} alt="" />
        </div>
        <div class="container" id={styles.serviceCategoriesContainer}>
          <h3>Service Categories</h3>
          <div className="d-flex" id={styles.serviceCategory}>
            <div className={styles.servicecard} style={{ width: '250px' }}>
              <div class="row">
                <div class="col-sm-6" id={styles.scCard}>
                  <Image
                    width="50px"
                    height="50px"
                    src={wash}
                    alt="Card image"
                  />
                </div>
                <div class="col-sm-6">
                  <div class="card-body-right">
                    <p class="card-text text-center mt-4">
                      Premium wash & detailing
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.servicecard} style={{ width: '250px' }}>
              <div class="row">
                <div class="col-sm-6" id={styles.scBattery}>
                  <Image
                    width="50px"
                    height="50px"
                    class="card-img"
                    src={battery}
                    alt="Card image"
                  />
                </div>
                <div class="col-sm-6">
                  <div class="card-body-right">
                    <p class="card-text text-center mt-4">Tyres & batteries</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.servicecard} style={{ width: '250px' }}>
              <div class="row">
                <div class="col-sm-6" id={styles.scCard}>
                  <Image
                    width="50px"
                    height="50px"
                    class="card-img"
                    src={dentpaint}
                    alt="Card image"
                  />
                </div>
                <div class="col-sm-6">
                  <div class="card-body-right">
                    <p class="card-text text-center mt-4">Denting & Painting</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.servicecard} style={{ width: '250px' }}>
              <div class="row">
                <div class="col-sm-6" id={styles.scCard}>
                  <Image
                    width="50px"
                    height="50px"
                    class="card-img"
                    src={antirust}
                    alt="Card image"
                  />
                </div>
                <div class="col-sm-6">
                  <div class="card-body-right">
                    <p class="card-text text-center mt-4">Anti Rust Coating</p>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className={styles.rightIcon}>
              <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
            </a>
          </div>
        </div>
        <div className={styles.servicePackagesContainer}>
          <div className="container">
            <h2>Service Packages </h2>
          </div>

          <div className="row" id={styles.servicePackageRow}>
            <div className="col-7">
              <div className="" id={styles.spContainer}>
                <div className="row" id={styles.spRow}>
                  <div className={styles.topImageContainer}>
                    <Image src={top} />
                    <p className={styles.topImagePara}>Titanium Pack</p>
                  </div>
                  <div className="col-sm-3">
                    <Image
                      class="card-img"
                      src={oil}
                      alt="Card image"
                      width="170px"
                      height="150px"
                    />
                    <p className="text-center">
                      <b>Rs. 3299</b>
                    </p>
                  </div>

                  <div className="col-sm-4">
                    <li className="d-flex">
                      <FontAwesomeIcon icon={faClock} />6 Hours
                    </li>
                    <br />

                    <li className="d-flex">
                      <Image src={oilchangeicon} width="20%" height="20%" />
                      Engine Oil Replacement
                    </li>
                    <br />

                    <li className="d-flex">
                      <Image src={fuel} width="20%" height="20%" />
                      Fuel Filter Checking
                    </li>
                    <br />

                    <li className="d-flex">
                      <Image src={oilrepla} width="20%" height="20%" />
                      Oil Filter Replacment
                    </li>
                    <br />

                    <a href="#" className="text-info">
                      Show more..
                    </a>
                  </div>

                  <div className="col-sm-4">
                    {/* <Image src={top} /> */}

                    <li className="d-flex">
                      <Image src={oilrepla} width="20%" height="20%" />
                      Air Filter Replacement
                    </li>
                    <br />

                    <li className="d-flex">
                      <Image src={minorcha} width="20%" height="20%" />
                      Minor Scratch Removal
                    </li>
                    <br />

                    <li className="d-flex">
                      <Image src={car} width="20%" height="20%" />
                      Car Cleaning
                    </li>
                  </div>

                  <div className={styles.buttoncontainer}>
                    <button className={styles.sbutton}>ENQUIRY</button>
                    <button className={styles.sbutton}>CALL</button>
                    <button className={styles.sbutton}>ADD TO CART</button>
                  </div>
                </div>
                <div className="row" id={styles.spRow}>
                  <div className={styles.topImageContainer}>
                    <Image src={top} />
                    <p className={styles.topImagePara}>Gold Pack</p>
                  </div>
                  <div className="col-sm-3">
                    <Image
                      class="card-img"
                      src={rectangle28}
                      alt="Card image"
                      width="170px"
                      height="150px"
                    />
                    <p className="text-center">
                      <b>Rs. 3299</b>
                    </p>
                  </div>

                  <div className="col-sm-4">
                    <li className="d-flex">
                      <FontAwesomeIcon icon={faClock} />6 Hours
                    </li>
                    <br />

                    <li className="d-flex">
                      <Image src={oilchangeicon} width="20%" height="20%" />
                      Engine Oil Replacement
                    </li>
                    <br />

                    <li className="d-flex">
                      <Image src={fuel} width="20%" height="20%" />
                      Fuel Filter Checking
                    </li>
                    <br />

                    <li className="d-flex">
                      <Image src={oilrepla} width="20%" height="20%" />
                      Oil Filter Replacment
                    </li>
                    <br />

                    <a href="#" className="text-info">
                      Show more..
                    </a>
                  </div>

                  <div className="col-sm-4">
                    {/* <Image src={top} /> */}

                    <li className="d-flex">
                      <Image src={oilrepla} width="20%" height="20%" />
                      Air Filter Replacement
                    </li>
                    <br />

                    <li className="d-flex">
                      <Image src={minorcha} width="20%" height="20%" />
                      Minor Scratch Removal
                    </li>
                    <br />

                    <li className="d-flex">
                      <Image src={car} width="20%" height="20%" />
                      Car Cleaning
                    </li>
                  </div>

                  <div className={styles.buttoncontainer}>
                    <button className={styles.sbutton}>ENQUIRY</button>
                    <button className={styles.sbutton}>CALL</button>
                    <button className={styles.sbutton}>ADD TO CART</button>
                  </div>
                </div>
                <div className="row" id={styles.spRow}>
                  <div className={styles.topImageContainer}>
                    <Image src={top} />
                    <p className={styles.topImagePara}>Silver Pack</p>
                  </div>
                  <div className="col-sm-3">
                    <Image
                      class="card-img"
                      src={rectangle29}
                      alt="Card image"
                      width="170px"
                      height="150px"
                    />
                    <p className="text-center">
                      <b>Rs. 3299</b>
                    </p>
                  </div>

                  <div className="col-sm-4">
                    <li className="d-flex">
                      <FontAwesomeIcon icon={faClock} />6 Hours
                    </li>
                    <br />

                    <li className="d-flex">
                      <Image src={oilchangeicon} width="20%" height="20%" />
                      Engine Oil Replacement
                    </li>
                    <br />

                    <li className="d-flex">
                      <Image src={fuel} width="20%" height="20%" />
                      Fuel Filter Checking
                    </li>
                    <br />

                    <li className="d-flex">
                      <Image src={oilrepla} width="20%" height="20%" />
                      Oil Filter Replacment
                    </li>
                    <br />

                    <a href="#" className="text-info">
                      Show more..
                    </a>
                  </div>

                  <div className="col-sm-4">
                    {/* <Image src={top} /> */}

                    <li className="d-flex">
                      <Image src={oilrepla} width="20%" height="20%" />
                      Air Filter Replacement
                    </li>
                    <br />

                    <li className="d-flex">
                      <Image src={minorcha} width="20%" height="20%" />
                      Minor Scratch Removal
                    </li>
                    <br />

                    <li className="d-flex">
                      <Image src={car} width="20%" height="20%" />
                      Car Cleaning
                    </li>
                  </div>

                  <div className={styles.buttoncontainer}>
                    <button className={styles.sbutton}>ENQUIRY</button>
                    <button className={styles.sbutton}>CALL</button>
                    <button className={styles.sbutton}>ADD TO CART</button>
                  </div>
                </div>
                <div className="row" id={styles.spRow}>
                  <div className={styles.topImageContainer}>
                    <Image src={top} />
                    <p className={styles.topImagePara}>Bronze Pack</p>
                  </div>
                  <div className="col-sm-3">
                    <Image
                      class="card-img"
                      src={rectangle30}
                      alt="Card image"
                      width="170px"
                      height="150px"
                    />
                    <p className="text-center">
                      <b>Rs. 3299</b>
                    </p>
                  </div>

                  <div className="col-sm-4">
                    <li className="d-flex">
                      <FontAwesomeIcon icon={faClock} />6 Hours
                    </li>
                    <br />

                    <li className="d-flex">
                      <Image src={oilchangeicon} width="20%" height="20%" />
                      Engine Oil Replacement
                    </li>
                    <br />

                    <li className="d-flex">
                      <Image src={fuel} width="20%" height="20%" />
                      Fuel Filter Checking
                    </li>
                    <br />

                    <li className="d-flex">
                      <Image src={oilrepla} width="20%" height="20%" />
                      Oil Filter Replacment
                    </li>
                    <br />

                    <a href="#" className="text-info">
                      Show more..
                    </a>
                  </div>

                  <div className="col-sm-4">
                    {/* <Image src={top} /> */}

                    <li className="d-flex">
                      <Image src={oilrepla} width="20%" height="20%" />
                      Air Filter Replacement
                    </li>
                    <br />

                    <li className="d-flex">
                      <Image src={minorcha} width="20%" height="20%" />
                      Minor Scratch Removal
                    </li>
                    <br />

                    <li className="d-flex">
                      <Image src={car} width="20%" height="20%" />
                      Car Cleaning
                    </li>
                  </div>

                  <div className={styles.buttoncontainer}>
                    <button className={styles.sbutton}>ENQUIRY</button>
                    <button className={styles.sbutton}>CALL</button>
                    <button className={styles.sbutton}>ADD TO CART</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5" id={styles.bestTreatContainer}>
              <h2 className="text-center mt-5 " id={styles.careh2}>
                Best Care
              </h2>
              <p className="text-center" id={styles.carepara}>
                <b>for your Luxury Car</b>
                <br />
                <img className="mt-5" src={rollsroyce.src} alt="" width="50%" />
              </p>
              <div id={styles.dropdownBasic}>
                <div className={styles.selectBrand}>
                  Rolls-Royce
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
                  Phantom
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
              <button className={styles.addNewCarButton}>Check Pricing</button>
              <br />

              <div className={styles.goldPackContainer}>
                <div id={styles.goldPackRow}>
                  <div>
                    <p>
                      <b>Gold Pack</b>
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
                <span className="d-flex">
                  <p>Grand Total (1 item)</p>{' '}
                  <span className={styles.rupee}>₹ 3299</span>
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
      </div>
    );
  }
}
