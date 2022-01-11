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

import Image from 'next/image';
import { NavDropdown, Button, Card } from 'react-bootstrap';

import styles from '../styles/Index.module.css';

export default class index extends Component {
  render() {
    return (
      <div id={styles.body}>
        {/* slider */}
        <div>
          <Carousel>
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
          <h1 className={styles.excitingh1}>Exciting Offers</h1>

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

        <div className="container">
          <h1>Why EZ AutoCare</h1>
          <div className="container">
            <div className="row">
              <div className="col">
                <div class="row align-items-center" id={styles.cardcontainer}>
                  <div class="col-12 col-md-6">
                    <Image
                      className={styles.imagecard}
                      width="120px"
                      height="120px"
                      alt="image"
                      src={image1}
                    />
                  </div>
                  <div class="col-12 col-md-6">
                    <h3 className={styles.h3}>Free Doorstep Pick-up & Drop</h3>
                    <p className={styles.p}>
                      No more unnecessary workshop visits!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="container">
                  <div class="row align-items-center" id={styles.cardcontainer}>
                    <div class="col-12 col-md-6">
                      <Image
                        className={styles.imagecard}
                        width="120px"
                        height="120px"
                        alt="image"
                        src={image2}
                      />
                    </div>
                    <div class="col-12 col-md-6">
                      <h3 className={styles.h3}>
                        Upfront & Competitive Pricing
                      </h3>
                      <p className={styles.p}>
                        Save Upto 40% on car’s service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" id={styles.rowcard}>
              <div className="col">
                <div class="row align-items-center" id={styles.cardcontainer}>
                  <div class="col-12 col-md-6">
                    <Image
                      className={styles.imagecard}
                      width="120px"
                      height="120px"
                      alt="image"
                      src={image2}
                    />
                  </div>
                  <div class="col-12 col-md-6">
                    <h3 className={styles.h3}>
                      Network Warranty on Car Service
                    </h3>
                    <p className={styles.p}>
                      1 month/1000kms unconditional warranty on car service. No
                      questions asked!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="container">
                  <div class="row align-items-center" id={styles.cardcontainer}>
                    <div class="col-12 col-md-6">
                      <Image
                        className={styles.imagecard}
                        width="120px"
                        height="120px"
                        alt="image"
                        src={image3}
                      />
                    </div>
                    <div class="col-12 col-md-6">
                      <h3 className={styles.h3}>100% Genuine Spare Parts</h3>
                      <p className={styles.p}>
                        Only OEM/OES spare parts used. Quality Assured!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* our services container */}

        <div className="container">
          <h1>Our Services</h1>

          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="All Services" title="All Services" active>
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
              <a className="text-primary d-flex flex-row-reverse" href="">
                See More
              </a>
            </Tab>
            <Tab eventKey="Doorstep Service" title="Doorstep Service">
              <h1>doorstep service comming soon!</h1>
            </Tab>
            <Tab eventKey="Workstation servies" title="Workstation servies">
              <h1> Workstation cards comming soon!</h1>
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

        <div className="container">
          <h1>EZ AutoCare Luxe Care</h1>
          <p>Elegant services for your luxury car</p>
          <div className="row">
            <div className="col">
              <Image src={rolls} alt="custom" />

              <p>
                Rolls-Royce <FontAwesomeIcon icon={faAngleRight} />
              </p>
            </div>
            <div className="col">
              <Image src={bmw} alt="custom" />

              <p>
                BMW <FontAwesomeIcon icon={faAngleRight} />
              </p>
            </div>{' '}
            <div className="col">
              <Image src={audi} alt="custom" />

              <p>
                Audi <FontAwesomeIcon icon={faAngleRight} />
              </p>
            </div>{' '}
            <div className="col">
              <Image src={rangerover} alt="custom" />

              <p>
                Range Rover <FontAwesomeIcon icon={faAngleRight} />
              </p>
            </div>{' '}
          </div>
          <a href="#" className={styles.rightIcon}>
            <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
          </a>
        </div>

        {/* ez autocare luxcare container */}

        {/* Trending Service section */}

        <div className="container">
          <h1>Trending Services</h1>
          <p>Most popular services in your city</p>
          <div className="row">
            <div className="col">
              <Image src={group3} alt="custom" />
              <Button>Car Service & Repair</Button>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="col">
              <Image src={group2} alt="custom" />
              <Button>Car AC Service </Button>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>{' '}
            <div className="col">
              <Image src={group1} alt="custom" />
              <Button>Car ACCESSORIES </Button>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>{' '}
            <div className="col">
              <Image src={group4} alt="custom" />
              <Button>tyres & batteries</Button>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>{' '}
          </div>
        </div>

        {/* Trending Service section */}

        {/* Designer Combo Section */}

        <div className="container">
          <h1>Designer Combo Packages</h1>
          <p>Personalised Packages offered by expert mechanics</p>
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
          </div>
        </div>

        {/* Designer Combo Section */}

        <div className="container">
          <h1>Our Features</h1>
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
            </div>{' '}
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
            </div>{' '}
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
        <div className={styles.covidContainer}>
          <h2 className={styles.covidh2}>Our workshops are COVID SAFE</h2>
          <p className={styles.covidpara}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo cursus
            turpis ipsum egestas nunc, arcu quis mauris enim. Fringilla sapien,
            vivamus rhoncus vel.
          </p>
        </div>
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
      </div>
    );
  }
}
