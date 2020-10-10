import React from 'react';

import '../styles/Wechat.css';
import qrCode from '../images/wechat-qr.jpg';

/**
 * WeChat - Container.
 *
 * @since 1.0.0
 */
function Container() {
  return (
    <section id="wechat">
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>关注微信号</h1>
              <p>
                接受活动通知，限时优惠，和加入快速客服！
              </p>
              <img className="qr-code" src={qrCode} alt="星端电竞微信二维码" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Container;
