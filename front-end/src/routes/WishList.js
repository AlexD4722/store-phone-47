import { Link } from "react-router-dom";
import { useWishlistContext } from "../store";
import { useEffect } from "react";
import "../styles/wishList.scss";
import APIrequest, { UPDATE_USER } from "../API/callAPI";

function WishList() {
    const [wishlist, setWishlist] = useWishlistContext();
    useEffect(() => {
        function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
        topFunction();
    }, []);
    const removeItem = (idItem) => {
        let loginStatus = sessionStorage.getItem("user");
        let loginData = JSON.parse(loginStatus);
        if (loginData && loginData.login === "OK") {
            loginData.user.wishlist = wishlist.filter((product) => {
                return product.product.id !== idItem;
            });
            let data = loginData.user;
            APIrequest(UPDATE_USER, data).then((response) => {
                if (
                    response.result === "Success" &&
                    response.data.result === "Success"
                ) {
                    setWishlist((prev) => {
                        prev = wishlist.filter((product) => {
                            return product.product.id !== idItem;
                        });
                        return prev;
                    });
                    loginStatus = JSON.stringify(loginData);
                    sessionStorage.setItem("user", loginStatus);
                } else {
                    alert("Insert item to wishlist failed");
                }
            });
        }
    };
    return (
        <>
            {wishlist.length ? (
                <div className="wishlist-product">
                    <table className="wishlist-product__box-table">
                        <thead>
                            <tr>
                                <th className="wishlist-product__colum-product">
                                    Product
                                </th>
                                <th className="wishlist-product__colum-pice">
                                    Price
                                </th>
                                <th className="wishlist-product__colum-date">
                                    Date Added
                                </th>
                                <th className="wishlist-product__colum-btn-add">
                                    Add to card
                                </th>
                                <th className="wishlist-product__colum-pice"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {wishlist &&
                                wishlist.map((item, index) => {
                                    return (
                                        <tr
                                            className="wishlist-product__row-item"
                                            key={index}
                                        >
                                            <td
                                                className="wishlist-product__value-product"
                                                data-label="Product:"
                                            >
                                                <div className="wishlist-product__img-item">
                                                    <div className="wishlist-product__img-detail">
                                                        <img
                                                            src={
                                                                item.product
                                                                    .images[0]
                                                            }
                                                            alt="images product"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="wishlist-product__title-item">
                                                    <Link>
                                                        <h3>
                                                            {item.product.name}{" "}
                                                            {
                                                                item.product
                                                                    .capacity
                                                            }{" "}
                                                            {item.color}
                                                        </h3>
                                                    </Link>
                                                </div>
                                            </td>
                                            <td
                                                className="wishlist-product__value-pice"
                                                data-label="Price:"
                                            >
                                                <p>
                                                    <span className="wishlist-product__initial_price">
                                                        $
                                                        {
                                                            item.product
                                                                .initial_price
                                                        }
                                                    </span>
                                                    <span className="wishlist-product__selling_price">
                                                        $
                                                        {
                                                            item.product
                                                                .selling_price
                                                        }
                                                    </span>
                                                </p>
                                            </td>

                                            <td
                                                className="wishlist-product__value-time-add-wishlist"
                                                data-label="Subtotal:"
                                            >
                                                <span></span>
                                                {item.dateAdded}
                                            </td>
                                            <td>
                                                <div className="wishlist-product__box-btn">
                                                    <Link
                                                        to={`/product/${item.product.name}`}
                                                    >
                                                        <div className="wishlist-product__btn-add-cart">
                                                            <button type="button">
                                                                <span className="wishlist-product__btn-add-cart-content">
                                                                    show more
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </Link>
                                                    <div
                                                        className="wishlist-product__btn-remove-item"
                                                        onClick={() =>
                                                            removeItem(
                                                                item.product.id
                                                            )
                                                        }
                                                    >
                                                        <button type="button">
                                                            <span className="wishlist-product__btn-remove-icon">
                                                                <i class="bi bi-x-circle"></i>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="box-empty">
                    <div className="box-empty__wrapper-image">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                d="M460 504H52c-24 0-44-20-44-44V138.4h496v320.8c0 24.8-20 44.8-44 44.8z"
                                fill="#ffbd27"
                            ></path>
                            <path
                                d="M52 472c-6.4 0-12-5.6-12-12V170.4h432v288.8c0 6.4-5.6 12-12 12H52v.8z"
                                fill="#fff"
                            ></path>
                            <path
                                fill="#e1e6e9"
                                d="M18.4 8h462.4v130.4H18.4z"
                            ></path>
                            <g fill="#fff">
                                <path d="M504 138.4h-62.4v-64zM480.8 114.4V8l-39.2 66.4zM8 138.4h62.4v-64z"></path>
                                <path d="M18.4 8v120l52-53.6z"></path>
                            </g>
                            <g fill="#193651">
                                <path d="M512 138.4c0-1.6-.8-4-2.4-5.6l-20.8-21.6V8c0-4.8-4-8-8-8H18.4c-4 0-8 4-8 8v116.8l-8 8.8c-1.6.8-2.4 3.2-2.4 4.8v320.8C0 488.8 23.2 512 52 512h407.2c28.8 0 52-23.2 52-52V138.4h.8zm-60-65.6l20.8-36v57.6L452 72.8zm20.8 44.8v12.8h-23.2V93.6l23.2 24zM467.2 16l-32 53.6c-.8.8-.8 3.2-.8 4v56.8h-356v-56c0-1.6-.8-3.2-1.6-4.8L35.2 16h432zM26.4 31.2l32.8 42.4L26.4 108V31.2zm36 62.4v36.8h-36l36-36.8zM496 460c0 20-16 36-36 36H52c-20 0-36-16-36-36V146.4h480V460z"></path>
                                <path d="M372.8 429.6h16v16h-16zM428.8 429.6h16v16h-16zM67.2 429.6h16v16h-16zM123.2 429.6h16v16h-16zM140.8 264.8c5.6 89.6 55.2 160 115.2 160s108.8-70.4 115.2-160c5.6-2.4 9.6-8.8 9.6-15.2 0-9.6-8-17.6-17.6-17.6s-17.6 8-17.6 17.6c0 6.4 3.2 12 8.8 15.2-5.6 81.6-48 144.8-99.2 144.8s-93.6-63.2-99.2-144.8c4.8-3.2 8.8-8.8 8.8-15.2 0-9.6-8-17.6-17.6-17.6s-17.6 8-17.6 17.6c1.6 6.4 5.6 12 11.2 15.2z"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="box-empty__context">
                        <h2>Your wishlist is currently empty.</h2>
                    </div>
                    <Link to="/">
                        <div className="box-empty__box-btn-footer">
                            <button
                                type="button"
                                className="box-empty__btn-checkout"
                            >
                                <span className="box-empty__btn-checkout-content">
                                    Return to shop
                                </span>
                            </button>
                        </div>
                    </Link>
                </div>
            )}
        </>
    );
}

export default WishList;
