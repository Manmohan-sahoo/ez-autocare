import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import header1 from '../public/Header images/header 1.jpg';

import Carousel from 'react-bootstrap/Carousel';

export default class tab extends Component {
  render() {
    return (
      <div class="container">
        <Carousel variant="dark">
          <Carousel.Item>
            <img src={header1.src} alt="image1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={header1.src} alt="image1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={header1.src} alt="image1" />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
