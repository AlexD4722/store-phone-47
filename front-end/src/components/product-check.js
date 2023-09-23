import { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
import APIrequest, { SEARCH_PRODUCTS_BY_NAME } from "../API/callAPI";

function ProductCheck() {
    const [name, setName] = useState("");
    const [result, setResult] = useState("");
    const [products, setProducts] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        APIrequest(SEARCH_PRODUCTS_BY_NAME, { nameProduct: name }).then(
            (response) => {
                if (response.result === "Success") {
                    if (response.data.productArray.length > 0) {
                        setProducts(response.data.productArray);
                    } else {
                        setProducts([]);
                        setResult("No product found");
                    }
                } else {
                    setResult("Failed to connect database");
                }
            }
        );
    };

    return (
        <>
            <Form onSubmit={(e) => handleSearch(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter the product you need to find"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                {result && <div className="text-danger">{result}</div>}
                <Button type="submit">Search</Button>
            </Form>
            {products.length > 0 && (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Inital price</th>
                            <th>Present price</th>
                            <th>Quantity</th>
                            <th>Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => {
                            return (
                                <tr>
                                    <td>{product.id}</td>
                                    <td>{product.name} {product.capacity}</td>
                                    <td>{product.initial_price}</td>
                                    <td>{product.selling_price}</td>
                                    <td>{product.quantity}</td>
                                    <td>
                                        {product.color.map(
                                            (item) => item + " "
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            )}
        </>
    );
}

export default ProductCheck;
