import { useEffect, useState } from "react";
import { useCartContext, useWishlistContext } from "../store/hooks";
import { Link, useNavigate } from "react-router-dom";
import "../styles/cart-page.scss";
import "../styles/box-empty.scss";
import "../styles/order-received.scss";
import APIrequest, { GET_BUYER, GET_ORDER_RECEIVED, GET_RECEIPT, GET_RECEIPT_BY_ID, GET_USER_Receipt, INSERT_ORDER_RECEIPT, UPDATE_USER, testAPI } from "../API/callAPI";

function OrderReceived() {
    const navigate = useNavigate();
    const [cart, dispatchCart] = useCartContext();
    const [wishlist, setWishlist] = useWishlistContext();
    const [dataUser, setDataUser] = useState([]);
    const [idRecipient, setIdRecipient] = useState();
    const [listItem, setListItem] = useState();
    const [messenger, setMessenger] = useState("");
    const [receipt, setReceipt] = useState();
    const [totalPrice, setTotalPrice] = useState();
    let idReceiptSession = JSON.parse(sessionStorage.getItem("idReceipt"))
    const [reloadCount, setReloadCount] = useState(0);
    const createCodeId = () => {
        const number = "0123456789";
        const string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const charactersRandom = number + string;

        let codeRandom = "";

        for (let i = 0; i < 10; i++) {
            const indexRandom = Math.floor(
                Math.random() * charactersRandom.length
            );
            codeRandom += charactersRandom[indexRandom];
        }

        return codeRandom;
    };
    useEffect(() => {
        const hasReloaded = localStorage.getItem('hasReloaded');

        if (!hasReloaded) {
            localStorage.setItem('hasReloaded', 'true');
            window.location.reload();
        }
    }, []);
    useEffect(() => {
        const hasReloaded = localStorage.getItem('hasReloaded');

        if (!hasReloaded) {
            localStorage.setItem('hasReloaded', 'true');
            window.location.reload();
        }
    }, []);
    useEffect(() => {
        const userObject = JSON.parse(sessionStorage.getItem("user"));
        const guestObject = JSON.parse(sessionStorage.getItem("guest"));
        let buyerObject = JSON.parse(sessionStorage.getItem("buyer"));
        // let getId = null
        // if (userObject) {
        //     if (userObject.login === "OK") {
        //         setDataUser(userObject.user);
        //     }
        // }
        // if (guestObject) {
        //     setDataUser(guestObject);
        // }
        setDataUser(buyerObject);
        let newData = {}
        if(cart){
            setTotalPrice(cart.reduce((total, product) => total + product.totalPrice, 0));
        }
    }, [cart]);
    const handelAccept = () => {
        const listIdReceipt = [];
        APIrequest(GET_BUYER, {}).then((obj) => {
            if(obj.data.productArray){
                obj.data.productArray.map((item) => {
                    listIdReceipt.push(parseInt(item.id));
                });
            }
        });
        // const sessionCart = JSON.parse(sessionStorage.getItem("cart"));
        let codeRandom = createCodeId();
        while (listIdReceipt.includes(codeRandom)) {
            codeRandom = createCodeId();
        }
        setIdRecipient(codeRandom);
        const userObject = JSON.parse(sessionStorage.getItem("user"));
        const guestObject = JSON.parse(sessionStorage.getItem("guest"));
        if (userObject) {
            if (userObject.login === "OK") {
                const dataRequest = {
                    buyer:{
                        id: codeRandom,
                        id_account: userObject.user.id,
                        name: dataUser.name,
                        phone: dataUser.phone,
                        address: dataUser.address
                    },
                    receipt: {
                        id_buyer: codeRandom,
                        status: "0"
                    },
                    receipt_line: {
                        items: cart
                    }
                }
                if(codeRandom){
                    APIrequest(INSERT_ORDER_RECEIPT, dataRequest).then((response) => {
                        if (response.data.result === "Success") {
                            setMessenger("order-received__success");
                        }
                    })
                };
            }
        }
        else{
            const dataRequest = {
                buyer:{
                    id: codeRandom,
                    id_account: 5,
                    name: dataUser.name,
                    phone: dataUser.phone,
                    address: dataUser.address
                },
                receipt: {
                    id_buyer: codeRandom,
                    status: "0"
                },
                receipt_line: {
                    items: cart
                }
            }
            if(codeRandom){
                APIrequest(INSERT_ORDER_RECEIPT, dataRequest).then((response) => {
                    if (response.data.result === "Success") {
                        setMessenger("order-received__success");
                    }
                })
            };
        }
        

    }
    const HandleMoveLinkSearch = ()=>{
        setMessenger("");
        const userObject = JSON.parse(sessionStorage.getItem("user"));
        // sessionStorage.setItem("user", JSON.stringify(userObject));
        if(userObject){
            userObject.user.cart = [];
            console.log("userObject----",userObject);
            sessionStorage.setItem("user", JSON.stringify(userObject));
            userObject.user.cart = [];
            APIrequest(UPDATE_USER, userObject.user);
            sessionStorage.setItem("cart", JSON.stringify([]));
            const action = {
                type: "replace",
                payload:  sessionStorage.user.cart,
            };
            dispatchCart(action);
            setWishlist([...wishlist]);
        }
        sessionStorage.setItem("cart", JSON.stringify([]));
        const action = {
            type: "replace",
            payload:"",
        };
        dispatchCart(action);
        setWishlist([...wishlist]);
        sessionStorage.removeItem('buyer');
        navigate('/searchReceipt');
    }
    // useEffect(()=>{
    //     const listIdReceipt = [];
    //     APIrequest(GET_RECEIPT, "").then((obj) => {
    //         obj.data.productArray.map((item) => {
    //             listIdReceipt.push(parseInt(item.id));
    //         });
    //     });
    //     // const sessionCart = JSON.parse(sessionStorage.getItem("cart"));
    //     let codeRandom = createCodeId();
    //     while (listIdReceipt.includes(codeRandom)) {
    //         codeRandom = createCodeId();
    //     }
    //     const dataRequest = {
    //         buyer:{
    //             id_account: "",
    //             name: "",
    //             phone: "",
    //             address: ""
    //         },
    //         receipt: {
    //             status: 1
    //         },
    //         receipt_line: {
    //             items: cart
    //         }
    //     }
    // })


    // console.log(cart,"cart++++++==============");
    // // console.log("datauser++++", dataUser);
    // // console.log(receipt, "receipt==============++++++++++++++++++++++++++");
    // console.log("datauser____++++", dataUser);
    return (
        <>
            {dataUser ? (
                <div className="xo-container">
                    <div className="order-received">
                        <h2 className="order-received__text-success">
                            Thank so much! Your order details.
                        </h2>
                        <ul className="order-received__overview">
                        <li className="order-received__overview">
                            <p>
                                Order Recipient Name:<strong>{dataUser.name}</strong>
                            </p>
                        </li>
                        <li className="order-received__overview">
                            <p>
                                Phone:<strong>{dataUser.phone}</strong>
                            </p>
                        </li>
                        <li className="order-received__overview">
                            <p>
                                Address:<strong>{dataUser.address}</strong>
                            </p>
                        </li>
                        <li className="order-received__overview">
                            <p>
                                Total:<strong>${totalPrice}</strong>
                            </p>
                        </li>
                        </ul>
                        <div className="order-received__order-detail">
                        <h3 className="order-received__title-order-detail">
                            ORDER DETAILS
                        </h3>
                        </div>
                        <table className="table-product">
                        <thead>
                            <tr>
                                <th className="table-product__colum-product">
                                    Product
                                </th>
                                <th className="table-product__colum-pice">
                                    Price
                                </th>
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
                                                            src={
                                                                item.product.images[0]
                                                            }
                                                            alt="images product"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="table-product__title-item">
                                                    <Link to="/">
                                                        <h3>
                                                            {item.product.name}{" "}
                                                            {
                                                                item.product.capacity
                                                            }{" "}
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
                                                    <div> {item.quantity}</div>
                                                </div>
                                            </td>
                                            <td
                                                className="table-product__value-subtotal"
                                                data-label="Subtotal:"
                                            >
                                                <span>$</span>
                                                {item.totalPrice}
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                        </table>
                        <div className="order-received__box-btn-footer">
                            <button
                                type="button"
                                className="order-received__btn"
                            >
                                <span className="order-received__btn-content order-received__btn-content--cancel">
                                Cancel
                                </span>
                            </button>
                            <button
                                type="button"
                                className="order-received__btn"
                                onClick={handelAccept}
                            >
                                <span className="order-received__btn-content">
                                accept
                                </span>
                            </button>
                        </div>
                        <div className={`order-received__box-messenger ${messenger}`}>
                            <div className="order-received__messenger-content">
                                <p>Please wait to be contacted to confirm your order.</p>
                                <p>Search code of consignee name: {idRecipient}</p>
                                <p>Thank you!</p>
                                
                                <div onClick={()=> HandleMoveLinkSearch()} className="order-received__link-search-order">
                                    <p> Search your order</p>
                                </div>
                            </div>
                        </div>
                        <div className={`order-received__layout ${messenger}`}>
                            
                        </div>
                    </div>
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
                        <h2>ERROL</h2>
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

export default OrderReceived;













// import { useEffect, useState } from "react";
// import { useCartContext } from "../store/hooks";
// import { Link } from "react-router-dom";
// import "../styles/cart-page.scss";
// import "../styles/box-empty.scss";
// import "../styles/order-received.scss";
// import APIrequest, { GET_ORDER_RECEIVED, GET_RECEIPT_BY_ID, GET_USER_Receipt, testAPI } from "../API/callAPI";

// function OrderReceived() {
//     const cart = useCartContext()[0];
//     const [dataUser, setDataUser] = useState([]);
//     const [idUser, setIdUser] = useState();
//     const [listItem, setListItem] = useState();
//     const [receipt, setReceipt] = useState();
//     const [totalPrice, setTotalPrice] = useState();
//     let idReceiptSession = JSON.parse(sessionStorage.getItem("idReceipt"))
//     const [reloadCount, setReloadCount] = useState(0);
//     useEffect(() => {
//         const hasReloaded = localStorage.getItem('hasReloaded');

//         if (!hasReloaded) {
//             localStorage.setItem('hasReloaded', 'true');
//             window.location.reload();
//         }
//     }, []);
//     useEffect(() => {
//         const hasReloaded = localStorage.getItem('hasReloaded');

//         if (!hasReloaded) {
//             localStorage.setItem('hasReloaded', 'true');
//             window.location.reload();
//         }
//     }, []);
//     useEffect(() => {
// console.log(idReceiptSession, "-----------------------");
//         const userObject = JSON.parse(sessionStorage.getItem("user"));
//         const guestObject = JSON.parse(sessionStorage.getItem("guest"));
// let localCartUsing = true;
//         let getId = null
//         if (userObject) {
// localCartUsing = false;
//             if (userObject.login === "OK") {
//                 if (guestObject) {
//                     sessionStorage.removeItem("guest");
//                 }
//                 const newData = {
//                     userId: userObject.user.id,
//                 };
//                 getId = newData;
//                 setIdUser(newData);
//                 APIrequest(GET_USER_Receipt, newData).then((obj) => {
//                     setDataUser(obj.data.userArray);
//                 });
//             }
//         }
        
//         if (guestObject && idReceiptSession) {
//             const newData = {
//                 userId: guestObject.id,
//             };
//             setIdUser(newData);
//             getId = newData;
//             APIrequest(GET_USER_Receipt, newData).then((obj) => {
//                 // console.log(idReceiptSession,"idReceiptSession-----");
//                 setDataUser(obj.data.userArray);
//                 // console.log(obj.data.userArray,"obj.data.userArray-----");
//             });
//         }
// // if (localCartUsing) {
//         //     const newData = {
//             //         userId: sessionCart.id,
//             //     };
//             //     setIdUser(newData);
//         //     APIrequest(GET_USER_Receipt, newData).then((obj) => {
//             //         setDataUser(obj.data.userArray);
//             //     });
//             // }
//         let newData = {}
//         if (getId) {
//             newData = {
//                 idReceipt: idReceiptSession,
//                 customer_id: getId
//             }
//         }
//         // console.log(newData,"++++++++++++++++++++++++++++++++++++++");
        
//         if (idReceiptSession && Object.keys(newData).length) {
//             console.log(newData, "newData++++++++++");
//             APIrequest(GET_ORDER_RECEIVED, newData)
//             .then((obj) => {
//                     if (obj.data.array_item && obj.data.array_item.length) {
//                         setListItem(obj.data.array_item);
//                         console.log(obj.data.array_item, "+++");
//                         setTotalPrice(obj.data.array_item.reduce((total, product) => total + product.total, 0));
//                         // setListItem(obj.data.APIrequest)
//                     }
//                 });
//                 APIrequest(GET_RECEIPT_BY_ID, newData).then((obj) => {
//                     setReceipt(obj.data.receiptArray[0])
//                     // setListItem(obj.data.APIrequest)
//             });
//         }
        
//     }, [cart, idReceiptSession]);
//     // console.log("datauser++++", dataUser);
//     // console.log(receipt, "receipt==============++++++++++++++++++++++++++");
//     console.log("datauser____++++", dataUser)
//     return (
//         <>
//             {dataUser && dataUser[0] ? (
//                 <div className="xo-container">
//                     <div className="order-received">
//                         <h2 className="order-received__text-success">
//                             Thank you. Your order has been received.
//                         </h2>
//                     </div>
//                     <ul className="order-received__overview">
//                         <li className="order-received__overview">
//                             <p>
//                                 Order Id:<strong>{receipt && receipt.id}</strong>
//                             </p>
//                         </li>

//                         <li className="order-received__overview">
//                             <p>
//                                 Date:<strong>{receipt && receipt.date}</strong>
//                             </p>
//                         </li>

//                         <li className="order-received__overview">
//                             <p>
//                                 Email:<strong>{dataUser && dataUser[0].email}</strong>
//                             </p>
//                         </li>
//                         <li className="order-received__overview">
//                             <p>
//                                 Phone:<strong>{dataUser && dataUser[0].phone}</strong>
//                             </p>
//                         </li>
//                         <li className="order-received__overview">
//                             <p>
//                                 Total:<strong>${totalPrice}</strong>
//                             </p>
//                         </li>
//                     </ul>
//                     <div className="order-received__order-detail">
//                         <h3 className="order-received__title-order-detail">
//                             ORDER DETAILS
//                         </h3>
//                     </div>
//                     <table className="table-product">
//                         <thead>
//                             <tr>
//                                 <th className="table-product__colum-product">
//                                     Product
//                                 </th>
//                                 <th className="table-product__colum-pice">
//                                     Price
//                                 </th>
//                                 <th className="table-product__colum-quantity">
//                                     Quantity
//                                 </th>
//                                 <th className="table-product__colum-subtotal">
//                                     Subtotal
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {listItem &&
//                                 listItem.map((item, index) => {
//                                     return (
//                                         <tr
//                                             className="table-product__row-item"
//                                             key={index}
//                                         >
//                                             <td
//                                                 className="table-product__value-product"
//                                                 data-label="Product:"
//                                             >
//                                                 <div className="table-product__img-item">
//                                                     <div className="table-product__img-detail">
//                                                         <img
//                                                             src={
//                                                                 item.phone.images[0]
//                                                             }
//                                                             alt="images product"
//                                                         />
//                                                     </div>
//                                                 </div>
//                                                 <div className="table-product__title-item">
//                                                     <Link>
//                                                         <h3>
//                                                             {item.phone.name}{" "}
//                                                             {
//                                                                 item.phone.capacity
//                                                             }{" "}
//                                                             {item.color}
//                                                         </h3>
//                                                     </Link>
//                                                 </div>
//                                             </td>
//                                             <td
//                                                 className="table-product__value-pice"
//                                                 data-label="Price:"
//                                             >
//                                                 <p>
//                                                     <span>$</span>
//                                                     {item.phone.selling_price}
//                                                 </p>
//                                             </td>
//                                             <td
//                                                 className="table-product__value-quantity"
//                                                 data-label="Quantity:"
//                                             >
//                                                 <div className="table-product__info-quantity-detail">
//                                                     <div> {item.quantity}</div>
//                                                 </div>
//                                             </td>
//                                             <td
//                                                 className="table-product__value-subtotal"
//                                                 data-label="Subtotal:"
//                                             >
//                                                 <span>$</span>
//                                                 {item.total}
//                                             </td>
//                                         </tr>
//                                     );
//                                 })}
//                         </tbody>
//                     </table>
//                 </div>
//             ) : (
//                 " NO DATA USER"
//             )}
//         </>
//     );
// }

// export default OrderReceived;
