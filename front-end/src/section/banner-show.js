import React from 'react';
import '../styles/wrap-header.scss'
import '../styles/index.scss';
import SlideShow01 from '../assets/imgs/slider-banner-4b.jpg';
import SlideShow02 from '../assets/imgs/slider-banner-4c.jpg';
import SlideShow03 from '../assets/imgs/slider-banner-4d.jpg';
import '../styles/carousel-item.scss'
import Carousel from 'react-bootstrap/Carousel';

function SlideShow() {
    return (
        <Carousel data-bs-theme="dark" pause={"hover"}>
            <Carousel.Item>
                <div className='carousel-item__img'>
                    <img src={SlideShow02} alt="" />
                </div>

                <div className='xo-container'>
                    <div className='carousel-item__content'>
                        <div className="banner-content xo-container">
                            <div className="banner-content__wrapper">
                                <h6 className="banner-content__entry-subtitle style-3">Weekend Discount</h6>
                                <h3 className="banner-content__entry-title">
                                    Feel-good shopping <strong>Shop what you desire</strong>
                                </h3>
                                <div className="banner-content__entry-description">
                                    <p>Big screens in incredibly slim designs in your hand.</p>
                                </div>
                                <div className="banner-content__entry-button">
                                    <button type="button">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='carousel-item__img'>
                    <img src={SlideShow01} alt="" />
                </div>

                <div className='xo-container'>
                    <div className='carousel-item__content'>
                        <div className="banner-content xo-container">
                            <div className="banner-content__wrapper">
                                <h6 className="banner-content__entry-subtitle style-3">Weekend Discount</h6>
                                <h3 className="banner-content__entry-title">
                                    Feel-good shopping <strong>Shop what you desire</strong>
                                </h3>
                                <div className="banner-content__entry-description">
                                    <p>Big screens in incredibly slim designs in your hand.</p>
                                </div>
                                <div className="banner-content__entry-button">
                                    <button type="button">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='carousel-item__img'>
                    <img src={SlideShow03} alt="" />
                </div>

                <div className='xo-container'>
                    <div className='carousel-item__content'>
                        <div className="banner-content xo-container">
                            <div className="banner-content__wrapper">
                                <h6 className="banner-content__entry-subtitle style-3">Weekend Discount</h6>
                                <h3 className="banner-content__entry-title">
                                    Feel-good shopping <strong>Shop what you desire</strong>
                                </h3>
                                <div className="banner-content__entry-description">
                                    <p>Big screens in incredibly slim designs in your hand.</p>
                                </div>
                                <div className="banner-content__entry-button">
                                    <button type="button">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default SlideShow
