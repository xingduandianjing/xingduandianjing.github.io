import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faPhone, faUtensils } from '@fortawesome/free-solid-svg-icons';

import '../styles/Branches.css';
import pysqd from '../images/branches/pysqd.jpg';

/**
 * Branches - Container.
 *
 * @since 1.0.0
 */
function Container() {
  return (
    <section id="branches">
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="branch">
                <img className="branch-photo" src={pysqd} alt="星端电竞（番禺市桥店）" />
                <h1>番禺市桥店</h1>
                <p>
                  <a href="http://ditu.amap.com/place/B0FFHN52G0" target="_blank" rel="noopener noreferrer">
                    中国 广东省 广州市 番禺区 市桥街道 繁华路57号 繁华中心5层
                  </a>
                </p>
                <ul className="list-inline branch-links">
                  <li className="list-inline-item branch-links-item">
                    <a href="tel:+8618028011552" className="btn btn-default btn-lg" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faPhone} />
                      &nbsp;
                      <span>联系分店</span>
                    </a>
                  </li>
                  <li className="list-inline-item branch-links-item">
                    <a href="http://www.dianping.com/shop/79438692" className="btn btn-default btn-lg" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faUtensils} />
                      &nbsp;
                      <span>大众点评</span>
                    </a>
                  </li>
                  <li className="list-inline-item branch-links-item">
                    <a href="https://www.nuomi.com/shop/85070456" className="btn btn-default btn-lg" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faPaw} />
                      &nbsp;
                      <span>百度糯米</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Container;
