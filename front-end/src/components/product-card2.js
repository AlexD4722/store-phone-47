import "../styles/product-flex.scss";
import React from "react";
import { useCartContext } from "../store/hooks";

function ProductFlex(props) {
    const dispatchCart = useCartContext()[1];

    const handleCart = () => {
        let userSession = sessionStorage.getItem("user");
        if (userSession) {
            let loginStatus = JSON.parse(userSession);
            if (loginStatus.login === "OK") {
                let found = false;
                loginStatus.user.cart.forEach((value) => {
                    if (value.product.id === props.product.id) {
                        value.quantity += 1;
                        found = true;
                    }
                });
                if (!found) {
                    loginStatus.user.cart.push({
                        product: props.product,
                        quantity: 1,
                    });
                }
                userSession = JSON.stringify(loginStatus);
                sessionStorage.setItem("user", userSession);
            } else {
                let payload = { product: props.product, quantity: 1 };
                let action = { type: "add", payload };
                dispatchCart(action);
            }
        }
    };

    return (
        <div>
            <div className="product-flex">
                <div className="product-flex__wrapper">
                    <div className="product-flex__img-wrapper">
                        <div className="product-flex__img-default">
                            <img src={props.product.images[0]} alt="" />
                        </div>
                        <div className="product-flex__img-sub">
                            <img src={props.product.images[1]} alt="" />
                        </div>
                    </div>
                    <div className="product-flex__content">
                        <h3 className="product-flex__product-title">
                            {props.product.name} {props.product.color} {props.product.capacity}
                        </h3>
                        <div className="product-flex__product-rating">
                            <div className="product-flex__box-start-rating">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <span className="product-flex__count-rating">
                                1
                            </span>
                        </div>
                        <div className="product-flex__price">
                            <span className="product-flex__price-new">
                                ${props.product.selling_price}
                            </span>
                            <span className="product-flex__price-old">
                                ${props.product.initial_price}
                            </span>
                        </div>
                        <ul>

                            {
                                props.product.description.map(items => {
                                    return (
                                        <li>
                                            {items}
                                        </li>
                                    )
                                })
                            }
                            {/* <li>Unlocked for All Carriers</li>
                            <li>6.1-inch (15.5 cm diagonal)</li>
                            <li>12MP TrueDepth front camera</li> */}
                        </ul>
                    </div>
                </div>
                <div className="product-flex__footer">
                    <div className="product-flex__footer-wrapper">
                        <div className="product-flex__footer-btn-add">
                            <button type="button" onClick={handleCart}>
                                <span>goto detail page</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductFlex;
