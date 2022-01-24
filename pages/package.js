import React, { Component } from 'react';
import styles from '../styles/Package.module.css';
import { Dropdown } from 'react-bootstrap';

import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faChevronRight,
  faChevronDown,
  faRupeeSign,
} from '@fortawesome/free-solid-svg-icons';

import header from '../public/Header images/service.png';
import wash from '../public/Our services/car wash.png';
import battery from '../public/Our services/battery.png';
import dentpaint from '../public/Our services/Denting-&-Painting-01-01.png';
import antirust from '../public/Our services/anti rust.png';
import oil from '../public/Ez auto luxe care/Rectangle 27.png';
import oilchangeicon from '../public/Ez auto luxe care/oilchangeicon.png';
import fuel from '../public/Ez auto luxe care/fuel.png';
import oilrepla from '../public/Ez auto luxe care/oilrepla.png';
import car from '../public/Ez auto luxe care/car.png';
import minorcha from '../public/Ez auto luxe care/minorcha.png';
import top from '../public/Header images/top.png';
import rectangle28 from '../public/Ez auto luxe care/Rectangle 28.png';
import rectangle29 from '../public/Ez auto luxe care/Rectangle 29.png';
import rectangle30 from '../public/Ez auto luxe care/Rectangle 30.png';
import fortuner from '../public/Custom your package/fortuner.png';
import swift from '../public/Custom your package/swift.png';

export default class service extends Component {
  render() {
    return (
      <div className={styles.serviceContainer}>
        <div>
          <img src={header.src} width="101.7%"/>
        </div>

        <div class="container" id={styles.serviceCategoriesContainer}>
          <h3 className={styles.serviceCategoriesContainer_h3}>Service Categories</h3>
          <div className="d-flex" id={styles.serviceCategory}>
            <div className={styles.servicecard} style={{ width: '268px' }}>
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
            <h2 className={styles.servicePackagesContainer_h2}>Service Packages </h2>
          </div>

          <div className="row" id={styles.servicePackageRow}>
            <div className="col-7">
              <div className="" id={styles.spContainer}>
                <div className="row" id={styles.spRow}>
                  <div className={styles.topImageContainer}>
                    <Image src={top} />
                    <p className={styles.topImagePara}>Titanium Pack</p>
                  </div>
                  <div className="col-sm-3" id={styles.second_ImageContainer}>
                    <Image
                      class="card-img"
                      src={oil}
                      alt="Card image"
                    />
                    <p className="text-center">
                      <b>Rs. 3299</b>
                    </p>
                  </div>

                  <div className="col-sm-4" id={styles.second_Container}>
                    <li className={styles.second_Container_li}>
                      <FontAwesomeIcon className={styles.second_Container_icon} icon={faClock} />
                      <p className={styles.second_Container_text}>6 Hours</p>
                    </li>
                    <br />

                    <li className={styles.second_Container_li}>
                      <Image className={styles.second_Container_image} src={oilchangeicon} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Engine Oil Replacement</p>
                    </li>
                    <br />

                    <li className={styles.second_Container_li}>
                      <Image src={fuel} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Fuel Filter Checking</p>
                    </li>
                    <br />

                    <li className={styles.second_Container_li}>
                      <Image src={oilrepla} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Oil Filter Replacment</p>
                    </li>
                    <br />

                    <a href="#" className="text-info" id={styles.second_Container_a_tag}>
                      Show more..
                    </a>
                  </div>

                  <div className="col-sm-4" id={styles.second_Container_part_2}>
                    {/* <Image src={top} /> */}

                    <li className={styles.second_Container_li}>
                      <Image src={oilrepla} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Air Filter Replacement</p>
                    </li>
                    <br />

                    <li className={styles.second_Container_li}>
                      <Image src={minorcha} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Minor Scratch Removal</p>
                    </li>
                    <br />

                    <li className={styles.second_Container_li}>
                      <Image src={car} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Car Cleaning</p>
                    </li>
                  </div>

                  <div className={styles.buttoncontainer}>
                    <button className={styles.sbutton}>ADD TO CART</button>
                  </div>
                </div>
                <div className="row" id={styles.spRow}>
                  <div className={styles.topImageContainer}>
                    <Image src={top} />
                    <p className={styles.topImagePara}>Gold Pack</p>
                  </div>
                  <div className="col-sm-3" id={styles.second_ImageContainer}>
                    <Image
                      class="card-img"
                      src={oil}
                      alt="Card image"
                    />
                    <p className="text-center">
                      <b>Rs. 3299</b>
                    </p>
                  </div>

                  <div className="col-sm-4" id={styles.second_Container}>
                    <li className={styles.second_Container_li}>
                      <FontAwesomeIcon className={styles.second_Container_icon} icon={faClock} />
                      <p className={styles.second_Container_text}>6 Hours</p>
                    </li>
                    <br />

                    <li className={styles.second_Container_li}>
                      <Image className={styles.second_Container_image} src={oilchangeicon} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Engine Oil Replacement</p>
                    </li>
                    <br />

                    <li className={styles.second_Container_li}>
                      <Image src={fuel} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Fuel Filter Checking</p>
                    </li>
                    <br />

                    <li className={styles.second_Container_li}>
                      <Image src={oilrepla} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Oil Filter Replacment</p>
                    </li>
                    <br />

                    <a href="#" className="text-info" id={styles.second_Container_a_tag}>
                      Show more..
                    </a>
                  </div>

                  <div className="col-sm-4" id={styles.second_Container_part_2}>
                    {/* <Image src={top} /> */}

                    <li className={styles.second_Container_li}>
                      <Image src={oilrepla} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Air Filter Replacement</p>
                    </li>
                    <br />

                    <li className={styles.second_Container_li}>
                      <Image src={minorcha} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Minor Scratch Removal</p>
                    </li>
                    <br />

                    <li className={styles.second_Container_li}>
                      <Image src={car} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Car Cleaning</p>
                    </li>
                  </div>

                  <div className={styles.buttoncontainer}>
                    <button className={styles.sbutton}>ADD TO CART</button>
                  </div>
                </div>
                <div className="row" id={styles.spRow}>
                  <div className={styles.topImageContainer}>
                    <Image src={top} />
                    <p className={styles.topImagePara}>Silver Pack</p>
                  </div>
                  <div className="col-sm-3" id={styles.second_ImageContainer}>
                    <Image
                      class="card-img"
                      src={oil}
                      alt="Card image"
                    />
                    <p className="text-center">
                      <b>Rs. 3299</b>
                    </p>
                  </div>

                  <div className="col-sm-4" id={styles.second_Container}>
                    <li className={styles.second_Container_li}>
                      <FontAwesomeIcon className={styles.second_Container_icon} icon={faClock} />
                      <p className={styles.second_Container_text}>6 Hours</p>
                    </li>
                    <br />

                    <li className={styles.second_Container_li}>
                      <Image className={styles.second_Container_image} src={oilchangeicon} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Engine Oil Replacement</p>
                    </li>
                    <br />

                    <li className={styles.second_Container_li}>
                      <Image src={fuel} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Fuel Filter Checking</p>
                    </li>
                    <br />

                    <li className={styles.second_Container_li}>
                      <Image src={oilrepla} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Oil Filter Replacment</p>
                    </li>
                    <br />

                    <a href="#" className="text-info" id={styles.second_Container_a_tag}>
                      Show more..
                    </a>
                  </div>

                  <div className="col-sm-4" id={styles.second_Container_part_2}>
                    {/* <Image src={top} /> */}

                    <li className={styles.second_Container_li}>
                      <Image src={oilrepla} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Air Filter Replacement</p>
                    </li>
                    <br />

                    <li className={styles.second_Container_li}>
                      <Image src={minorcha} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Minor Scratch Removal</p>
                    </li>
                    <br />

                    <li className={styles.second_Container_li}>
                      <Image src={car} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Car Cleaning</p>
                    </li>
                  </div>

                  <div className={styles.buttoncontainer}>
                    <button className={styles.sbutton}>ADD TO CART</button>
                  </div>
                </div>
                <div className="row" id={styles.spRow}>
                  <div className={styles.topImageContainer}>
                    <Image src={top} />
                    <p className={styles.topImagePara}>Bronze Pack</p>
                  </div>
                  <div className="col-sm-3" id={styles.second_ImageContainer}>
                    <Image
                      class="card-img"
                      src={oil}
                      alt="Card image"
                    />
                    <p className="text-center">
                      <b>Rs. 3299</b>
                    </p>
                  </div>

                  <div className="col-sm-4" id={styles.second_Container}>
                    <li className={styles.second_Container_li}>
                      <FontAwesomeIcon className={styles.second_Container_icon} icon={faClock} />
                      <p className={styles.second_Container_text}>6 Hours</p>
                    </li>
                    <br />

                    <li className={styles.second_Container_li}>
                      <Image className={styles.second_Container_image} src={oilchangeicon} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Engine Oil Replacement</p>
                    </li>
                    <br />

                    <li className={styles.second_Container_li}>
                      <Image src={fuel} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Fuel Filter Checking</p>
                    </li>
                    <br />

                    <li className={styles.second_Container_li}>
                      <Image src={oilrepla} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Oil Filter Replacment</p>
                    </li>
                    <br />

                    <a href="#" className="text-info" id={styles.second_Container_a_tag}>
                      Show more..
                    </a>
                  </div>

                  <div className="col-sm-4" id={styles.second_Container_part_2}>
                    {/* <Image src={top} /> */}

                    <li className={styles.second_Container_li}>
                      <Image src={oilrepla} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Air Filter Replacement</p>
                    </li>
                    <br />

                    <li className={styles.second_Container_li}>
                      <Image src={minorcha} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Minor Scratch Removal</p>
                    </li>
                    <br />

                    <li className={styles.second_Container_li}>
                      <Image src={car} width="15%" height="15%" />
                      <p className={styles.second_Container_text_1}>Car Cleaning</p>
                    </li>
                  </div>

                  <div className={styles.buttoncontainer}>
                    <button className={styles.sbutton}>ADD TO CART</button>
                  </div>
                </div>
              </div>
            </div>
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
                    <Image src={swift} width="150px" height="100px" />
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
                    <Image src={fortuner} width="150px" height="100px" />
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
                <div className="row" id={styles.goldPackRow}>
                  <div className="col">
                    <p>
                      <b>Gold Pack</b>
                    </p>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="col ">
                    <p className="text-center">
                      <FontAwesomeIcon icon={faRupeeSign} />
                      <b>3299</b>
                    </p>
                    <p>No additional charges*</p>
                  </div>
                </div>
              </div>
              <br />
              <div className={styles.grandTotalContainer}>
                <div className="row" id={styles.grandTotalRow}>
                  <div className="col">
                    <p>Grand Total(1 item)</p>
                  </div>
                  <div className="col">
                    <p className="text-center">
                      <FontAwesomeIcon icon={faRupeeSign} />
                      <b>3299</b>
                    </p>
                  </div>
                </div>
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
