import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/sort-product.scss";
import "../styles/sidebar-blog.scss";
import "../styles/blog-posts.scss";
import post01 from "../assets/imgs/post-1-100x100.jpg";
import post02 from "../assets/imgs/post-2-100x100.jpg";
import post03 from "../assets/imgs/post-3-100x100.jpg";
import postdemo from "../assets/imgs/post-1.jpg";
import bannerSideBar from "../assets/imgs/widget-banner.jpg";

import PaginationPage from "../components/pagination";
import { Link } from "react-router-dom";
function Blog() {
    return (
        <div className="xo-container">
            <Row>
                <Col xs={12} sm={12} md={9} lg={9}>
                    <div className="blog-posts">
                        <div className="blog-posts__comp">
                            <div className="blog-posts__header">
                                <div className="blog-posts__title">
                                    <h2>
                                        But I must explain to you how all this
                                        mistaken idea
                                    </h2>
                                </div>
                                <div className="blog-posts__footer-entry">
                                    <div className="blog-posts__meta-item blog-posts__meta-item--time">
                                        <i className="bi bi-clock"></i>
                                        <span>October 9, 2021</span>
                                    </div>
                                    <div className="blog-posts__meta-item blog-posts__meta-item--category">
                                        <i className="bi bi-bookmark"></i>
                                        <span>Watches</span>
                                    </div>
                                    <div className="blog-posts__meta-item blog-posts__meta-item--entry-tags">
                                        <i className="bi bi-ticket-perforated"></i>
                                        <span>klbtheme,themeforest</span>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-posts__main">
                                <div className="blog-posts__box-img">
                                    <img src={postdemo} alt="smart watch" />
                                </div>
                                <div className="blog-posts__text-description">
                                    <p>
                                        Donec rhoncus quis diam sit amet
                                        faucibus. Vivamus pellentesque, sem sed
                                        convallis ultricies, ante eros laoreet
                                        libero, vitae suscipit lorem turpis sit
                                        amet lectus. Quisque egestas lorem ut
                                        mauris ultrices, vitae sollicitudin quam
                                        facilisis. Vivamus rutrum urna non
                                        ligula tempor aliquet. Fusce tincidunt
                                        est magna, id malesuada massa imperdiet
                                        ut. Nunc non nisi urna. Nam
                                    </p>
                                </div>
                                <Link>
                                    <button
                                        type="button"
                                        className="blog-posts__btn-learn-more"
                                    >
                                        <span className="blog-posts__btn-content">
                                            read more
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="blog-posts">
                        <div className="blog-posts__comp">
                            <div className="blog-posts__header">
                                <div className="blog-posts__title">
                                    <h2>
                                        But I must explain to you how all this
                                        mistaken idea
                                    </h2>
                                </div>
                                <div className="blog-posts__footer-entry">
                                    <div className="blog-posts__meta-item blog-posts__meta-item--time">
                                        <i className="bi bi-clock"></i>
                                        <span>October 9, 2021</span>
                                    </div>
                                    <div className="blog-posts__meta-item blog-posts__meta-item--category">
                                        <i className="bi bi-bookmark"></i>
                                        <span>Watches</span>
                                    </div>
                                    <div className="blog-posts__meta-item blog-posts__meta-item--entry-tags">
                                        <i className="bi bi-ticket-perforated"></i>
                                        <span>klbtheme,themeforest</span>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-posts__main">
                                <div className="blog-posts__box-img">
                                    <img src={postdemo} alt="smart watch" />
                                </div>
                                <div className="blog-posts__text-description">
                                    <p>
                                        Donec rhoncus quis diam sit amet
                                        faucibus. Vivamus pellentesque, sem sed
                                        convallis ultricies, ante eros laoreet
                                        libero, vitae suscipit lorem turpis sit
                                        amet lectus. Quisque egestas lorem ut
                                        mauris ultrices, vitae sollicitudin quam
                                        facilisis. Vivamus rutrum urna non
                                        ligula tempor aliquet. Fusce tincidunt
                                        est magna, id malesuada massa imperdiet
                                        ut. Nunc non nisi urna. Nam
                                    </p>
                                </div>
                                <Link>
                                    <button
                                        type="button"
                                        className="blog-posts__btn-learn-more"
                                    >
                                        <span className="blog-posts__btn-content">
                                            read more
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="blog-posts">
                        <div className="blog-posts__comp">
                            <div className="blog-posts__header">
                                <div className="blog-posts__title">
                                    <h2>
                                        But I must explain to you how all this
                                        mistaken idea
                                    </h2>
                                </div>
                                <div className="blog-posts__footer-entry">
                                    <div className="blog-posts__meta-item blog-posts__meta-item--time">
                                        <i className="bi bi-clock"></i>
                                        <span>October 9, 2021</span>
                                    </div>
                                    <div className="blog-posts__meta-item blog-posts__meta-item--category">
                                        <i className="bi bi-bookmark"></i>
                                        <span>Watches</span>
                                    </div>
                                    <div className="blog-posts__meta-item blog-posts__meta-item--entry-tags">
                                        <i className="bi bi-ticket-perforated"></i>
                                        <span>klbtheme,themeforest</span>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-posts__main">
                                <div className="blog-posts__box-img">
                                    <img src={postdemo} alt="smart watch" />
                                </div>
                                <div className="blog-posts__text-description">
                                    <p>
                                        Donec rhoncus quis diam sit amet
                                        faucibus. Vivamus pellentesque, sem sed
                                        convallis ultricies, ante eros laoreet
                                        libero, vitae suscipit lorem turpis sit
                                        amet lectus. Quisque egestas lorem ut
                                        mauris ultrices, vitae sollicitudin quam
                                        facilisis. Vivamus rutrum urna non
                                        ligula tempor aliquet. Fusce tincidunt
                                        est magna, id malesuada massa imperdiet
                                        ut. Nunc non nisi urna. Nam
                                    </p>
                                </div>
                                <Link>
                                    <button
                                        type="button"
                                        className="blog-posts__btn-learn-more"
                                    >
                                        <span className="blog-posts__btn-content">
                                            read more
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <PaginationPage /> */}
                </Col>
                <Col xs={12} sm={12} md={3} lg={3}>
                    <div className="sidebar-blog">
                        <div className="sidebar-blog__comp">
                            <form className="sidebar-blog__form-search">
                                <input type="text" placeholder="Search..." />
                                <button
                                    type="submit"
                                    className="sidebar-blog__btn-search"
                                >
                                    <i className="bi bi-search"></i>
                                </button>
                            </form>
                        </div>
                        <div className="sidebar-blog__comp">
                            <div className="sidebar-blog__title">
                                <h4 className="widget-title">Categories</h4>
                            </div>
                            <div className="sidebar-blog__main">
                                <ul className="sidebar-blog__list-item">
                                    <li>
                                        <Link to="phone">
                                            <span>
                                                <i className="bi bi-chevron-right"></i>
                                            </span>
                                            <p>cell phone</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="tablet">
                                            <span>
                                                <i className="bi bi-chevron-right"></i>
                                            </span>
                                            <p>Tablet</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="accessories">
                                            <span>
                                                <i className="bi bi-chevron-right"></i>
                                            </span>
                                            <p>Accessories</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="smartwatches">
                                            <span>
                                                <i className="bi bi-chevron-right"></i>
                                            </span>
                                            <p>Smart Watches</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-blog__comp">
                            <div className="sidebar-blog__title">
                                <h4 className="widget-title">Tags</h4>
                            </div>
                            <div className="sidebar-blog__main">
                                <div className="sidebar-blog__item-link">
                                    <Link>envato</Link>
                                    <Link>iPad</Link>
                                    <Link>klbtheme</Link>
                                    <Link>phone</Link>
                                    <Link>themeforest</Link>
                                    <Link>standart</Link>
                                    <Link>photo</Link>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-blog__comp">
                            <div className="sidebar-blog__title">
                                <h4 className="widget-title">Popular Posts</h4>
                            </div>
                            <div className="sidebar-blog__main">
                                <ul className="sidebar-blog__list-post">
                                    <li>
                                        <Link>
                                            <div className="sidebar-blog__img-post-wrapper">
                                                <div className="sidebar-blog__img-post">
                                                    <img
                                                        src={post01}
                                                        alt="smartwatch"
                                                    />
                                                </div>
                                            </div>
                                            <div className="sidebar-blog__content-post">
                                                <h5 className="sidebar-blog__title-post">
                                                    WATCHES
                                                </h5>
                                                <div className="sidebar-blog__description">
                                                    <p>
                                                        But I must explain to
                                                        you how all this
                                                        mistaken idea
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <div className="sidebar-blog__img-post-wrapper">
                                                <div className="sidebar-blog__img-post">
                                                    <img
                                                        src={post02}
                                                        alt="CAMERA"
                                                    />
                                                </div>
                                            </div>
                                            <div className="sidebar-blog__content-post">
                                                <h5 className="sidebar-blog__title-post">
                                                    CAMERA
                                                </h5>
                                                <div className="sidebar-blog__description">
                                                    <p>
                                                        The Problem With
                                                        Typefaces on the Web
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <div className="sidebar-blog__img-post-wrapper">
                                                <div className="sidebar-blog__img-post">
                                                    <img
                                                        src={post03}
                                                        alt="TABLET"
                                                    />
                                                </div>
                                            </div>
                                            <div className="sidebar-blog__content-post">
                                                <h5 className="sidebar-blog__title-post">
                                                    TABLET
                                                </h5>
                                                <div className="sidebar-blog__description">
                                                    <p>
                                                        English Breakfast Tea
                                                        With Tasty Donut
                                                        Desserts
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-blog__comp">
                            <div className="sidebar-blog__banner-img">
                                <img src={bannerSideBar} alt="banner SideBar" />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Blog;
