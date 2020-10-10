import React from 'react';

import '../styles/Browser.css';

/**
 * Browser - Container.
 *
 * @since 1.0.0
 */
function Container() {
  return (
    <section id="browser">
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="stars-logo" />
              <h1 className="brand-heading">星端电竞欢迎您</h1>
              <p className="intro-text">
                我们预先祝您上网愉快！
                <br />
                如果您需要支援，服务员能帮到您！
              </p>
              <ul className="list-inline browser-links">
                <li className="list-inline-item browser-links-item">
                  <a href="https://www.baidu.com" className="btn btn-default btn-lg" target="_blank" rel="noopener noreferrer">百度搜索</a>
                </li>
                <li className="list-inline-item browser-links-item">
                  <a href="http://weibo.com" className="btn btn-default btn-lg" target="_blank" rel="noopener noreferrer">新浪微博</a>
                </li>
                <li className="list-inline-item browser-links-item">
                  <a href="https://www.taobao.com" className="btn btn-default btn-lg" target="_blank" rel="noopener noreferrer">淘宝网</a>
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
