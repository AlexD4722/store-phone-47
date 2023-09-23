import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/detail-product.scss";
import "../styles/showMessage.scss";
import Carousel from "react-bootstrap/Carousel";

import { useEffect, useState } from "react";
import APIrequest, { SEARCH_ITEM_EXACTLY, UPDATE_USER } from "../API/callAPI";
import { useNavigate, useParams } from "react-router";
import { useCartContext, useWishlistContext } from "../store/hooks";
import { Link } from "react-router-dom";

function DetailProduct({ match }) {
    const params = useParams();
    const [showMessage, setShowMessage] = useState(false);
    const [priceInitial, setPriceInitial] = useState();
    const [priceSelling, setPriceSelling] = useState();
    const [dataRequest, setDataRequest] = useState();
    const [product, SetProduct] = useState([]);
    const [valueQuantity, setValueQuantity] = useState(1);
    const [valueColor, setValueColor] = useState([]);
    const [valueCapacity, setValueCapacity] = useState([]);
    const [idChooseItem, setIdChooseItem] = useState();
    const [listItems, setListItems] = useState();
    const [selectedOptionColor, setSelectedOptionColor] = useState();
    const [selectedOptionCapacity, setSelectedOptionCapacity] = useState();
    const [wishlist, setWishlist] = useWishlistContext();
    const dispatchCart = useCartContext()[1];
    const navigate = useNavigate();
    const displayMessage = () => {
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 3000);
    };
    const closeMessage = () => {
        setShowMessage(false);
    };
    const handleCart = () => {
        let userObject = JSON.parse(sessionStorage.getItem("user"));
        let localCartUsing = true;
        if (userObject) {
            if (userObject.login === "OK") {
                localCartUsing = false;
                let found = false;
                let userCart = userObject.user.cart;
                userCart.forEach((value) => {
                    if (
                        value.product.id === idChooseItem &&
                        value.color === selectedOptionColor
                    ) {
                        value.quantity += valueQuantity;
                        value.totalPrice =
                            parseFloat(priceSelling) *
                            parseFloat(valueQuantity);
                        found = true;
                    }
                });
                if (!found) {
                    product.forEach((item) => {
                        if (item.id === idChooseItem) {
                            userCart.push({
                                product: item,
                                quantity: valueQuantity,
                                totalPrice:
                                    parseFloat(priceSelling) *
                                    parseFloat(valueQuantity),
                            });
                        }
                    });
                }
                userObject.user.cart = userCart;
                sessionStorage.setItem("user", JSON.stringify(userObject));
                APIrequest(UPDATE_USER, userObject.user);
                setWishlist([...wishlist]);
            }
        }
        if (localCartUsing) {
            product.map((item) => {
                if (item.id === idChooseItem) {
                    let payload = {
                        product: item,
                        quantity: valueQuantity,
                        totalPrice:
                            parseFloat(priceSelling) *
                            parseFloat(valueQuantity),
                    };
                    let action = { type: "add", payload };
                    dispatchCart(action);
                }
            });
        }
        displayMessage();
    };
    useEffect(() => {
        let newData = {
            search: params.nameProduct,
        };
        setDataRequest(newData);
        if (newData) {
            APIrequest(SEARCH_ITEM_EXACTLY, newData).then((response) => {
                if (response.result === "Success") {
                    const ListPhones = response.data.productArray;
                    setListItems(response.data.productArray);
                    if (ListPhones.length !== 0) {
                        setPriceInitial(
                            ListPhones[0] && ListPhones[0].initial_price
                        );
                        setPriceSelling(
                            ListPhones[0] && ListPhones[0].selling_price
                        );
                    }
                    SetProduct(ListPhones);
                    let checkAttribute = false;
                    let listColor = [];
                    let listCapacity = [];
                    if (ListPhones) {
                        setSelectedOptionColor(ListPhones[0].color);
                        ListPhones.forEach((phone) => {
                            if (phone.color) {
                                listColor.push(phone.color);
                            }
                        });
                        const listColors = [...new Set(listColor)];
                        setValueColor(listColors);
                        const items = ListPhones.filter((product) => {
                            return product.color === ListPhones[0].color
                        })
                        items.forEach((phone) => {
                            if (phone.capacity) {
                                listCapacity.push(phone.capacity);
                            }
                        });
                        setValueCapacity([...new Set(listCapacity)]);
                        setSelectedOptionCapacity(items[0].capacity)
                    }
                }
            });
        }
        function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
        topFunction();
    }, [params]);
    const handleChangeQuantity = (event) => {
        const inputValue = event.target.value;
        if (inputValue < 0) {
            setValueQuantity(1);
        } else {
            setValueQuantity(inputValue);
        }
    };
    const handleIncreseQuantity = (event) => {
        setValueQuantity((prevValue) => prevValue + 1);
    };
    const handleDecreseQuantity = (event) => {
        if (parseInt(valueQuantity) < 0 || !valueQuantity) {
            setValueQuantity(1);
        }
        if (valueQuantity >= 2) {
            setValueQuantity((prevValue) => prevValue - 1);
        }
    };
    let filteredProducts = null
    const handleChoseOptionColor = (event) => {
        setSelectedOptionColor(event.target.value);
        const items = listItems.filter((product) => {
            return product.color === event.target.value
        })
        let listCapacity = []
        items.forEach((phone) => {
            if (phone.capacity) {
                listCapacity.push(phone.capacity);
            }
        });
        listCapacity = [...new Set(listCapacity)]
        setValueCapacity(listCapacity);
        setSelectedOptionCapacity(listCapacity[0]);

        // if (listItems) {
        //     const filteredProducts = listItems.filter((product) => {
        //         return product.color === event.target.value && product.capacity === selectedOptionCapacity;
        //     });
        //     console.log(filteredProducts, "filteredProducts---");
        //     if (filteredProducts.length) {
        //         console.log(filteredProducts, "-------------------------");
        //         setPriceInitial(filteredProducts[0].initial_price);
        //         setPriceSelling(filteredProducts[0].selling_price);
        //         setIdChooseItem(filteredProducts[0].id);
        //     }

        // }

    };
    const handleChoseOptionCapacity = (event) => {
        setSelectedOptionCapacity(event.target.value);
        // if (listItems) {
        //     const filteredProducts = listItems.filter((product) => {
        //         return product.color === selectedOptionColor && product.capacity === event.target.value;
        //     });
        //     if (filteredProducts.length) {
        //         console.log(filteredProducts, "-------------------------");
        //         setPriceInitial(filteredProducts[0].initial_price);
        //         setPriceSelling(filteredProducts[0].selling_price);
        //         setIdChooseItem(filteredProducts[0].id);
        //     }
        // }
    };
    useEffect(()=>{
        if (listItems) {
            if(valueColor.length && valueCapacity.length){
                const filteredProducts = listItems.filter((product) => {
                    return( product.color === selectedOptionColor && product.capacity === selectedOptionCapacity);
                });
                console.log(filteredProducts, "filteredProducts---");
                if (filteredProducts.length) {
                    console.log(filteredProducts, "-------------------------");
                    if(priceSelling){
                        console.log(filteredProducts[0].initial_price, "-------------------------");
                        setPriceSelling(filteredProducts[0].selling_price)
                    }
                    setPriceInitial(filteredProducts[0].initial_price);
                    setPriceSelling(filteredProducts[0].selling_price);
                    setIdChooseItem(filteredProducts[0].id);
                }
            }
            if((valueColor.length && !valueCapacity.length)){
                const filteredProducts = listItems.filter((product) => {
                    return( product.color === selectedOptionColor || product.capacity === selectedOptionCapacity);
                });
                console.log(filteredProducts, "filteredProducts---");
                if (filteredProducts.length) {
                    console.log(filteredProducts, "-------------------------");
                    if(priceSelling){
                        console.log(filteredProducts[0].initial_price, "-------------------------");
                        setPriceSelling(filteredProducts[0].selling_price)
                    }
                    setPriceInitial(filteredProducts[0].initial_price);
                    setPriceSelling(filteredProducts[0].selling_price);
                    setIdChooseItem(filteredProducts[0].id);
                }
            }
            if(!valueColor.length && valueCapacity.length){
                const filteredProducts = listItems.filter((product) => {
                    return(  product.capacity === selectedOptionCapacity);
                });
                console.log(filteredProducts, "filteredProducts---");
                if (filteredProducts.length) {
                    console.log(filteredProducts, "-------------------------");
                    if(priceSelling){
                        console.log(filteredProducts[0].initial_price, "-------------------------");
                        setPriceSelling(filteredProducts[0].selling_price)
                    }
                    setPriceInitial(filteredProducts[0].initial_price);
                    setPriceSelling(filteredProducts[0].selling_price);
                    setIdChooseItem(filteredProducts[0].id);
                }
            }
        }
    },[selectedOptionColor, selectedOptionCapacity])
    return (
        <div className="xo-container">
            {/* <h3>This is product detail</h3> */}
            <div className="detail-product">
                <div className="detail-product__main-box">
                    <Row xs={1} sm={2}>
                        <Col>
                            <Carousel data-bs-theme="dark" pause={"hover"}>
                                {product[0] &&
                                    product[0].images.map((image, index) => {
                                        return (
                                            <Carousel.Item key={index}>
                                                <div className="detail-product__img-detail">
                                                    <img src={image} alt="" />
                                                </div>
                                            </Carousel.Item>
                                        );
                                    })}
                            </Carousel>
                        </Col>
                        <Col>
                            <form className="detail-product__content-box">
                                <div className="detail-product__name-product">
                                    <h2>{product[0] && product[0].name}</h2>
                                </div>
                                <div className="detail-product__box-review">
                                    <div className="detail-product__list-start">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <div className="detail-product__quantity-review">
                                        <span className="detail-product__quantity-review-detail">
                                            1
                                        </span>
                                        Review
                                    </div>
                                </div>
                                <div className="detail-product__status-stock">
                                    <div className="detail-product__status-icon-check">
                                        <i className="bi bi-check-circle"></i>
                                    </div>
                                    <div className="detail-product__status-stock-running">
                                        <p>in stock</p>
                                    </div>
                                </div>
                                <div className="detail-product__box-price">
                                    <p className="detail-product__price-new">
                                        ${priceSelling}
                                    </p>
                                    <p className="detail-product__price-old">
                                        ${priceInitial}
                                    </p>
                                </div>
                                {
                                    valueColor.length !== 0 && (
                                        <div className="detail-product__box-option detail-product__box-option--color">
                                            <p>
                                                Color:{" "}
                                                <span className="detail-product__name-option">
                                                    {selectedOptionColor}
                                                </span>
                                            </p>
                                            <div className="detail-product__box-list-option">
                                                {
                                                    valueColor.map(
                                                        (colorItem, index) => {
                                                            return (
                                                                <label key={index}>
                                                                    <input
                                                                        type="radio"
                                                                        name="color"
                                                                        value={
                                                                            colorItem
                                                                        }
                                                                        onChange={
                                                                            handleChoseOptionColor
                                                                        }
                                                                        checked={
                                                                            selectedOptionColor ===
                                                                            colorItem
                                                                        }
                                                                    />
                                                                    <span>
                                                                        {colorItem}
                                                                    </span>
                                                                </label>
                                                            );
                                                        }
                                                    )
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                                {valueCapacity.length !== 0 && (
                                    <div className="detail-product__box-option detail-product__box-option--capacity">
                                        <p>
                                            Capacity:{" "}
                                            <span className="detail-product__name-option">
                                                {selectedOptionCapacity}
                                            </span>
                                        </p>
                                        <div className="detail-product__box-list-option">
                                            {valueCapacity.length &&
                                                valueCapacity.map(
                                                    (capacityItem, index) => {
                                                        return (
                                                            <label key={index}>
                                                                <input
                                                                    type="radio"
                                                                    name="capacity"
                                                                    value={
                                                                        capacityItem
                                                                    }
                                                                    onChange={
                                                                        handleChoseOptionCapacity
                                                                    }
                                                                    checked={
                                                                        selectedOptionCapacity ===
                                                                        capacityItem
                                                                    }
                                                                />
                                                                <span>
                                                                    {
                                                                        capacityItem
                                                                    }
                                                                </span>
                                                            </label>
                                                        );
                                                    }
                                                )}
                                        </div>
                                    </div>
                                )}
                                <div className="detail-product__info-quantity">
                                    <div className="detail-product__info-top">
                                        <div className="detail-product__info-quantity-detail">
                                            <div
                                                className="detail-product__btn-dash-quantity"
                                                onClick={handleDecreseQuantity}
                                            ></div>
                                            <input
                                                type="number"
                                                name="quantity"
                                                min="0"
                                                step="1"
                                                onChange={handleChangeQuantity}
                                                value={valueQuantity}
                                            />
                                            <div
                                                className="detail-product__btn-plus-quantity"
                                                onClick={handleIncreseQuantity}
                                            ></div>
                                        </div>
                                        <div className="detail-product__btn-add-cart">
                                            <button
                                                type="button"
                                                onClick={handleCart}
                                            >
                                                <span className="detail-product__btn-add-cart-content">
                                                    Add to cart
                                                </span>
                                            </button>
                                        </div>
                                        <div className="detail-product__btn-add-wishlist">
                                            <button type="button">
                                                <span className="detail-product__btn-add-wishlist-icon">
                                                    <i className="bi bi-heart"></i>
                                                </span>
                                                <span className="detail-product__btn-add-wishlist-content">
                                                    Add to wishlist
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="detail-product__info-bottom">
                                        <div className="detail-product__info-delivery">
                                            <i className="bi bi-box-seam"></i>
                                            <strong> 2-day Delivery</strong>
                                        </div>
                                        <div className="detail-product__info-delivery-slogan">
                                            <p>
                                                speedy and reliable parcel
                                                delivery!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </div>
                <div className="detail-product__sub-info-item">
                    <div className="detail-product__title-comp-sub-info">
                        <h3>Description</h3>
                    </div>
                    <div className="detail-product__content-sub-info">
                        {/* <div className='detail-product__intro-item'>
                            <p>The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games.</p>
                        </div> */}
                        <div className="detail-product__key-feature-item">
                            <p>Key Features:</p>
                            <ul>
                                {product[0] &&
                                    product[0].description &&
                                    product[0].description.map((item) => {
                                        return <li>{item}</li>;
                                    })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {showMessage ? (
                <div className="showMessage showMessage--add-cart">
                    <div className="showMessage__box">
                        <p className="showMessage__content">
                            “{product[0].name} {selectedOptionCapacity}{" "}
                            {selectedOptionColor}” has been added to your cart.
                        </p>
                        <div
                            className="showMessage__close"
                            onClick={() => closeMessage}
                        >
                            <i className="bi bi-x"></i>
                        </div>
                        <Link to="/cart" className="showMessage__link">
                            <div className="showMessage__view-more">
                                <p>View more</p>
                            </div>
                        </Link>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default DetailProduct;
