import { useState } from "react";
import { Form, Button, Table, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import APIrequest, { SEARCH_RECEIPT } from "../API/callAPI";

function OrderCheck() {
    const [result, setResult] = useState("");
    const [oid, setOID] = useState("");
    const [cid, setCID] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("");
    const [disable, setDisable] = useState({
        oid: true,
        cid: true,
        date: true,
        status: true,
    });
    const [orders, setOrders] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();

        if (disable.oid && disable.cid && disable.date && disable.status) {
            setResult("Search key required");
            setOrders([]);
            return;
        }

        const data = {
            order_id: oid,
            customer_id: cid,
            date,
            status,
        };
        if (disable.oid) {
            data.order_id = "";
        }
        if (disable.cid) {
            data.customer_id = "";
        }
        if (disable.date) {
            data.date = "";
        }
        if (disable.status) {
            data.status = "";
        }
        if (data.status === 2) {
            data.status = "";
        }
        APIrequest(SEARCH_RECEIPT, data).then((response) => {
            if (response.result === "Success") {
                if (response.data.result === "Success") {
                    setOrders(response.data.receipt_array);
                    setResult("");
                } else {
                    setOrders([]);
                    setResult("No receipt found");
                }
            } else {
                setOrders([]);
                setResult("Can't connect to database");
            }
        });
    };

    const toggle = (target) => {
        setDisable((prev) => {
            return {
                ...prev,
                [target]: !prev[target],
            };
        });
    };

    return (
        <>
            <Form onSubmit={(e) => handleSearch(e)}>
                <Form.Check
                    type="switch"
                    label="Use order ID"
                    onClick={() => toggle("oid")}
                />
                <Form.Group className="mb-3">
                    <Form.Label>Order ID</Form.Label>
                    <Form.Control
                        disabled={disable.oid}
                        type="text"
                        placeholder="Enter the order ID"
                        value={oid}
                        onChange={(e) => setOID(e.target.value)}
                    />
                </Form.Group>
                <Form.Check
                    type="switch"
                    label="Use customer ID"
                    onClick={() => toggle("cid")}
                />
                <Form.Group className="mb-3">
                    <Form.Label>Customer ID</Form.Label>
                    <Form.Control
                        disabled={disable.cid}
                        type="text"
                        placeholder="Enter the customer ID"
                        value={cid}
                        onChange={(e) => setCID(e.target.value)}
                    />
                </Form.Group>
                <Form.Check
                    type="switch"
                    label="Use date"
                    onClick={() => toggle("date")}
                />
                <Form.Group className="mb-3">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        disabled={disable.date}
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </Form.Group>
                <Form.Check
                    type="switch"
                    label="Use order status"
                    onClick={() => toggle("status")}
                />
                <Form.Group className="mb-3">
                    <Form.Label>Order status</Form.Label>
                    <Form.Select
                        disabled={disable.status}
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                        <option value="2">Active & inactive</option>
                    </Form.Select>
                </Form.Group>
                {result && <div className="text-danger">{result}</div>}
                <Button type="submit">Search</Button>
            </Form>
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
        </>
    );
}

export default OrderCheck;
