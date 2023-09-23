import React, { useEffect, useState } from 'react';
import '../styles/sort-product.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Product from '../components/product-card'
import PaginationPage from '../components/pagination';

function SortProduct() {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000);

    const handleInputChangeMinPrice = (event) => {
        setMinPrice(event.target.value);
    };
    const handleInputChangeMaxPrice = (event) => {
        setMaxPrice(event.target.value);
    };

    function handleOpenFilterMobile() {
        const layout = document.querySelector(".filter-mobile-layout");
        const menuExtend = document.querySelector(".filter-mobile");
        layout.style.display = "block";
        menuExtend.style.transform = "translateX(0)";
    }
    function handleCloseFilterMobile() {
        const layout = document.querySelector(".filter-mobile-layout");
        const menuExtend = document.querySelector(".filter-mobile");
        layout.style.display = "none";
        menuExtend.style.transform = "translateX(-100%)";
    }


    useEffect(() => {
        const rangeInput = document.querySelectorAll(".side-part-filter__price-ranger input");
        const priceInput = document.querySelectorAll('.side-part-filter__price-input input');
        const progress = document.querySelector('.side-part-filter__price-progress');
        console.log(priceInput);
        const priceGap = 1000;
        rangeInput.forEach((input) => {
            input.addEventListener("input", (e) => {
                let minVal = parseInt(rangeInput[0].value);
                let maxVal = parseInt(rangeInput[1].value);
                if (maxVal - minVal < priceGap) {
                    if (e.target.className === "side-part-filter__price-ranger-min") {
                        rangeInput[0].value = maxVal - priceGap;
                    } else {
                        rangeInput[1].value = minVal + priceGap;
                    }
                } else {
                    priceInput[0].value = minVal;
                    priceInput[1].value = maxVal;
                    progress.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                    progress.style.right = (100 - (maxVal / rangeInput[1].max) * 100) + "%";
                }
            })
        })
        priceInput.forEach((input) => {
            input.addEventListener("input", (e) => {
                console.log(priceInput[0]);
                if (!e.target.value) {
                    rangeInput[0].value = "0";
                }
                let minVal = parseInt(priceInput[0].value);
                let maxVal = parseInt(priceInput[1].value);
                if (maxVal - minVal >= priceGap && maxVal <= 10000 && minVal >= 0) {
                    if (e.target.className === "side-part-filter__price-from") {
                        rangeInput[0].value = minVal;
                        progress.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                    } else {
                        rangeInput[1].value = maxVal;
                        progress.style.right = (100 - (maxVal / rangeInput[1].max) * 100) + "%";
                    }
                }
            })
        })
    }, []);
    return (
        <>
            <div className='header-sort'>
                <Row>
                    <Col md={3} lg={3} className='header-sort__result-count-wrapper'>
                        <div className='header-sort__result-count'>
                            <p>Showing 1–16 of 66 results</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={9} lg={9} className='header-sort__box-selector'>
                        <div className='header-sort__wrapper-selector'>
                            <div onClick={(e) => handleOpenFilterMobile()} className='header-sort__btn-filter'>
                                <button type="button">
                                    <i  className="bi bi-funnel"></i>
                                    <span>filter product</span>
                                </button>
                            </div>
                            <Dropdown>
                                <div className='header-sort__btn-selector'>
                                    <Dropdown.Toggle type="button">
                                        <span className='header-sort__btn-selector-detail'>Sort by popularity</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <ul className='header-sort__list-selector'>
                                            <li className='header-sort__list-selector-detail'>Sort by popularity</li>
                                            <li className='header-sort__list-selector-detail'>Sort by price: low to high</li>
                                            <li className='header-sort__list-selector-detail'>Sort by price: high to low</li>
                                            <li className='header-sort__list-selector-detail'>Sort by name: a - z</li>
                                            <li className='header-sort__list-selector-detail'>Sort by name: z - a</li>
                                        </ul>
                                    </Dropdown.Menu>
                                </div>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col md={3} lg={3} className='side-part-filter'>
                    <form>
                        <div className='side-part-filter__widget'>
                            <h4 className='side-part-filter__widget-title'>Product Categories</h4>
                            <div className='side-part-filter__widget-checkbox-list'>
                                <ul>
                                    <li className='filter-item'>
                                        <label>
                                            <input className='filter-item__checkbox' type="checkbox" />
                                            <span className='filter-item__name'>phone</span>
                                            <span className='filter-item__custom-checkbox'>
                                                <i  className="bi bi-check"></i>
                                            </span>
                                        </label>
                                    </li>
                                    <li className='filter-item'>
                                        <label>
                                            <input className='filter-item__checkbox' type="checkbox" />
                                            <span className='filter-item__name'>laptop</span>
                                            <span className='filter-item__custom-checkbox'>
                                                <i  className="bi bi-check"></i>
                                            </span>
                                        </label>
                                    </li>
                                    <li className='filter-item'>
                                        <label>
                                            <input className='filter-item__checkbox' type="checkbox" />
                                            <span className='filter-item__name'>tablet</span>
                                            <span className='filter-item__custom-checkbox'>
                                                <i  className="bi bi-check"></i>
                                            </span>
                                        </label>
                                    </li>
                                    <li className='filter-item'>
                                        <label>
                                            <input className='filter-item__checkbox' type="checkbox" />
                                            <span className='filter-item__name'>headphone</span>
                                            <span className='filter-item__custom-checkbox'>
                                                <i  className="bi bi-check"></i>
                                            </span>
                                        </label>
                                    </li>
                                    <li className='filter-item'>
                                        <label>
                                            <input className='filter-item__checkbox' type="checkbox" />
                                            <span className='filter-item__name'>tv</span>
                                            <span className='filter-item__custom-checkbox'>
                                                <i  className="bi bi-check"></i>
                                            </span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='side-part-filter__widget'>
                            <h4 className='side-part-filter__widget-title'>Product Status</h4>
                            <div className='side-part-filter__widget-checkbox-list'>
                                <ul>
                                    <li className='filter-item'>
                                        <label>
                                            <input className='filter-item__checkbox' type="checkbox" />
                                            <span className='filter-item__name'>Apple</span>
                                            <span className='filter-item__custom-checkbox'>
                                                <i  className="bi bi-check"></i>
                                            </span>
                                        </label>
                                    </li>
                                    <li className='filter-item'>
                                        <label>
                                            <input className='filter-item__checkbox' type="checkbox" />
                                            <span className='filter-item__name'>samsung</span>
                                            <span className='filter-item__custom-checkbox'>
                                                <i  className="bi bi-check"></i>
                                            </span>
                                        </label>
                                    </li>
                                    <li className='filter-item'>
                                        <label>
                                            <input className='filter-item__checkbox' type="checkbox" />
                                            <span className='filter-item__name'>xiaomi</span>
                                            <span className='filter-item__custom-checkbox'>
                                                <i  className="bi bi-check"></i>
                                            </span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='side-part-filter__widget'>
                            <h4 className='side-part-filter__widget-title'>Filter by price</h4>
                            <div className='side-part-filter__widget-checkbox-list'>
                                <div className='side-part-filter__wrapper-price'>
                                    <div className='side-part-filter__price-input'>
                                        <span className='side-part-filter__price-currency'>$</span>
                                        <input className='side-part-filter__price-from' type="number"
                                            value={minPrice}
                                            onChange={handleInputChangeMinPrice} />
                                    </div>
                                    <span>to</span>
                                    <div className='side-part-filter__price-input'>
                                        <span className='side-part-filter__price-currency'>$</span>
                                        <input className='side-part-filter__price-to' type="number"
                                            value={maxPrice}
                                            onChange={handleInputChangeMaxPrice} />
                                    </div>
                                </div>
                                <div className='side-part-filter__price-slider'>
                                    <div className='side-part-filter__price-progress'>
                                    </div>
                                    <div className='side-part-filter__price-ranger'>
                                        <input type="range" className='side-part-filter__price-ranger-min' min="0" max="10000"
                                            value={minPrice}
                                            onChange={handleInputChangeMinPrice}
                                        />
                                        <input type="range" className='side-part-filter__price-ranger-max' min="0" max="10000"
                                            value={maxPrice}
                                            onChange={handleInputChangeMaxPrice} />
                                    </div>
                                </div>
                                <div className='side-part-filter__btn-filter-wrapper'>
                                    <button className='side-part-filter__btn-filter' type="button">
                                        <span className='side-part-filter__btn-filter-content'>filter</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </Col>
                <Col xs={12} sm={12} md={9} lg={9} className='product-filter'>
                    <Row xs={1} sm={2} md={3} lg={4}>
                        <Col>
                            <Product />
                        </Col>
                        <Col>
                            <Product />
                        </Col>
                        <Col>
                            <Product />
                        </Col>
                        <Col>
                            <Product />
                        </Col>
                        <Col>
                            <Product />
                        </Col>
                        <Col>
                            <Product />
                        </Col>
                        <Col>
                            <Product />
                        </Col>
                    </Row>
                    <PaginationPage/>
                </Col>
            </Row>
            <div className='filter-mobile'>
                <div className='filter-mobile__header'>
                    <h3>filter product</h3>
                    <div onClick={() => handleCloseFilterMobile()} className='filter-mobile__icon-close'>
                        <i  className="bi bi-x"></i>
                    </div>
                </div>
                <form>
                    <div className='side-part-filter__widget'>
                        <h4 className='side-part-filter__widget-title'>Product Categories</h4>
                        <div className='side-part-filter__widget-checkbox-list'>
                            <ul>
                                <li className='filter-item'>
                                    <label>
                                        <input className='filter-item__checkbox' type="checkbox" />
                                        <span className='filter-item__name'>phone</span>
                                        <span className='filter-item__custom-checkbox'>
                                            <i  className="bi bi-check"></i>
                                        </span>
                                    </label>
                                </li>
                                <li className='filter-item'>
                                    <label>
                                        <input className='filter-item__checkbox' type="checkbox" />
                                        <span className='filter-item__name'>laptop</span>
                                        <span className='filter-item__custom-checkbox'>
                                            <i  className="bi bi-check"></i>
                                        </span>
                                    </label>
                                </li>
                                <li className='filter-item'>
                                    <label>
                                        <input className='filter-item__checkbox' type="checkbox" />
                                        <span className='filter-item__name'>tablet</span>
                                        <span className='filter-item__custom-checkbox'>
                                            <i  className="bi bi-check"></i>
                                        </span>
                                    </label>
                                </li>
                                <li className='filter-item'>
                                    <label>
                                        <input className='filter-item__checkbox' type="checkbox" />
                                        <span className='filter-item__name'>headphone</span>
                                        <span className='filter-item__custom-checkbox'>
                                            <i  className="bi bi-check"></i>
                                        </span>
                                    </label>
                                </li>
                                <li className='filter-item'>
                                    <label>
                                        <input className='filter-item__checkbox' type="checkbox" />
                                        <span className='filter-item__name'>tv</span>
                                        <span className='filter-item__custom-checkbox'>
                                            <i  className="bi bi-check"></i>
                                        </span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='side-part-filter__widget'>
                        <h4 className='side-part-filter__widget-title'>Product Status</h4>
                        <div className='side-part-filter__widget-checkbox-list'>
                            <ul>
                                <li className='filter-item'>
                                    <label>
                                        <input className='filter-item__checkbox' type="checkbox" />
                                        <span className='filter-item__name'>Apple</span>
                                        <span className='filter-item__custom-checkbox'>
                                            <i  className="bi bi-check"></i>
                                        </span>
                                    </label>
                                </li>
                                <li className='filter-item'>
                                    <label>
                                        <input className='filter-item__checkbox' type="checkbox" />
                                        <span className='filter-item__name'>samsung</span>
                                        <span className='filter-item__custom-checkbox'>
                                            <i  className="bi bi-check"></i>
                                        </span>
                                    </label>
                                </li>
                                <li className='filter-item'>
                                    <label>
                                        <input className='filter-item__checkbox' type="checkbox" />
                                        <span className='filter-item__name'>xiaomi</span>
                                        <span className='filter-item__custom-checkbox'>
                                            <i  className="bi bi-check"></i>
                                        </span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='side-part-filter__widget'>
                        <h4 className='side-part-filter__widget-title'>Filter by price</h4>
                        <div className='side-part-filter__widget-checkbox-list'>
                            <div className='side-part-filter__wrapper-price'>
                                <div className='side-part-filter__price-input'>
                                    <span className='side-part-filter__price-currency'>$</span>
                                    <input className='side-part-filter__price-from' type="number"
                                        value={minPrice}
                                        onChange={handleInputChangeMinPrice} />
                                </div>
                                <span>to</span>
                                <div className='side-part-filter__price-input'>
                                    <span className='side-part-filter__price-currency'>$</span>
                                    <input className='side-part-filter__price-to' type="number"
                                        value={maxPrice}
                                        onChange={handleInputChangeMaxPrice} />
                                </div>
                            </div>
                            <div className='side-part-filter__price-slider'>
                                <div className='side-part-filter__price-progress'>
                                </div>
                                <div className='side-part-filter__price-ranger'>
                                    <input type="range" className='side-part-filter__price-ranger-min' min="0" max="10000"
                                        value={minPrice}
                                        onChange={handleInputChangeMinPrice}
                                    />
                                    <input type="range" className='side-part-filter__price-ranger-max' min="0" max="10000"
                                        value={maxPrice}
                                        onChange={handleInputChangeMaxPrice} />
                                </div>
                            </div>
                            <div className='side-part-filter__btn-filter-wrapper'>
                                <button className='side-part-filter__btn-filter' type="button">
                                    <span className='side-part-filter__btn-filter-content'>filter</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div onClick={() => handleCloseFilterMobile()} className='filter-mobile-layout'>
            </div>
        </>
    );
}

export default SortProduct
