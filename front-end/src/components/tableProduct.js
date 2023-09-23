import { Link } from "react-router-dom";
import "../styles/table-product.scss";
import { useState } from "react";
import { useEffect } from "react";
import { useCartContext, useWishlistContext } from "../store";
import APIrequest, { UPDATE_USER, testAPI } from "../API/callAPI";
function TableProduct(props) {
    const [valueQuantity, setValueQuantity] = useState(1);
    const [cart, setCart] = useState([]);
    const [carts, dispatch] = useCartContext();
    const [wishlist, setWishlist] = useWishlistContext();
    useEffect(() => {
        if (props.items) {
            setCart(props.items);
        }
    }, [props]);

    const increaseQuantity = (productId, colorId) => {
        setCart((prevProducts) => {
            const lists = prevProducts.map((item) => {
                if (item.product.id === productId && item.color === colorId) {
                    return {
                        ...item,
                        product: item.product,
                        quantity: parseInt(item.quantity) + 1,
                        totalPrice:
                            parseFloat(item.product.selling_price) *
                            parseFloat(item.quantity + 1),
                    };
                }
                return item;
            });
            const localUser = localStorage.getItem("user");
            const sessionUser = JSON.parse(sessionStorage.getItem("user"));
            sessionStorage.setItem("cart", JSON.stringify(lists));
            if (sessionUser && sessionUser.login === "OK") {
                sessionUser.user.cart = lists;
                sessionStorage.setItem("user", JSON.stringify(sessionUser));
            }
            if (localUser) {
                localStorage.setItem("user", sessionUser);
            }
            let action = { type: "replace", payload: lists };
            dispatch(action);
            return lists;
        });
    };
    const decreaseQuantity = (productId, colorId) => {
        setCart((prevProducts) => {
            const lists = prevProducts.map((item) => {
                if (
                    item.product.id === productId &&
                    item.color === colorId &&
                    item.quantity > 1
                ) {
                    return {
                        ...item,
                        product: item.product,
                        quantity: item.quantity - 1,
                        totalPrice:
                            parseFloat(item.product.selling_price) *
                            parseFloat(item.quantity - 1),
                    };
                }
                return item;
            });
            const localUser = localStorage.getItem("user");
            const sessionUser = JSON.parse(sessionStorage.getItem("user"));
            sessionStorage.setItem("cart", JSON.stringify(lists));
            if (sessionUser && sessionUser.login === "OK") {
                sessionUser.user.cart = lists;
                sessionStorage.setItem("user", JSON.stringify(sessionUser));
            }
            if (localUser) {
                localStorage.setItem("user", sessionUser);
            }
            let action = { type: "replace", payload: lists };
            dispatch(action);
            return lists;
        });
    };
    const handleBlurChangeQuantity = (productId, newQuantity, colorID) => {
        setCart((prevProducts) =>
            prevProducts.map((item) => {
                if (item.product.id === productId && item.color === colorID) {
                    if (newQuantity <= 0) {
                        return {
                            ...item,
                            product: item.product,
                            quantity: 1,
                            totalPrice:
                                parseFloat(item.product.selling_price) *
                                parseFloat(1),
                        };
                    }
                }
                return item;
            })
        );
    };
    const handleChangeQuantity = (productId, newQuantity, colorID) => {
        setCart((prevProducts) => {
            const lists = prevProducts.map((item) => {
                if (item.product.id === productId && item.color === colorID) {
                    if (newQuantity < 0) {
                        return {
                            ...item,
                            product: item.product,
                            quantity: 1,
                            totalPrice:
                                parseFloat(item.product.selling_price) *
                                parseFloat(1),
                        };
                    }
                    return {
                        ...item,
                        product: item.product,
                        quantity: newQuantity,
                        totalPrice:
                            parseFloat(item.product.selling_price) *
                            parseFloat(newQuantity),
                    };
                }
                return item;
            });
            const localUser = localStorage.getItem("user");
            const sessionUser = JSON.parse(sessionStorage.getItem("user"));
            sessionStorage.setItem("cart", JSON.stringify(lists));
            if (sessionUser && sessionUser.login === "OK") {
                sessionUser.user.cart = lists;
                sessionStorage.setItem("user", JSON.stringify(sessionUser));
            }
            if (localUser) {
                localStorage.setItem("user", sessionUser);
            }
            let action = { type: "replace", payload: lists };
            dispatch(action);
            return lists;
        });
    };
    const calculateTotalPrice = () => {
        return cart.reduce((total, product) => total + product.totalPrice, 0);
    };
    const handleRemoveItem = (productId, colorID) => {
        let userObject = JSON.parse(sessionStorage.getItem("user"));
        let lists = null;
        setCart((prevProducts) => {
            lists = prevProducts.filter(
                (item) =>
                    item.product.id !== productId || item.color !== colorID
            );
            const localUser = localStorage.getItem("user");
            const sessionUser = JSON.parse(sessionStorage.getItem("user"));
            sessionStorage.setItem("cart", JSON.stringify(lists));
            if (sessionUser && sessionUser.login === "OK") {
                sessionUser.user.cart = lists;
                sessionStorage.setItem("user", JSON.stringify(sessionUser));
            }
            if (localUser) {
                localStorage.setItem("user", sessionUser);
            }
            let action = { type: "replace", payload: lists };
            dispatch(action);
            return lists;
        });
        if(userObject){
            userObject.user.cart = lists;
            testAPI(UPDATE_USER, userObject.user);
            setWishlist([...wishlist]);
        }
    };

    return (
        <div>
            <table className="table-product">
                <thead>
                    <tr>
                        <th className="table-product__colum-product">
                            Product
                        </th>
                        <th className="table-product__colum-pice">Price</th>
                        <th className="table-product__colum-quantity">
                            Quantity
                        </th>
                        <th className="table-product__colum-subtotal">
                            Subtotal
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {cart &&
                        cart.map((item, index) => {
                            return (
                                <tr
                                    className="table-product__row-item"
                                    key={index}
                                >
                                    <td
                                        className="table-product__value-product"
                                        data-label="Product:"
                                    >
                                        <div className="table-product__img-item">
                                            <div className="table-product__img-detail">
                                                <img
                                                    src={item.product.images[0]}
                                                    alt="images product"
                                                />
                                            </div>
                                        </div>
                                        <div className="table-product__title-item">
                                            <Link>
                                                <h3>
                                                    {item.product.name}{" "}
                                                    {item.product.capacity}{" "}
                                                    {item.color}
                                                </h3>
                                            </Link>
                                        </div>
                                    </td>
                                    <td
                                        className="table-product__value-pice"
                                        data-label="Price:"
                                    >
                                        <p>
                                            <span>$</span>
                                            {item.product.selling_price}
                                        </p>
                                    </td>
                                    <td
                                        className="table-product__value-quantity"
                                        data-label="Quantity:"
                                    >
                                        <div className="table-product__info-quantity-detail">
                                            <div
                                                className="table-product__btn-dash-quantity"
                                                onClick={() =>
                                                    decreaseQuantity(
                                                        item.product.id,
                                                        item.color
                                                    )
                                                }
                                            ></div>
                                            <input
                                                type="number"
                                                name="quantity"
                                                min="0"
                                                step="1"
                                                onChange={(e) => {
                                                    const newValue =
                                                        e.target.value;
                                                    handleChangeQuantity(
                                                        item.product.id,
                                                        newValue,
                                                        item.color
                                                    );
                                                }}
                                                onBlur={(e) => {
                                                    const newValue =
                                                        e.target.value;
                                                    handleBlurChangeQuantity(
                                                        item.product.id,
                                                        newValue,
                                                        item.color
                                                    );
                                                }}
                                                value={item.quantity}
                                            />
                                            <div
                                                onClick={() =>
                                                    increaseQuantity(
                                                        item.product.id,
                                                        item.color
                                                    )
                                                }
                                                className="table-product__btn-plus-quantity"
                                            ></div>
                                        </div>
                                    </td>
                                    <td
                                        className="table-product__value-subtotal"
                                        data-label="Subtotal:"
                                    >
                                        <span>$</span>
                                        {item.totalPrice}
                                    </td>
                                    <td
                                        className="table-product__btn-remove"
                                        data-label=""
                                    >
                                        <span
                                            onClick={() =>
                                                handleRemoveItem(
                                                    item.product.id,
                                                    item.color
                                                )
                                            }
                                        >
                                            Remove
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            <div className="cart-totals__box-comp">
                <div className="cart-totals__name-comp cart-totals__name-comp--total">
                    <h4>Total</h4>
                    <div className="cart-totals__total-price">
                        <p>
                            <span>$</span>
                            {calculateTotalPrice()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableProduct;
