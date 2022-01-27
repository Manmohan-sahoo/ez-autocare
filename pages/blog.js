import React, { Component } from 'react';

import styles from '../styles/Blog.module.css';

import rectangle from '../public/Rectangle 532.png';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class blog extends Component {
  render() {
    return (
      <div className={styles.recent_articles_main_div}>
        <div>
          <p className={styles.recent_articles_p}>Recent Articles</p>
          <div className={styles.blog_row}>
            <div className={styles.blog_col}>
              <img src={rectangle.src} alt="" className={styles.blog_img} />
              <p className={styles.blog_p_tag}>Lorem Ipsum</p>
              <p className={styles.blog_p_text_area}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                mattis erat adipiscing quis sed eget.
              </p>
            </div>
            <div className={styles.blog_col}>
              <img src={rectangle.src} alt="" className={styles.blog_img} />
              <p className={styles.blog_p_tag}>Lorem Ipsum</p>
              <p className={styles.blog_p_text_area}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                mattis erat adipiscing quis sed eget.
              </p>
            </div>
            <div className={styles.blog_col}>
              <img src={rectangle.src} alt="" className={styles.blog_img} />
              <p className={styles.blog_p_tag}>Lorem Ipsum</p>
              <p className={styles.blog_p_text_area}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                mattis erat adipiscing quis sed eget.
              </p>
            </div>
          </div>
          <div>
            <button className={styles.view_all_button}>View All</button>
          </div>
        </div>

        <div>
          <p className={styles.recent_articles_p}>Trending Articles</p>
          <div className={styles.blog_row}>
            <div className={styles.blog_col}>
              <img src={rectangle.src} alt="" className={styles.blog_img} />
              <p className={styles.blog_p_tag}>Lorem Ipsum</p>
              <p className={styles.blog_p_text_area}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                mattis erat adipiscing quis sed eget.
              </p>
            </div>
            <div className={styles.blog_col}>
              <img src={rectangle.src} alt="" className={styles.blog_img} />
              <p className={styles.blog_p_tag}>Lorem Ipsum</p>
              <p className={styles.blog_p_text_area}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                mattis erat adipiscing quis sed eget.
              </p>
            </div>
            <div className={styles.blog_col}>
              <img src={rectangle.src} alt="" className={styles.blog_img} />
              <p className={styles.blog_p_tag}>Lorem Ipsum</p>
              <p className={styles.blog_p_text_area}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                mattis erat adipiscing quis sed eget.
              </p>
            </div>
          </div>
          <div>
            <button className={styles.view_all_button}>View All</button>
          </div>
        </div>
        <div>
          <p className={styles.recent_articles_p}>Recent Blog Post</p>
          <div className={styles.blog_row}>
            <div className={styles.blog_col}>
              <img src={rectangle.src} alt="" className={styles.blog_img} />
              <p className={styles.blog_p_tag}>Lorem Ipsum</p>
              <p className={styles.blog_p_text_area}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                mattis erat adipiscing quis sed eget.
              </p>
            </div>
            <div className={styles.blog_col}>
              <img src={rectangle.src} alt="" className={styles.blog_img} />
              <p className={styles.blog_p_tag}>Lorem Ipsum</p>
              <p className={styles.blog_p_text_area}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                mattis erat adipiscing quis sed eget.
              </p>
            </div>
            <div className={styles.blog_col}>
              <img src={rectangle.src} alt="" className={styles.blog_img} />
              <p className={styles.blog_p_tag}>Lorem Ipsum</p>
              <p className={styles.blog_p_text_area}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                mattis erat adipiscing quis sed eget.
              </p>
            </div>
          </div>
          <div>
            <button className={styles.view_all_button}>View All</button>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
