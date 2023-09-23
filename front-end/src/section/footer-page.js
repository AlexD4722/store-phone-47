import React from 'react';
import '../styles/wrap-header.scss'
import '../styles/index.scss';
import Pattern from '../assets/imgs/pattern-2.png';
import '../styles/carousel-item.scss'
import '../styles/footer-page.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchEmail from '../components/search-email';
import BrandItem from '../components/brand-item';
function Footer() {
    return (
        <section className="section-footer">
            <div className='section-footer__pattern'>
                <div className='section-footer__img'>
                    <img src={Pattern} alt="Pattern" />
                </div>
                <div className='xo-container'>  
                    <div className="section-footer__pattern-wrapper">
                        <div className='section-footer__site-newsletter-text'>
                            <h3 className="section-footer__entry-title">Sign Up For Newsletters</h3>
                            <div className="section-footer__entry-description">
                                <p>Get E-mail updates about our latest shop and <strong>special offers</strong>.</p>
                            </div>
                        </div>
                        <div className='section-footer__site-newsletter-form'>
                            <SearchEmail />
                        </div>
                    </div>
                </div>
            </div>
            <footer className='footer-widgets'>
                <div className='xo-container'>
                    <Row xs={2} sm={2} md={4} lg={4}>
                        <Col className='footer-widgets__item'>
                            <h4 className="footer-widgets__widget-title">Make Money with Us</h4>
                            <ul className='footer-widgets__widget-list'>
                                <li>Sell on Machic</li>
                                <li>Sell Your Services on Machic</li>
                                <li>Sell on Machic Business</li>
                                <li>Sell Your Apps on Machic</li>
                                <li>Become an Affilate</li>
                                <li>Advertise Your Products</li>
                                <li>Sell-Publish with Us</li>
                                <li>Become an Machic Vendor</li>
                            </ul>
                        </Col>
                        <Col className='footer-widgets__item'>
                            <h4 className="footer-widgets__widget-title">Product Categories</h4>
                            <ul className='footer-widgets__widget-list'>
                                <li>Apple</li>
                                <li>Camera & Photo</li>
                                <li>Cell Phones</li>
                                <li>Computers & Accessories</li>
                                <li>Headphones</li>
                                <li>Smartwatches</li>
                                <li>Sports & Outdoors</li>
                                <li>Television & Video</li>
                            </ul>
                        </Col>
                        <Col className='footer-widgets__item'>
                            <h4 className="footer-widgets__widget-title">Let Us Help You</h4>
                            <ul className='footer-widgets__widget-list'>
                                <li>Your Account</li>
                                <li>Your Orders</li>
                                <li>Returns & Replacements</li>
                                <li>Shipping Rates & Policies</li>
                                <li>Refund and Returns Policy</li>
                                <li>Privacy Policy</li>
                                <li>Terms and Conditions</li>
                                <li>Help Center</li>
                            </ul>
                        </Col>
                        <Col className='footer-widgets__item'>
                            <h4 className="footer-widgets__widget-title">Get to Know Us </h4>
                            <ul className='footer-widgets__widget-list'>
                                <li>Careers</li>
                                <li>About Machic</li>
                                <li>Inverstor Relations</li>
                                <li>Machic Devices</li>
                                <li>Customer reviews</li>
                                <li>Privacy Policy</li>
                                <li>Contact Us</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </footer>
        </section>
    );
}

export default Footer
