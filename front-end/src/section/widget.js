import React from 'react';
import '../styles/wrap-header.scss'
import '../styles/index.scss';
import '../styles/carousel-item.scss'
import '../styles/widget.scss'
import BannerWidget01 from '../assets/imgs/banner-7.jpg';
import BannerWidget02 from '../assets/imgs/banner-8.jpg';
import BannerWidget03 from '../assets/imgs/banner-9.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Widget(){
    return (
        <div className='xo-container'>
            <div className='section-widget'>
                <Row xs={1} sm={2} md={4} lg={4}>
                    <Col>
                        <div className='section-widget__item-wrap'>
                            <div className='section-widget__element'>
                                <div className='section-widget__element-icon'>
                                    <i className="bi bi-truck"></i>
                                </div>
                                <div className='section-widget__entry-title'>
                                    <h4>Free Delivery</h4>
                                    <p>Free shipping on all order</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='section-widget__item-wrap'>
                            <div className='section-widget__element'>
                                <div className='section-widget__element-icon'>
                                    <i className="bi bi-telephone-forward"></i>
                                </div>
                                <div className='section-widget__entry-title'>
                                    <h4> Online Support 24/7</h4>
                                    <p>Support online 24 hours a day</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='section-widget__item-wrap'>
                            <div className='section-widget__element'>
                                <div className='section-widget__element-icon'>
                                    <i className="bi bi-credit-card"></i>
                                </div>
                                <div className='section-widget__entry-title'>
                                    <h4>Money Return</h4>
                                    <p>Back guarantee under 7 days</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='section-widget__item-wrap'>
                            <div className='section-widget__element'>
                                <div className='section-widget__element-icon'>
                                    <i className="bi bi-piggy-bank"></i>
                                </div>
                                <div className='section-widget__entry-title'>
                                    <h4>Member Discount</h4>
                                    <p>Onevery order over $120.00</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row xs={1} sm={3} md={3} lg={3}>
                    <Col>
                        <div className='section-widget__item-wrap'>
                            <div className='section-widget__banner'>
                                <div className='section-widget__banner-img'>
                                    <img src={BannerWidget01} alt="" />
                                </div>
                                <div className='section-widget__banner-content'>
                                    <div className='section-widget__banner-content-wrapper'>
                                        <div className='section-widget__entry-description'>
                                            <p>Maecenas non erat</p>
                                        </div>
                                        <h3>Computers</h3>
                                        <div className="section-widget__banner-price-content">
                                            <p>Weekend Discount</p>
                                            <span className="section-widget__price-box">
                                                <span className="section-widget__price-new">
                                                    <span>$549.00</span>
                                                </span>
                                                <span className="section-widget__price-old">
                                                    <span>$589.00</span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='section-widget__item-wrap'>
                            <div className='section-widget__banner'>
                                <div className='section-widget__banner-img'>
                                    <img src={BannerWidget02} alt="" />
                                </div>
                                <div className='section-widget__banner-content'>
                                    <div className='section-widget__banner-content-wrapper'>
                                        <div className='section-widget__entry-description'>
                                            <p>Maecenas non erat</p>
                                        </div>
                                        <h3>Computers</h3>
                                        <div className="section-widget__banner-price-content">
                                            <p>Weekend Discount</p>
                                            <span className="section-widget__price-box">
                                                <span className="section-widget__price-new">
                                                    <span>$549.00</span>
                                                </span>
                                                <span className="section-widget__price-old">
                                                    <span>$589.00</span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='section-widget__item-wrap'>
                            <div className='section-widget__banner'>
                                <div className='section-widget__banner-img'>
                                    <img src={BannerWidget03} alt="" />
                                </div>
                                <div className='section-widget__banner-content'>
                                    <div className='section-widget__banner-content-wrapper'>
                                        <div className='section-widget__entry-description'>
                                            <p>Maecenas non erat</p>
                                        </div>
                                        <h3>Computers</h3>
                                        <div className="section-widget__banner-price-content">
                                            <p>Weekend Discount</p>
                                            <span className="section-widget__price-box">
                                                <span className="section-widget__price-new">
                                                    <span>$549.00</span>
                                                </span>
                                                <span className="section-widget__price-old">
                                                    <span>$589.00</span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Widget
