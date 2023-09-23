import Product from "../components/product-card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SlideShow from "../section/banner-show";
import Widget from "../section/widget";
import BannerSidebar1 from '../assets/imgs/banner-30.jpg'
import "../styles/product-module.scss";
import "../styles/banner-sidebar.scss";
import "../styles/section.scss";
import ProductFlex from "../components/product-card2";
import React, { useState, useEffect } from 'react';
import APIrequest, * as API from "../API/callAPI";
import { Link, useParams } from "react-router-dom";
import BrandItem from "../components/brand-item";

function Home() {
    const [messeage, setMesseage] = useState();
    const [styleMesseage, setStyleMesseage] = useState('');
    const [errolWishlist, setErrolWishlist] = useState(false);
    const handleDataFromChild = (messeage) => {
        // setMesseage(messeage);

        if (messeage && messeage !== -1) {
            setErrolWishlist(true);
            setMesseage("The product has been added to the wishlist");
            setStyleMesseage("showMessage--success")
            setTimeout(() => {
                setErrolWishlist(false);
            }, 3000)
        } else if( messeage === -1 ) {
            setErrolWishlist(true);
            // setStyleMesseage("")
            setMesseage("Insert item to wishlist failed");
            setTimeout(() => {
                setErrolWishlist(false);
            }, 3000)
        }else if( messeage === false ) {
            setErrolWishlist(true);
            setStyleMesseage("")
            setMesseage("Item removed from wishlist");
            setTimeout(() => {
                setErrolWishlist(false);
            }, 3000)
        }
    };

    const closeMessage = () => {
        setErrolWishlist(false);
    };
    // console.log("messageErrol",messageErrol)
    // if (messageErrol) {
    //     setErrolWishlist(true);
    //     setTimeout(() => {
    //         setErrolWishlist(false);
    //     }, 3000)
    // }
    const [Phones, setPhones] = useState([]);
    const data = { quantity: 10, random: true };
    useEffect(() => {
        const action = API.GET_QUANTITY_PRODUCT;
        if (data.quantity) {
            APIrequest(action, data).then((response) => {
                if (response.result === "Success") {
                    setPhones(response.data.productArray);
                }
            });
        }
    }, []);
    const params = useParams();
    useEffect(() => {
        function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
        topFunction();
    }, [params]);
    const [PhonesFlex, setPhonesFlex] = useState([]);
    const dataFlex = { quantity: 4, random: true };
    useEffect(() => {
        const action = API.GET_QUANTITY_PRODUCT;
        if (dataFlex.quantity) {
            APIrequest(action, dataFlex).then((response) => {
                if (response.result === "Success") {
                    setPhonesFlex(response.data.productArray);
                }
            });
        }
    }, []);

    return (
        <>
            <SlideShow />
            <Widget />
            <div className="xo-container">
                <section className="page-section">
                    <div className="products-module">
                        <div className="products-module__header">
                            <h2 className="products-module__title">Best Sellers</h2>
                            <a className="products-module__link-more" href="/#">
                                <span>View All </span>
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                        <div className="products-module__main-wrapper">
                            <Row xs={2} sm={3} md={4} lg={5}>
                                {
                                    Phones.map((phone) => {
                                        return (
                                            <Col key={phone.id}>
                                                <Product
                                                    product={phone}
                                                    onDataToParent={handleDataFromChild}
                                                />
                                            </Col>
                                        );
                                    })
                                }
                            </Row>
                        </div>
                    </div>
                </section >
                <section className="page-section">
                    <div className="products-module">
                        <div className="products-module__header">
                            <h2 className="products-module__title">Trending Products</h2>
                            <a className="products-module__link-more" href="/#">
                                <span>View All </span>
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                        <div className="products-module__main-wrapper">
                            <Row>
                                <Col xs={12} sm={12} md={3}>
                                    <div className="banner-sidebar">
                                        <div className="banner-sidebar__content">
                                            <div className="banner-sidebar__wrapper-content">
                                                <h6 className="banner-sidebar__sub-title">Best Seller</h6>
                                                <h3 className="banner-sidebar__title">Buy The Latest <strong>iPhone XS Pro</strong></h3>
                                                <div className="banner-sidebar__description">
                                                    <p>Pellentesque habitant morbi tristique senectus.</p>
                                                </div>
                                                <a href="/#" className="banner-sidebar__btn-link">
                                                    <span className="banner-sidebar__btn-content">Shop Now</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="banner-sidebar__img">
                                            <img src={BannerSidebar1} alt="Banner Sidebar" />
                                        </div>
                                        {/* <a href="/#" className="overlay-link">ádasd</a> */}
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={9}>
                                    <Row xs={1} sm={1} md={2} lg={2}>
                                        {
                                            PhonesFlex.map((phoneFlex, index) => {
                                                return (
                                                    <Col key={phoneFlex.id}>
                                                        <Link to={`/product/${phoneFlex.name}`}>
                                                            <ProductFlex
                                                                key={phoneFlex.id}
                                                                product={phoneFlex}
                                                            />
                                                        </Link>
                                                    </Col>
                                                );
                                            })
                                        }
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div >
                </section >
            </div >
            {
                errolWishlist ?
                    <div className={`showMessage ${styleMesseage}`}>
                        <div className="showMessage__box">
                            <p className="showMessage__content">“{messeage}”</p>
                            <div className="showMessage__close" onClick={closeMessage}>
                                <i class="bi bi-x"></i>
                            </div>
                            {
                                styleMesseage ?
                                    <Link to="/wish-list" className="showMessage__link">
                                        <div className="showMessage__view-more"><p>View more</p></div>
                                    </Link>
                                    : ""
                            }
                        </div>
                    </div>
                    : ""
            }
              <BrandItem />
        </>
    );
}

export default Home;
