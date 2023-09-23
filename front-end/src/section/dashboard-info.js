import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    Accordion,
    Tab,
    Table,
} from "react-bootstrap";
import APIrequest, { GET_LASTEST_ORDERS } from "../API/callAPI.js";

function DashboardInfoTab() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        APIrequest(GET_LASTEST_ORDERS, {}).then((response) => {
            if (response.result === "Success") {
                if (
                    response.result === "Success" &&
                    response.data.receipt_array.length > 0
                ) {
                    setOrders(response.data.receipt_array);
                }
            }
        });
    }, []);

    return (
        <Tab.Pane eventKey="#info">
            <div>Recent orders</div>
            <Accordion>
                {orders.length > 0 &&
                    orders.map((receipt, index) => (
                        <Accordion.Item key={receipt.id} eventKey={index}>
                            <Accordion.Header>
                                Receipt ID: {receipt.id} Date: {receipt.date}{" "}
                                Customer ID: {receipt.customer_id}
                            </Accordion.Header>
                            <Accordion.Body>
                                <Table striped bordered hover key={receipt.id}>
                                    <thead>
                                        <tr>
                                            <th>Product Name</th>
                                            <th>Quantity</th>
                                            <th>Color</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {receipt.lines.length > 0 &&
                                            receipt.lines.map((line) => (
                                                <tr key={line.id}>
                                                    <td>
                                                        <Link
                                                            to={
                                                                "../../product/" +
                                                                line.product_id
                                                            }
                                                        >
                                                            {line.product_id}
                                                        </Link>
                                                    </td>
                                                    <td>{line.quantity}</td>
                                                    <td>{line.color}</td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </Table>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
            </Accordion>
        </Tab.Pane>
    );
}

export default DashboardInfoTab;
