import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Tabs, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faCaretRight,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { Carousel } from 'react-responsive-carousel';

import header1 from '../public/Header images/header 1.jpg';
import header2 from '../public/Header images/header 2.jpg';
import header3 from '../public/Header images/header 3.png';
import header4 from '../public/Header images/header 4.jpg';
import header5 from '../public/Header images/header 5.jpg';
import header6 from '../public/Header images/header 6.jpg';
import header7 from '../public/Header images/header 7.jpg';
import car1 from '../public/Exciting offers/Group 431.png';
import car2 from '../public/Exciting offers/Group 560.png';
import car3 from '../public/Exciting offers/Group 561.png';
import image1 from '../public/Why ez auto care/car-pick-up-hyderabad-car-o-man.jpg';
import image2 from '../public/Why ez auto care/Warranty vs. Service Photo.jpg';
import image3 from '../public/Why ez auto care/used-engine-for-sale-florida.jpg';
import custom from '../public/Custom your package/custom.jpeg';
import rolls from '../public/Ez auto luxe care/rools royes.jpg';
import bmw from '../public/Ez auto luxe care/bmw.jpg';
import audi from '../public/Ez auto luxe care/audi.webp';
import rangerover from '../public/Ez auto luxe care/rangerover.jpg';
import group1 from '../public/Trending services/Group 1.png';
import group2 from '../public/Trending services/Group 519.png';
import group3 from '../public/Trending services/Group 562.png';
import group4 from '../public/Trending services/Group 563.png';
import combo1 from '../public/Designer combo packages/1.png';
import combo2 from '../public/Designer combo packages/Group 1.png';
import combo3 from '../public/Designer combo packages/Group 564.png';
import feature1 from '../public/Our features/1.png';
import feature2 from '../public/Our features/2.png';
import feature3 from '../public/Our features/3.png';
import feature4 from '../public/Our features/4.png';
import enquirycar from '../public/Footer images/car.jpeg';
import audilogo from '../public/Brands/Audi.png';
import bentely from '../public/Brands/bentely.png';
import ford from '../public/Brands/ford.png';
import honda from '../public/Brands/honda.png';
import jaguar from '../public/Brands/jaguar.png';
import maruti from '../public/Brands/maruti.png';
import nissan from '../public/Brands/nissan.png';
import antiRrust from '../public/Our services/anti rust.png';
import carwash from '../public/Our services/car wash.png';
import battery from '../public/Our services/battery.png';
import caraccess from '../public/Our services/anti rust.png';
import carservice from '../public/Our services/maintanance.png';
import carAcService from '../public/Our services/carAcService.png';
import dentiingpainting from '../public/Our services/Denting-&-Painting-01-01.png';
// import minorscarch from '../public/Our services/minor_scarch_removal.png';
import Ceramic_Coating from '../public/Our services/Ceramic Coating.png';
import wheelicon from '../public/Our services/wheels_icon.png';
import enginecoating from '../public/Our services/engine_coating.png';
import performance_car from '../public/Designer combo packages/performance-car.png';
import carside_view from '../public/Designer combo packages/car-side-view.png';
import car_tyre from '../public/Designer combo packages/car tyre.png';
import battery_check_thumb from '../public/Designer combo packages/battery-check-thumb 1.png';

import Image from 'next/image';
import { NavDropdown, Button, Card } from 'react-bootstrap';

import styles from '../styles/Index.module.css';

export default class index extends Component {
  render() {
    return (
      <div id={styles.body}>
        {/* slider */}
        <div>
          <Carousel autoPlay="true" infiniteLoop="true">
            <div>
              <img src={header1.src} alt="image1" />
            </div>
            <div>
              <img src={header2.src} alt="image2" />
            </div>
            <div>
              <img src={header3.src} alt="image3" />
            </div>
            <div>
              <img src={header4.src} alt="image3" />
            </div>
            <div>
              <img src={header5.src} alt="image3" />
            </div>
            <div>
              <img src={header6.src} alt="image3" />
            </div>
            <div>
              <img src={header7.src} alt="image3" />
            </div>
          </Carousel>
        </div>
        {/* slider */}

        <div className="container" id={styles.menu}>
          <div className="row">
            <div className="col-sm">
              <Button> Select Car</Button>
            </div>
            <div className="col-sm">
              <NavDropdown title="Brand" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="col-sm">
              <NavDropdown title="Model" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <div className="col-sm">
              <NavDropdown title="Fuel Type" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="col">
              <Button> Find Services</Button>
            </div>
          </div>
        </div>

        <div className="exciting_container">
          <h1 className={styles.lux_care_h1}>Exciting Offers</h1>

          <div className="d-flex">
            <div className="">
              <img id={styles.excitingImgDiv} src={car1.src} alt="nav image" />
            </div>
            <div className="">
              <img id={styles.excitingImgDiv} src={car2.src} alt="nav image" />
            </div>
            <div className="">
              <img id={styles.excitingImgDiv3} src={car3.src} alt="nav image" />
            </div>
          </div>
        </div>

        {/* Why EzautoCare container */}
        <div className={styles.why_ez_autocare_container}>
          <h1 className={styles.lux_care_h1}>Why EZ AutoCare</h1>

          <div className="row" id={styles.ez_autocare_first_row}>
            <div className="col-sm-6">
              <div className={styles.ez_autcare_div}>
                <img
                  className={styles.ez_autcare_img}
                  src={image1.src}
                  alt=""
                />
                <div className={styles.ez_autcare_text_div}>
                  <h3 className={styles.ez_autcare_h3}>
                    Free Doorstep Pick-up & Drop
                  </h3>
                  <p className={styles.ez_autcare_p}>
                    No more unnecessary workshop visits!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className={styles.ez_autcare_div}>
                <img
                  className={styles.ez_autcare_img}
                  src={image2.src}
                  alt=""
                />
                <div className={styles.ez_autcare_text_div}>
                  <h3 className={styles.ez_autcare_h3}>
                    Upfront & Competitive Pricing
                  </h3>
                  <p className={styles.ez_autcare_p}>
                    Save Upto 40% on car’s service.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row" id={styles.ez_autocare_second_row}>
            <div className="col">
              <div className={styles.ez_autcare_div}>
                <img
                  className={styles.ez_autcare_img}
                  src={image2.src}
                  alt=""
                />
                <div className={styles.ez_autcare_text_div}>
                  <h3 className={styles.ez_autcare_h3}>
                    Network Warranty on Car Service
                  </h3>
                  <p className={styles.ez_autcare_p}>
                    1 month/1000kms unconditional warranty on car service. No
                    questions asked!
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={styles.ez_autcare_div}>
                <img
                  className={styles.ez_autcare_img}
                  src={image3.src}
                  alt=""
                />
                <div className={styles.ez_autcare_text_div}>
                  <h3 className={styles.ez_autcare_h3}>
                    100% Genuine Spare Parts
                  </h3>
                  <p className={styles.ez_autcare_p}>
                    Only OEM/OES spare parts used. Quality Assured!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Why EzautoCare container */}

        {/* our services container */}

        <div className={styles.our_service_container}>
          <h1 className={styles.lux_care_h1}>Our Services</h1>

          <Tabs
            defaultActiveKey="All Services"
            id="uncontrolled-tab-example"
            className="mb-3 "
          >
            <Tab eventKey="All Services" title="All Services">
              <div className="container d-flex justify-content-between">
                <div id={styles.carwashRow}>
                  <div className="row">
                    <div className="col">
                      <div className="row" id={styles.carwashimageRow}>
                        <img
                          src={carwash.src}
                          alt="carwash"
                          className={styles.carwashImage}
                        />
                      </div>
                      <div className="row" id={styles.carwashtextRow}>
                        Premium wash & detailing (2 wheeler also)
                      </div>
                    </div>
                  </div>
                </div>
                <div id={styles.carwashRow}>
                  <div className="row">
                    <div className="col">
                      <div className="row" id={styles.carwashimageRow}>
                        <img
                          src={battery.src}
                          alt="carwash"
                          className={styles.carwashImage}
                        />
                      </div>
                      <div className="row" id={styles.carwashtextRow}>
                        Tyres & batteries
                      </div>
                    </div>
                  </div>
                </div>
                <div id={styles.carwashRow}>
                  <div className="row">
                    <div className="col">
                      <div className="row" id={styles.carwashimageRow}>
                        <img
                          src={dentiingpainting.src}
                          alt="carwash"
                          className={styles.carwashImage}
                        />
                      </div>
                      <div className="row" id={styles.carwashtextRow}>
                        Denting & Painting
                      </div>
                    </div>
                  </div>
                </div>
                <div id={styles.carwashRow}>
                  <div className="row">
                    <div className="col">
                      <div className="row" id={styles.carwashimageRow}>
                        <img
                          src={antiRrust.src}
                          alt="carwash"
                          className={styles.carwashImage}
                        />
                      </div>
                      <div className="row" id={styles.carwashtextRow}>
                        Anti Rust Coating
                      </div>
                    </div>
                  </div>
                </div>
                <div id={styles.carwashRow}>
                  <div className="row">
                    <div className="col">
                      <div className="row" id={styles.carwashimageRow}>
                        <img
                          src={carservice.src}
                          alt="carwash"
                          className={styles.carwashImage}
                        />
                      </div>
                      <div className="row" id={styles.carwashtextRow}>
                        Car Service & Repair
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container d-flex justify-content-between mt-5">
                <div id={styles.carwashRow}>
                  <div className="row">
                    <div className="col">
                      <div className="row" id={styles.carwashimageRow}>
                        <img
                          src={carAcService.src}
                          alt="carwash"
                          className={styles.carwashImage}
                        />
                      </div>
                      <div className="row" id={styles.carwashtextRow}>
                        Car AC Service
                      </div>
                    </div>
                  </div>
                </div>
                <div id={styles.carwashRow}>
                  <div className="row">
                    <div className="col">
                      <div className="row" id={styles.carwashimageRow}>
                        <img
                          src={wheelicon.src}
                          alt="carwash"
                          className={styles.carwashImage}
                        />
                      </div>
                      <div className="row" id={styles.carwashtextRow}>
                        Wheel Alignment & Balancing
                      </div>
                    </div>
                  </div>
                </div>
                <div id={styles.carwashRow}>
                  <div className="row">
                    <div className="col">
                      <div className="row" id={styles.carwashimageRow}>
                        <img
                          src={enginecoating.src}
                          alt="carwash"
                          className={styles.carwashImage}
                        />
                      </div>
                      <div className="row" id={styles.carwashtextRow}>
                        Engine Coating
                      </div>
                    </div>
                  </div>
                </div>
                <div id={styles.carwashRow}>
                  <div className="row">
                    <div className="col">
                      <div className="row" id={styles.carwashimageRow}>
                        <img
                          src={caraccess.src}
                          alt="carwash"
                          className={styles.carwashImage}
                        />
                      </div>
                      <div className="row" id={styles.carwashtextRow}>
                        Car Accessories
                      </div>
                    </div>
                  </div>
                </div>
                <div id={styles.carwashRow}>
                  <div className="row">
                    <div className="col">
                      <div className="row" id={styles.carwashimageRow}>
                        <img
                          src={Ceramic_Coating.src}
                          alt="carwash"
                          className={styles.carwashImage}
                        />
                      </div>
                      <div className="row" id={styles.carwashtextRow}>
                        Ceramic Coating
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                id={styles.seeMore}
                className="text-primary d-flex flex-row-reverse"
                href=""
              >
                See More
              </a>
            </Tab>
            <Tab eventKey="Doorstep Service" title="Doorstep Service">
              <div className="container d-flex justify-content-between">
                <div id={styles.carwashRow}>
                  <div className="row">
                    <div className="col">
                      <div className="row" id={styles.carwashimageRow}>
                        <img
                          src={carwash.src}
                          alt="carwash"
                          className={styles.carwashImage}
                        />
                      </div>
                      <div className="row" id={styles.carwashtextRow}>
                        Premium wash & detailing (2 wheeler also)
                      </div>
                    </div>
                  </div>
                </div>
                <div id={styles.carwashRow}>
                  <div className="row">
                    <div className="col">
                      <div className="row" id={styles.carwashimageRow}>
                        <img
                          src={battery.src}
                          alt="carwash"
                          className={styles.carwashImage}
                        />
                      </div>
                      <div className="row" id={styles.carwashtextRow}>
                        Tyres & batteries
                      </div>
                    </div>
                  </div>
                </div>
                <div id={styles.carwashRow}>
                  <div className="row">
                    <div className="col">
                      <div className="row" id={styles.carwashimageRow}>
                        <img
                          src={dentiingpainting.src}
                          alt="carwash"
                          className={styles.carwashImage}
                        />
                      </div>
                      <div className="row" id={styles.carwashtextRow}>
                        Denting & Painting
                      </div>
                    </div>
                  </div>
                </div>
                <div id={styles.carwashRow}>
                  <div className="row">
                    <div className="col">
                      <div className="row" id={styles.carwashimageRow}>
                        <img
                          src={antiRrust.src}
                          alt="carwash"
                          className={styles.carwashImage}
                        />
                      </div>
                      <div className="row" id={styles.carwashtextRow}>
                        Anti Rust Coating
                      </div>
                    </div>
                  </div>
                </div>
                <div id={styles.carwashRow}>
                  <div className="row">
                    <div className="col">
                      <div className="row" id={styles.carwashimageRow}>
                        <img
                          src={carservice.src}
                          alt="carwash"
                          className={styles.carwashImage}
                        />
                      </div>
                      <div className="row" id={styles.carwashtextRow}>
                        Car Service & Repair
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="Workstation servies" title="Workstation servies">
              <div className="container d-flex justify-content-between ">
                <div id={styles.carwashRow}>
                  <div className="row">
                    <div className="col">
                      <div className="row" id={styles.carwashimageRow}>
                        <img
                          src={carAcService.src}
                          alt="carwash"
                          className={styles.carwashImage}
                        />
                      </div>
                      <div className="row" id={styles.carwashtextRow}>
                        Car AC Service
                      </div>
                    </div>
                  </div>
                </div>
                <div id={styles.carwashRow}>
                  <div className="row">
                    <div className="col">
                      <div className="row" id={styles.carwashimageRow}>
                        <img
                          src={wheelicon.src}
                          alt="carwash"
                          className={styles.carwashImage}
                        />
                      </div>
                      <div className="row" id={styles.carwashtextRow}>
                        Wheel Alignment & Balancing
                      </div>
                    </div>
                  </div>
                </div>
                <div id={styles.carwashRow}>
                  <div className="row">
                    <div className="col">
                      <div className="row" id={styles.carwashimageRow}>
                        <img
                          src={enginecoating.src}
                          alt="carwash"
                          className={styles.carwashImage}
                        />
                      </div>
                      <div className="row" id={styles.carwashtextRow}>
                        Engine Coating
                      </div>
                    </div>
                  </div>
                </div>
                <div id={styles.carwashRow}>
                  <div className="row">
                    <div className="col">
                      <div className="row" id={styles.carwashimageRow}>
                        <img
                          src={caraccess.src}
                          alt="carwash"
                          className={styles.carwashImage}
                        />
                      </div>
                      <div className="row" id={styles.carwashtextRow}>
                        Car Accessories
                      </div>
                    </div>
                  </div>
                </div>
                <div id={styles.carwashRow}>
                  <div className="row">
                    <div className="col">
                      <div className="row" id={styles.carwashimageRow}>
                        <img
                          src={Ceramic_Coating.src}
                          alt="carwash"
                          className={styles.carwashImage}
                        />
                      </div>
                      <div className="row" id={styles.carwashtextRow}>
                        Ceramic Coating
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>

        {/* our services container */}

        <div className={styles.customContainer}>
          <Image src={custom} alt="custom" width="1500px" height="600px" />
          <div className={styles.h1container}>
            <h1 className={styles.h1style}>CUSTOM YOUR OWN PACKAGE</h1>
            <button className={styles.buttonstyle}>
              25+ SERVICE AVAILABLE
            </button>
          </div>
        </div>

        {/* ez autocare luxcare container */}

        <div className={styles.lux_care_container}>
          <h1 className={styles.lux_care_h1}>EZ AutoCare Luxe Care</h1>
          <p className={styles.elegant_service}>
            Elegant services for your luxury car
          </p>
          <div className="row" id={styles.luxury_car_row}>
            <div className="col-sm">
              <div id={styles.luxury_card}>
                <img
                  src={rolls.src}
                  alt="custom"
                  className={styles.luxury_image}
                />
                <div className={styles.luxury_text}>
                  <span>Rolls-Royce</span>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className={styles.angle_right}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div id={styles.luxury_card}>
                <img
                  src={bmw.src}
                  alt="custom"
                  className={styles.luxury_image}
                />
                <div className={styles.luxury_text}>
                  <span>BMW</span>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className={styles.angle_right}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div id={styles.luxury_card}>
                <img
                  src={audi.src}
                  alt="custom"
                  className={styles.luxury_image}
                />
                <div className={styles.luxury_text}>
                  <span>Audi</span>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className={styles.angle_right}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div id={styles.luxury_card}>
                <img
                  src={rangerover.src}
                  alt="custom"
                  className={styles.luxury_image}
                />
                <div className={styles.luxury_text}>
                  <span>Range Rover</span>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className={styles.angle_right}
                  />
                </div>
              </div>
            </div>

            <div className="col-sm" id={styles.icon_div}>
              <a href="#" className={styles.rightIcon}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={styles.icon}
                />
              </a>
            </div>
          </div>
        </div>

        {/* ez autocare luxcare container */}

        {/* Trending Service section */}

        <div className={styles.trending_container}>
          <h1 className={styles.lux_care_h1}>Trending Services</h1>
          <p className={styles.elegant_service}>
            Most popular services in your city
          </p>
          <div className="row" id={styles.car_service_row}>
            <div className="col" id={styles.car_service_col}>
              <div className={styles.car_service_div}>
                <img src={group3.src} alt="custom" />
                <Button className={styles.car_button}>
                  Car Service & Repair
                </Button>
                <p className={styles.car_p_tag}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="col" id={styles.car_service_col}>
              <div className={styles.car_service_div}>
                <img src={group2.src} alt="custom" />
                <Button className={styles.car_button}>Car AC Service</Button>
                <p className={styles.car_p_tag}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="col" id={styles.car_service_col}>
              <div className={styles.car_service_div}>
                <img
                  src={group1.src}
                  alt="custom"
                  width="203px"
                  height="90px"
                />
                <Button className={styles.car_button}>Car ACCESSORIES </Button>
                <p className={styles.car_p_tag}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="col" id={styles.car_service_col}>
              <div className={styles.car_service_div}>
                <img
                  src={group4.src}
                  alt="custom"
                  width="201px"
                  height="90px"
                />
                <Button className={styles.car_button}>
                  tyres & batteries{' '}
                </Button>
                <p className={styles.car_p_tag}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="col" id={styles.icon_div}>
              <a href="#" className={styles.rightIcon}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={styles.icon}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Trending Service section */}

        {/* Designer Combo Section */}

        <div className={styles.designer_combo_container}>
          <h1 className={styles.lux_care_h1}>Designer Combo Packages</h1>
          <p className={styles.elegant_service}>
            Personalised Packages offered by expert mechanics
          </p>
          <div className="row" id={styles.combo_div}>
            <div className="col-sm" id={styles.comboContainer}>
              <img src={combo3.src} alt="custom" />
              <div className={styles.combotext}>
                <h4 className={styles.comboh4}>WINGS OF FREEDOM</h4>
                <p className={styles.combopara}>
                  SPEED COMBO
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className={styles.comboIcon}
                  />
                </p>
              </div>
            </div>
            <div className="col-sm" id={styles.comboContainer}>
              <img src={combo2.src} alt="custom" />
              <div className={styles.combotext}>
                <h4 className={styles.comboh4}>ARISTOCRAT</h4>
                <p className={styles.combopara}>
                  SHINE COMBO
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className={styles.comboIcon}
                  />
                </p>
              </div>
            </div>
            <div className="col-sm" id={styles.comboContainer}>
              <img src={combo1.src} alt="custom" />
              <div className={styles.combotext}>
                <h4 className={styles.comboh4}>WANDERLUST</h4>
                <p className={styles.combopara}>
                  ROAD TRIP COMBO
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className={styles.comboIcon}
                  />
                </p>
              </div>
            </div>
            <div className="col-sm" id={styles.icon_div}>
              <a href="#" className={styles.rightIcon}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={styles.icon}
                />
              </a>
            </div>
          </div>
          <div className="row" id={styles.performance_car_div}>
            <div className="col" id={styles.performance_car}>
              <div className={styles.performance_car_image}>
                <img src={performance_car.src} alt="" />
              </div>
              <p className={styles.performance_car_para}>4x Perfomance </p>
            </div>
            <div className="col" id={styles.performance_car}>
              <div className={styles.performance_car_image}>
                <img
                  src={carside_view.src}
                  alt=""
                  width="246px"
                  height="94px"
                />
              </div>

              <p className={styles.performance_car_para}>No noise combo </p>
            </div>
            <div className="col" id={styles.performance_car}>
              <div className={styles.performance_car_image}>
                <img src={car_tyre.src} alt="" width="107px" height="146px" />
              </div>

              <p className={styles.performance_car_para}>Tyre Replacement</p>
            </div>
            <div className="col" id={styles.performance_car}>
              <div className={styles.performance_car_image}>
                <img
                  src={battery_check_thumb.src}
                  alt=""
                  width="176px"
                  height="144px"
                />
              </div>

              <p className={styles.performance_car_para}>Battery Replacement</p>
            </div>
            <div className="col" id={styles.icon_div}>
              <a href="#" className={styles.rightIcon}>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={styles.icon}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Designer Combo Section */}

        {/* our features container */}

        <div className="our_features_container">
          <h1 className={styles.lux_care_h1}>Our Features</h1>
          <div className="row">
            <div className="col">
              <div class="card" style={{ width: '19rem' }}>
                <div class="card-body">
                  <div class="ui-bar-a" id={styles.featureContainer}>
                    <Image
                      width={40}
                      height={40}
                      src={feature4}
                      alt="feature1"
                      className={styles.feature4}
                    />
                    <h4 className={styles.featureh4}>Free Pick & Drop</h4>
                  </div>
                  <p className={styles.cardText}>
                    We make it easy for you. We are offering free pick up and
                    drop off of your all car servicing needs. Call us to book an
                    appointment for your car servicing.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card" style={{ width: '19rem' }}>
                <div class="card-body">
                  <div class="ui-bar-a" id={styles.featureContainer}>
                    <Image
                      width={30}
                      height={10}
                      src={feature3}
                      alt="feature3"
                      className={styles.feature4}
                    />
                    <h4 className={styles.featureh4}>Genuine spare parts </h4>
                  </div>
                  <p className={styles.cardText}>
                    We provide genuine tested spare parts at a reasonable price.
                    Insisting on genuine parts will keep your car running
                    relaibly and looking good.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card" style={{ width: '19rem' }}>
                <div class="card-body">
                  <div class="ui-bar-a" id={styles.featureContainer}>
                    <Image
                      width={40}
                      height={40}
                      src={feature2}
                      alt="feature1"
                      className={styles.feature4}
                    />
                    <h4 className={styles.featureh4}>Trained Technician</h4>
                  </div>
                  <p className={styles.cardText}>
                    Our trained technician will be there for you 24*7.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div class="card" style={{ width: '19rem' }}>
                <div class="card-body">
                  <div class="ui-bar-a" id={styles.featureContainer}>
                    <Image
                      width={40}
                      height={40}
                      src={feature4}
                      alt="feature1"
                      className={styles.feature4}
                    />
                    <h4 className={styles.featureh4}>100% Transparency</h4>
                  </div>
                  <p className={styles.cardText}>
                    You’ll know, what we will do. Our goal is to provide 100%
                    genuine services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card" style={{ width: '22rem' }}>
                <div class="card-body">
                  <div class="ui-bar-a" id={styles.featureContainer}>
                    <Image
                      width={30}
                      height={10}
                      src={feature1}
                      alt="feature3"
                      className={styles.feature4}
                    />
                    <h4 className={styles.featureh4}>
                      Live Updates with Proofs
                    </h4>
                  </div>
                  <p className={styles.cardText}>
                    You can also track the live status of your car, daignostics
                    as well as evidence of qualified technicians.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card" style={{ width: '19rem' }}>
                <div class="card-body">
                  <div class="ui-bar-a" id={styles.featureContainer}>
                    <Image
                      width={40}
                      height={40}
                      src={feature1}
                      alt="feature1"
                      className={styles.feature4}
                    />
                    <h4 className={styles.featureh4}>
                      Luxury Car Services Available
                    </h4>
                  </div>
                  <p className={styles.cardText}>
                    Allow us to show you what an outstanding luxury car service
                    looks like. We are not satisfied until we fulfill your needs
                    to the best of our ability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* our features container */}

        {/* our workshopare covid safe container */}
        <div className={styles.covidContainer}>
          <h2 className={styles.covidh2}>Our workshops are COVID SAFE</h2>
          <p className={styles.covidpara}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo cursus
            turpis ipsum egestas nunc, arcu quis mauris enim. Fringilla sapien,
            vivamus rhoncus vel.
          </p>
        </div>
        {/* our workshopare covid safe container */}

        {/* enquiry  container */}

        <div className="container" id={styles.enquierycontainer}>
          <div className="row">
            <div className="col">
              <h3 className={styles.enquieryh3}>Enquire Now </h3>
              <p className={styles.enquierypara}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                iaculis auctor quis velit id pulvinar in.
              </p>
              <Image src={enquirycar} alt="enquiry car" />
            </div>
            <div className="col">
              <form className={styles.enquieryform}>
                <div class="form-group ">
                  <input
                    type="name"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Full Name"
                  />
                </div>
                <div class="row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email address"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="State"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="City"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Car"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Request a service"
                    />
                  </div>
                </div>

                <div class="form-group ">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="How may we help you?"
                  ></textarea>
                </div>

                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* enquiry  container */}

        {/* brands we  container */}

        <div className="container">
          <h3>Brands We Serve!</h3>
          <div className="brands_container">
            <div className="row ">
              <div className="col mt-3">
                <Image src={honda} alt="honda" width="98px" height="80px" />
              </div>
              <div className="col mt-3">
                <Image src={nissan} alt="nissan" width="80px" height="73px" />
              </div>
              <div className="col mt-5">
                <Image src={maruti} alt="maruti" width="150px" height="38px" />
              </div>
              <div className="col mt-4">
                <Image src={jaguar} alt="jaguar" width="116px" height="58px" />
              </div>
              <div className="col mt-4">
                <Image src={ford} alt="ford" width="155px" height="62px" />
              </div>
              <div className="col">
                <Image src={audilogo} alt="audi" width="120px" height="120px" />
              </div>
              <div className="col ">
                <Image
                  src={bentely}
                  alt="bentely"
                  width="146px"
                  height="146px"
                />
              </div>
            </div>
          </div>
        </div>
        {/* brands we  container */}

        {/* increament  container */}

        <div class="" style={{ backgroundColor: '#20ADB7' }}>
          <div class="row text-center ">
            <div class="col">
              <div class="counter">
                <p>2 million+</p>
                <h2
                  class="timer count-title count-number"
                  data-to="100"
                  data-speed="1500"
                ></h2>
                <p class="count-text ">Car Serviced</p>
              </div>
            </div>
            <div class="col">
              <div class="counter">
                <p>1 million+</p>
                <h2
                  class="timer count-title count-number"
                  data-to="1700"
                  data-speed="1500"
                ></h2>
                <p class="count-text ">Happy Customers</p>
              </div>
            </div>
            <div class="col">
              <div class="counter">
                <p>4.7</p>
                <h2
                  class="timer count-title count-number"
                  data-to="11900"
                  data-speed="1500"
                ></h2>
                <p class="count-text ">Average Rating</p>
              </div>
            </div>
            <div class="col">
              <div class="counter">
                <p>800+</p>
                <h2
                  class="timer count-title count-number"
                  data-to="157"
                  data-speed="1500"
                ></h2>
                <p class="count-text ">Touch Points in India</p>
              </div>
            </div>
          </div>
        </div>
        {/* increament  container */}
      </div>
    );
  }
}
