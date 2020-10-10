import React from 'react';

import '../styles/Wifi.css';

/**
 * WiFi - Container.
 *
 * @since 1.0.0
 */
function Container() {
  return (
    <section id="wifi">
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="stars-logo" />
              <h1 className="brand-heading">已经连接 Wi-Fi</h1>
              <p className="intro-text">
                欢迎使用本店内百兆无线网！星端祝您上网愉快！
              </p>
              <ul className="list-inline wifi-links">
                <li className="list-inline-item wifi-links-item">
                  <a href="http://www.stars-gaming.com" className="btn btn-default btn-lg" target="_blank" rel="noopener noreferrer">浏览星端网站</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Container;
