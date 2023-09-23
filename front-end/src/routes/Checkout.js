import { useEffect, useState } from "react";
import { useCartContext, useWishlistContext } from "../store";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import '../styles/checkout.scss';
import APIrequest, { GET_GEST, GET_RECEIPT, INSERT_GUEST, INSERT_RECEIPT, INSERT_RECEIPT_LINE, UPDATE_USER, VALIDATE_NAME_USER, testAPI } from "../API/callAPI";
function CheckOut() {
    const [cart, dispatchCart] = useCartContext();
    const [wishlist, setWishlist] = useWishlistContext();
    const [formData, setFormData] = useState({
        userName: '',
        phone: '',
        address: ''
    });
    const [submit, setSubmit] = useState(false)
    const [errors, setErrors] = useState({
        userName: "",
        phone: "",
        address: "",
    });
    const createCodeId = () => {
        const number = '0123456789';
        const string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const charactersRandom = number + string;

        let codeRandom = '';

        for (let i = 0; i < 10; i++) {
            const indexRandom = Math.floor(Math.random() * charactersRandom.length);
            codeRandom += charactersRandom[indexRandom];
        }

        return codeRandom;
    };
    const handleChange = event => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const validateUserName = () => {
        if (!formData.userName) {
            setErrors((prev) => {
                return {
                    ...prev,
                    userName: 'Username is required',
                }
            });
        } else {
            setErrors((prev) => {
                return {
                    ...prev,
                    userName: '',
                }
            });
        }
        // APIrequest(VALIDATE_NAME_USER, formData).then((obj) => {
        //     if (obj.data.error) {
        //         setErrors((prev) => {
        //             return {
        //                 ...prev,
        //                 userName: 'Username existed',
        //             }
        //         });
        //     }
        // })
    }

    const validatePhone = () => {
        let phoneNumberRegex = /^0\d{9}$/;
        if (!formData.phone) {
            setErrors((prev) => {
                return {
                    ...prev,
                    phone: 'Phone is required',
                }
            });
        } else if (!(phoneNumberRegex).test(formData.phone)) {
            setErrors((prev) => {
                return {
                    ...prev,
                    phone: 'Invalid phone format',
                }
            });
        } else {
            setErrors((prev) => {
                return {
                    ...prev,
                    phone: '',
                }
            });
        }
    }
    const validateEmail = () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!formData.email) {
            setErrors((prev) => {
                return {
                    ...prev,
                    email: 'Email is required',
                }
            });
        } else if (!(emailRegex).test(formData.email)) {
            setErrors((prev) => {
                return {
                    ...prev,
                    email: 'Invalid email format',
                }
            });
        } else {
            setErrors((prev) => {
                return {
                    ...prev,
                    email: '',
                }
            });
        }
    }

    const validateAddress = () => {
        if (!formData.address) {
            setErrors((prev) => {
                return {
                    ...prev,
                    address: 'Address is required'
                }
            });
        } else {
            setErrors((prev) => {
                return {
                    ...prev,
                    address: ''
                }
            });
        }
    }




    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        // Validate username

        if (!formData.userName) {
            newErrors.userName = 'Username is required';
            isValid = false;
        }
        // if (!formData.email) {
        //     newErrors.email = 'Email is required';
        //     isValid = false;
        // }

        // Validate phone
        let phoneNumberRegex = /^0\d{9}$/;
        if (!formData.phone) {
            newErrors.phone = 'Phone is required';
            isValid = false;
        } else if (!(phoneNumberRegex).test(formData.phone)) {
            newErrors.phone = 'Invalid phone format';
            isValid = false;
        }

        // Validate password
        if (!formData.address) {
            newErrors.address = 'Address is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        if (validateForm()) {
            setSubmit(true);
            const dataCheckout = {
                name: formData.userName,
                phone: formData.phone,
                address: formData.address,
            }
            let buyerObject = JSON.parse(sessionStorage.getItem("buyer"));
            let userObject = JSON.parse(sessionStorage.getItem("user"));
            // let idReceipt = JSON.parse(sessionStorage.getItem("idReceipt"));
            // let localCartUsing = true;
            
            // if (userObject) {
            //     if (userObject.login === "OK") {
            //         sessionStorage.setItem("user", JSON.stringify(dataCheckout));
            //     }
            // }
            sessionStorage.setItem("buyer", JSON.stringify(dataCheckout));
            if (buyerObject) {
                sessionStorage.setItem("buyer", JSON.stringify(dataCheckout));
            }

            navigate('/OrderReceived');
        } else {
            console.log('Form is invalid');
            setSubmit(false);
        }
    };
    useEffect(() => {
        function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
        topFunction();
    }, []);
    console.log("+++++++++--------", cart);

    return (
        <>
            {
                cart.length ?
                    <div className="xo-container">
                        <div className="checkout">
                            <div className="checkout__wrapper-form">
                                <form className="checkout__form-delivery-info" onSubmit={handleSubmit}>
                                    <div className="checkout__title-form">
                                        <h2>delivery information</h2>
                                    </div>
                                    <div className="checkout__main">
                                        <div className="checkout__fill-box">
                                            <label>
                                                <div className="checkout__title-fill">
                                                    <h3>Enter your name</h3>
                                                </div>
                                                <input
                                                    onChange={handleChange}
                                                    onBlur={validateUserName}
                                                    type="text"
                                                    name="userName"
                                                    value={formData.userName}
                                                    className="checkout__input-fill" />
                                            </label>
                                            {errors.userName && <p className="checkout__messenger-error">{errors.userName}</p>}
                                        </div>
                                        {/* <div className="checkout__fill-box">
                                            <label>
                                                <div className="checkout__title-fill">
                                                    <h3>Email</h3>
                                                </div>
                                                <input
                                                    onChange={handleChange}
                                                    onBlur={validateEmail}
                                                    name="email"
                                                    value={formData.email}
                                                    type="email" className="checkout__input-fill" />
                                            </label>
                                            {errors.email && <span className="checkout__messenger-error">{errors.email}</span>}
                                        </div> */}
                                        <div className="checkout__fill-box">
                                            <label>
                                                <div className="checkout__title-fill">
                                                    <h3>phone number</h3>
                                                </div>
                                                <input
                                                    onChange={handleChange}
                                                    onBlur={validatePhone}
                                                    name="phone"
                                                    value={formData.phone}
                                                    type="text" className="checkout__input-fill" />
                                            </label>
                                            {errors.phone && <span className="checkout__messenger-error">{errors.phone}</span>}
                                        </div>
                                        <div className="checkout__fill-box">
                                            <label>
                                                <div className="checkout__title-fill">
                                                    <h3>delivery address</h3>
                                                </div>
                                                <textarea
                                                    onChange={handleChange}
                                                    onBlur={validateAddress}
                                                    name="address"
                                                    value={formData.address}
                                                    className="checkout__input-fill checkout__input-fill--area"></textarea>
                                            </label>
                                            {errors.address && <span className="checkout__messenger-error">{errors.address}</span>}
                                        </div>
                                    </div>
                                    {
                                        <div className="checkout__box-btn-footer">
                                            <button type="submit" className="checkout__btn-checkout">
                                                <span className="checkout__btn-checkout-content">
                                                    continue
                                                </span>
                                            </button>
                                        </div>
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                    :
                    <h1>Errol 404</h1>
            }
        </>
    );
}

export default CheckOut;
