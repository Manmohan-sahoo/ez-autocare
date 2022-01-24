import React, { useState } from 'react';

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
import { Accordion, Card } from 'react-bootstrap';


const servics = () => {
  const [desiredList, setDesiredList] = useState([])

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
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Premium Wash & Detailing</Accordion.Header>
                  <Accordion.Body>
                    <div className={styles.checkbox_accordion_body}>
                      <div className={styles.checkbox_accordion}>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Engine Oil Replacement</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Fuel Filter Checking</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Oil Filter Replacment</label>
                        </div>
                      </div>
                      <div className={styles.checkbox_accordion}>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Air Filter Replacement</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Minor Scratch Removal</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Car Cleaning</label>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className={styles.accordion_header_1}>Tyres & batteries </Accordion.Header>
                  <Accordion.Body>
                    <div className={styles.checkbox_accordion_body}>
                      <div className={styles.checkbox_accordion}>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Engine Oil Replacement</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Fuel Filter Checking</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Oil Filter Replacment</label>
                        </div>
                      </div>
                      <div className={styles.checkbox_accordion}>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Air Filter Replacement</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Minor Scratch Removal</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Car Cleaning</label>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className={styles.accordion_header}>Denting & Painting </Accordion.Header>
                  <Accordion.Body>
                    <div className={styles.checkbox_accordion_body}>
                      <div className={styles.checkbox_accordion}>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Engine Oil Replacement</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Fuel Filter Checking</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Oil Filter Replacment</label>
                        </div>
                      </div>
                      <div className={styles.checkbox_accordion}>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Air Filter Replacement</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Minor Scratch Removal</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Car Cleaning</label>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header className={styles.accordion_header_1}>Anti Rust Coating </Accordion.Header>
                  <Accordion.Body>
                    <div className={styles.checkbox_accordion_body}>
                      <div className={styles.checkbox_accordion}>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Engine Oil Replacement</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Fuel Filter Checking</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Oil Filter Replacment</label>
                        </div>
                      </div>
                      <div className={styles.checkbox_accordion}>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Air Filter Replacement</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Minor Scratch Removal</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Car Cleaning</label>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header className={styles.accordion_header}>Car Service & Repair </Accordion.Header>
                  <Accordion.Body>
                    <div className={styles.checkbox_accordion_body}>
                      <div className={styles.checkbox_accordion}>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Engine Oil Replacement</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Fuel Filter Checking</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Oil Filter Replacment</label>
                        </div>
                      </div>
                      <div className={styles.checkbox_accordion}>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Air Filter Replacement</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Minor Scratch Removal</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Car Cleaning</label>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header className={styles.accordion_header_1}>Car Accessories </Accordion.Header>
                  <Accordion.Body>
                    <div className={styles.checkbox_accordion_body}>
                      <div className={styles.checkbox_accordion}>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Engine Oil Replacement</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Fuel Filter Checking</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Oil Filter Replacment</label>
                        </div>
                      </div>
                      <div className={styles.checkbox_accordion}>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Air Filter Replacement</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Minor Scratch Removal</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Car Cleaning</label>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header className={styles.accordion_header}>Ceramic Coating </Accordion.Header>
                  <Accordion.Body>
                    <div className={styles.checkbox_accordion_body}>
                      <div className={styles.checkbox_accordion}>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Engine Oil Replacement</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Fuel Filter Checking</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Oil Filter Replacment</label>
                        </div>
                      </div>
                      <div className={styles.checkbox_accordion}>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Air Filter Replacement</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Minor Scratch Removal</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Car Cleaning</label>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header className={styles.accordion_header_1}>Denting & Painting </Accordion.Header>
                  <Accordion.Body>
                    <div className={styles.checkbox_accordion_body}>
                      <div className={styles.checkbox_accordion}>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Engine Oil Replacement</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Fuel Filter Checking</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Oil Filter Replacment</label>
                        </div>
                      </div>
                      <div className={styles.checkbox_accordion}>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Air Filter Replacement</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Minor Scratch Removal</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Car Cleaning</label>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header className={styles.accordion_header}>Engine Coating </Accordion.Header>
                  <Accordion.Body>
                    <div className={styles.checkbox_accordion_body}>
                      <div className={styles.checkbox_accordion}>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Engine Oil Replacement</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Fuel Filter Checking</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Oil Filter Replacment</label>
                        </div>
                      </div>
                      <div className={styles.checkbox_accordion}>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Air Filter Replacement</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Minor Scratch Removal</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Car Cleaning</label>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header className={styles.accordion_header_1}>Car AC Service </Accordion.Header>
                  <Accordion.Body>
                    <div className={styles.checkbox_accordion_body}>
                      <div className={styles.checkbox_accordion}>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Engine Oil Replacement</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Fuel Filter Checking</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Oil Filter Replacment</label>
                        </div>
                      </div>
                      <div className={styles.checkbox_accordion}>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Air Filter Replacement</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Minor Scratch Removal</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Car Cleaning</label>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                  <Accordion.Header className={styles.accordion_header}>Wheel Alignment & Balancing </Accordion.Header>
                  <Accordion.Body>
                    <div className={styles.checkbox_accordion_body}>
                      <div className={styles.checkbox_accordion}>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Engine Oil Replacement</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Fuel Filter Checking</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Oil Filter Replacment</label>
                        </div>
                      </div>
                      <div className={styles.checkbox_accordion}>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Air Filter Replacement</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Minor Scratch Removal</label>
                        </div>
                        <div className={styles.checkbox_accordion_input_area}>
                          <input className={styles.checkbox_accordion_input} type="checkbox" id="scales" name="scales" />
                          <label className={styles.checkbox_accordion_input_area_label}>Car Cleaning</label>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
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

export default servics;
