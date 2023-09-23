import { Button, Container, Row, Col, Badge, Card } from "react-bootstrap";
import {
    useAccountContext,
    useCartContext,
    useWishlistContext,
} from "../store";
import { useCallback, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../styles/form-search.scss';
import APIrequest, { GET_RECEIPTS_BY_CID, testAPI } from "../API/callAPI";
import '../styles/table-product.scss';

function SearchReceipt() {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState([]);
    const [dataReceipt, setDataReceipt] = useState([]);
    const [dataOrders, setOrders] = useState([]);
    const handleChangeKey = (event) => {
        console.log(event.target.value, "--------------------");
        setKeyword(event.target.value.trim());
    }
    const handleButton = () => {
        const dataRequest = {
            idRecipient: keyword
        }
        APIrequest(GET_RECEIPTS_BY_CID, dataRequest).then((obj) => {
            const items = []
            if (obj.result === "Success" && obj.data.buyerList[0]) {
                setDataReceipt({
                    id: obj.data.buyerList[0].id,
                    date: obj.data.receipt[0].date,
                    name: obj.data.buyerList[0].name,
                    phone: obj.data.buyerList[0].phone,
                    address: obj.data.buyerList[0].address,
                    status: obj.data.receipt[0].status,
                })
                obj.data.receiptLine.map((item) => {
                    items.push({

                    })
                })
            }
        });
    }
    const handleShowDetail = (id, event)=>{
        navigate(`/orderDetail/${id}`)
    }
    console.log(dataReceipt, "dataReceipt------------------------");
    return (
        <>
            <div className="xo-container">
                <div className="order-received">
                    <form className="form-search">
                        <div className="form-search__wrapper-search">
                            <div className="form-search__box-input"
                            >
                                <input
                                    onChange={(event) => handleChangeKey(event)}
                                    value={keyword}
                                    type="text"
                                    placeholder="Enter the order recipient's id..."
                                />
                            </div>

                            <div className="form-search__button">
                                <button
                                    className="form-search__button-detail form-search__button-detail--second"
                                    type="button"
                                    onClick={handleButton}
                                >
                                    <span>search</span>
                                </button>
                            </div>
                        </div>
                    </form>
                    {
                        Object.keys(dataReceipt).length ?
                            <div>
                                <div className="order-received__order-detail">
                                    <h3 className="order-received__title-order-detail">
                                        ORDER DETAILS
                                    </h3>
                                </div>
                                <table className="table-product">
                                    <thead>
                                        <tr>
                                            <th className="table-product__colum">
                                                Code Recipient
                                            </th>
                                            <th className="table-product__colum">
                                                Name
                                            </th>
                                            <th className="table-product__colum">
                                                Phone
                                            </th>
                                            <th className="table-product__colum">
                                                Address
                                            </th>
                                            <th className="table-product__colum">
                                                Date Time
                                            </th>
                                            <th className="table-product__colum">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            className="table-product__row-item"
                                            onClick={(event)=> handleShowDetail(keyword, event)}
                                        >
                                            <td
                                                className="table-product__value-item table-product__value-item--id-recipient"
                                                data-label="Id Recipient:"
                                            >
                                                <p>{dataReceipt.id}</p>
                                            </td>
                                            <td
                                                className="table-product__value-item"
                                                data-label="Name:"
                                            >
                                                <p>{dataReceipt.name}</p>
                                            </td>
                                            <td
                                                className="table-product__value-item"
                                                data-label="Phone:"
                                            >
                                                <p>{dataReceipt.phone}</p>
                                            </td>
                                            <td
                                                className="table-product__value-item"
                                                data-label="Address:"
                                            >
                                                <p>{dataReceipt.address}</p>
                                            </td>
                                            <td
                                                className="table-product__value-item"
                                                data-label="Date Time:"
                                            >
                                                <p>{dataReceipt.date}</p>
                                            </td>
                                            <td
                                                className="table-product__value-item"
                                                data-label="Status:"
                                            >
                                                <p></p>
                                                {
                                                    dataReceipt.status == 0 ?
                                                        <p className="table-product__value-status-content table-product__value-status-content--pending">Pending</p>
                                                        : ""
                                                }
                                                {
                                                    dataReceipt.status == 1 ?
                                                        <p className="table-product__value-status-content table-product__value-status-content--being-transported">being transported</p>
                                                        : ""
                                                }
                                                {
                                                    dataReceipt.status == -1 ?
                                                        <p className="table-product__value-status-content table-product__value-status-content--canceled">canceled</p>
                                                        : ""
                                                }
                                                {
                                                    dataReceipt.status == 2 ?
                                                        <p className="table-product__value-status-content table-product__value-status-content--complete">complete</p>
                                                        : ""
                                                }
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            :
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
                                    <h2>No items exist!</h2>
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
                    }

                </div>
            </div>
        </>
    );
}

export default SearchReceipt;
