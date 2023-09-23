import { Button, Container, Row, Col, Badge, Card } from "react-bootstrap";
import {
    useAccountContext,
    useCartContext,
    useWishlistContext,
} from "../store";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../styles/form-search.scss';
import APIrequest, { GET_RECEIPTS_BY_CID, GET_RECEIPTS_BY_ID_USER, testAPI } from "../API/callAPI";
import '../styles/table-product.scss';

function Orders() {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState([]);
    const [dataReceipt, setDataReceipt] = useState([]);
    const [dataOrders, setOrders] = useState([]);
    const handleChangeKey = (event) => {
        console.log(event.target.value, "--------------------");
        setKeyword(event.target.value);
    }
    useEffect(() => {
        const userObject = JSON.parse(sessionStorage.getItem("user"));
        const dataRequest = {
            idUser: userObject.user.id
        }
        APIrequest(GET_RECEIPTS_BY_ID_USER, dataRequest).then((obj) => {
            let items = []
            obj.data.listObj.forEach((item) => {
                items.push({
                    id: item.buyer.id,
                    date: item.receipt[0].date,
                    name: item.buyer.name,
                    phone: item.buyer.phone,
                    address: item.buyer.address,
                    status: item.receipt[0].status,
                })
            })
            setDataReceipt(items)
        });
        function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
        topFunction();
        // if(items.length){
        //     console.log(items,"=================================================");
        // }
        // console.log(items,"=================================================");
    }, [])
    if (dataReceipt) {
        console.log(dataReceipt, "++++++++++++++++++++=================================================");
    }
    const handleShowDetail = (id, event)=>{
        navigate(`/orderDetail/${id}`)
    }
    return (
        <>
            <div className="xo-container">
                <div className="order-received">
                    <div className="order-received__order-detail">
                        <h3 className="order-received__title-order-detail">
                            LIST ORDER
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
                            {
                                dataReceipt.length && dataReceipt.map((icon) => {
                                    return (
                                        <tr
                                            className="table-product__row-item"
                                            onClick={(event)=> handleShowDetail(icon.id, event)}
                                        >
                                            <td
                                                className="table-product__value-item table-product__value-item--id-recipient"
                                                data-label="Id Recipient:"
                                            >
                                                <p>{icon && icon.id}</p>
                                            </td>
                                            <td
                                                className="table-product__value-item"
                                                data-label="Name:"
                                            >
                                                <p>{icon && icon.name}</p>
                                            </td>
                                            <td
                                                className="table-product__value-item"
                                                data-label="Phone:"
                                            >
                                                <p>{icon && icon.phone}</p>
                                            </td>
                                            <td
                                                className="table-product__value-item"
                                                data-label="Address:"
                                            >
                                                <p>{icon && icon.address}</p>
                                            </td>
                                            <td
                                                className="table-product__value-item"
                                                data-label="Date Time:"
                                            >
                                                <p>{icon && icon.date}</p>
                                            </td>
                                            <td
                                                className="table-product__value-item"
                                                data-label="Status:"
                                            >
                                                <p></p>
                                                {
                                                    icon && icon.status == 0 ?
                                                        <p className="table-product__value-status-content table-product__value-status-content--pending">Pending</p>
                                                        : ""
                                                }
                                                {
                                                    icon && icon.status == 1 ?
                                                        <p className="table-product__value-status-content table-product__value-status-content--being-transported">Being transported</p>
                                                        : ""
                                                }
                                                {
                                                    icon && icon.status == -1 ?
                                                        <p className="table-product__value-status-content table-product__value-status-content--canceled">Canceled</p>
                                                        : ""
                                                }
                                                {
                                                    icon && icon.status == 2 ?
                                                        <p className="table-product__value-status-content table-product__value-status-content--complete">Completed</p>
                                                        : ""
                                                }
                                            </td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Orders;
