import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleDown,
  faBars,
  faMapMarker,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faWeixin } from '@fortawesome/free-brands-svg-icons';
import $ from 'jquery';
import { Link as PageLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import '../styles/Homepage.css';

/**
 * Homepage - Container.
 *
 * @since 1.0.0
 */
class Container extends Component {
  componentDidMount() {
    // Collapse navbar on scroll.
    function collapseNavbar() {
      const navigation = $('#navigation');

      if (navigation.offset().top > 50) {
        navigation.removeClass('scrolled-to-top');
      } else {
        navigation.addClass('scrolled-to-top');
      }
    }

    $(window).scroll(collapseNavbar);
    $(document).ready(collapseNavbar);
  }

  render() {
    return (
      <div id="homepage">
        <Navigation />
        <Introduction />
        <About />
        <Follow />
        <Contact />
        <Location />
        <Copyright />
      </div>
    );
  }
}

/**
 * Homepage - Navigation.
 *
 * @constructor
 *
 * @since 1.0.0
 */
function Navigation() {
  return (
    <nav id="navigation" className="navbar navbar-expand-lg fixed-top scrolled-to-top">
      <div className="container px-sm-3 px-md-3">
        <a className="navbar-brand" href="/">
          <span className="logo" />
          <span className="logo-text">星端电竞</span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#starsNav" aria-controls="starsNav" aria-expanded="false" aria-label="切换导航">
          <FontAwesomeIcon icon={faBars} className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="starsNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item do-not-display">
              <ScrollLink className="nav-link" to="introduction" spy smooth>首页</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="about" spy smooth>关于星端</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="follow" spy smooth>关注有礼</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="contact" spy smooth>联系我们</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="location" spy smooth>地理位置</ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

/**
 * Homepage - Introduction.
 *
 * @constructor
 *
 * @since 1.0.0
 */
function Introduction() {
  return (
    <header id="introduction">
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="brand-heading">开始您的之旅</h1>
              <p className="intro-text">
                拒绝浪漫、休闲的新式网咖！
                <br />
                来星端电竞开黑都有了超神的信念！
              </p>
              <ScrollLink className="btn btn-circle" to="about" spy smooth>
                <FontAwesomeIcon icon={faAngleDoubleDown} />
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/**
 * Homepage - About.
 *
 * @constructor
 *
 * @since 1.0.0
 */
function About() {
  return (
    <section id="about" className="text-center">
      <div className="content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2>关于星端</h2>
              <p>
                由于2016年在广州开业，星端是第一间打造番禺的太空船电子竞技俱乐部！
                星端不断更新，不断提升服务测量，不断更新电子体验，为我们电子竞技好友有好的未来！
              </p>
              <p>
                开业前，我们的任务是要把零散的电子竞技圈做个调整和升级。
                从拒绝现代、浪漫、休闲的网吧网咖环境。
                星端的承诺是要提供配对的环境、顶级配置、和高端服务！
                其他网吧网咖还没有呢！
              </p>
              <p>
                星端不断的提供高级饮食商品、免费百兆WiFi、及无限定期优惠！
                只要您肯过来，我们绝对不会让您战败！
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Homepage - Follow.
 *
 * @constructor
 *
 * @since 1.0.0
 */
function Follow() {
  return (
    <section id="follow" className="text-center">
      <div className="content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2>关注有礼</h2>
              <p>时间紧！赶快关注我们的微信公众号接受最新优惠和信息！</p>
              <PageLink to="/wechat/" className="btn btn-default btn-lg" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWeixin} className="fa-fw" />
                &nbsp;
                <span>显示二维码</span>
              </PageLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Homepage - Contact.
 *
 * @constructor
 *
 * @since 1.0.0
 */
function Contact() {
  return (
    <section id="contact" className="text-center">
      <div className="content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2>联系我们</h2>
              <p>
                随时给我们发电子邮件，为我们的业务提供反馈意见，更好的改进和服务的建议，和随时来打个招呼都行！
              </p>
              <p>
                <a href="mailto:hello@stars-gaming.com">hello@stars-gaming.com</a>
              </p>
              <ul className="list-inline banner-contact-buttons">
                <li>
                  <a href="tel:+8618028066992" className="btn btn-default btn-lg" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faPhone} className="fa-fw" />
                    &nbsp;
                    <span>联系企业</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Homepage - Location.
 *
 * @constructor
 *
 * @since 1.0.0
 */
function Location() {
  return (
    <section id="location" className="text-center">
      <div className="content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2>地理位置</h2>
              <p>
                别宅在家啦！过来星端玩！体验我们的环境，顶级服务，和电脑性能！
              </p>
              <ul className="list-inline banner-map-buttons">
                <li>
                  <PageLink to="/branches/" className="btn btn-default btn-lg" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faMapMarker} className="fa-fw" />
                    &nbsp;
                    <span>查看分店信息</span>
                  </PageLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Homepage - Copyright.
 *
 * @constructor
 *
 * @since 1.0.0
 */
function Copyright() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer id="copyright">
      <div className="container text-center">
        <p>
          {`版权所有 © ${year} 广州市星端网络科技有限公司 · `}
          <a href="http://www.beian.gov.cn" target="_blank" rel="noopener noreferrer">粤ICP备16085415号</a>
        </p>
      </div>
    </footer>
  );
}

export default Container;
