import React, { Component } from 'react';

import styles from '../styles/Blog.module.css';

import rectangle from '../public/Rectangle 532.png';

export default class blog extends Component {
  render() {
    return (
      <div>
        <p className={styles.recent_articles_p}>Recent Articles</p>
        <div className="row">
          <div className="col">
            <img src={rectangle.src} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
