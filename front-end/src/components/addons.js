import "../styles/logo.scss";
import "../styles/form-search.scss";
import "../styles/color.scss";
import "../styles/addons.scss";
import { Link } from "react-router-dom";
import {
    useAccountContext,
    useCartContext,
    useWishlistContext,
} from "../store";
import { useEffect, useState } from "react";

function Addons() {
    const [account, setAccount] = useAccountContext();
    const [cart, dispatchCart] = useCartContext();
    const [wishlist, setWishlist] = useWishlistContext();
    const [link, setLink] = useState("signin");

    useEffect(() => {
        const localUser = localStorage.getItem("user");
        if (localUser) {
            sessionStorage.setItem("user", localUser);
        }
        const sessionCart = JSON.parse(sessionStorage.getItem("cart"));
        const sessionUser = JSON.parse(sessionStorage.getItem("user"));
        if (sessionUser && sessionUser.login === "OK") {
            setAccount(sessionUser.user);
            const action = {
                type: "replace",
                payload: sessionUser.user.cart,
            };
            dispatchCart(action);
        } else if (sessionCart) {
            const action = {
                type: "replace",
                payload: sessionCart,
            };
            dispatchCart(action);
        }
    }, [wishlist]);

    useEffect(() => {
        const sessionUser = JSON.parse(sessionStorage.getItem("user"));
        if (sessionUser && sessionUser.login === "OK") {
            setLink("account");
        } else {
            setLink("signin");
        }
    }, [account]);

    useEffect(() => {
        const sessionUser = JSON.parse(sessionStorage.getItem("user"));
        if (sessionUser) {
            setWishlist(sessionUser.user.wishlist);
        }
    }, []);

    return (
        <div className="header-addons">
            <Link
                to={link}
                className="header-addons__btn header-addons__btn--login"
            >
                <div className="header-addons__icon">
                    <i className="bi bi-person"></i>
                </div>

                <div className="header-addons__text">
                    <div className="header-addons__sub-text">
                        {account.username ? "Hello" : "Sign In"}
                    </div>
                    <div className="header-addons__primary-text">
                        {account.username || "Account"}
                    </div>
                </div>
            </Link>
            <Link to="wish-list" className="header-addons__btn">
                <div className="header-addons__icon">
                    <i className="bi bi-heart"></i>
                    <span className="header-addons__icon-quantity">
                        <span className="header-addons__icon-quantity-detail header-addons__icon-quantity-detail--heart">
                            {wishlist && wishlist.length}
                        </span>
                    </span>
                </div>
            </Link>
            <Link
                to="cart"
                className="header-addons__btn header-addons__btn--cart"
            >
                <div className="header-addons__icon">
                    <i className="bi bi-cart"></i>
                    <span className="header-addons__icon-quantity">
                        <span className="header-addons__icon-quantity-detail header-addons__icon-quantity-detail--cart">
                            {(cart &&
                                cart.reduce((total, rLine) => {
                                    return total + rLine.quantity;
                                }, 0)) ||
                                0}
                        </span>
                    </span>
                </div>
                <div className="header-addons__text">
                    <div className="header-addons__sub-text">total</div>
                    <div className="header-addons__primary-text">
                        $
                        {(cart &&
                            cart.reduce((total, rLine) => {
                                return (
                                    total +
                                    rLine.product.selling_price * rLine.quantity
                                );
                            }, 0)) ||
                            0}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Addons;
