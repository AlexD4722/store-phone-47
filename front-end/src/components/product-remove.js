import { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
import APIrequest, {
    GET_PRODUCTS_BY_WISHLIST,
    REMOVE_PRODUCT,
} from "../API/callAPI";

function ProductRemove() {
    const [id, setId] = useState("");
    const [searchResult, setSearchResult] = useState("");
    const [product, setProduct] = useState({});
    const [removeResult, setRemoveResult] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        APIrequest(GET_PRODUCTS_BY_WISHLIST, [id]).then((response) => {
            if (response.result === "Success") {
                let arr = response.data.productArray;
                if (arr.length > 0) {
                    setProduct(arr[0]);
                } else {
                    setSearchResult("Product not found");
                }
            } else {
                setSearchResult("Product not found");
            }
        });
    };

    const handleRemove = () => {
        setProduct((prev) => {
            let newProduct = { ...prev };
            let textArr = newProduct.images[0].split("/");
            let imageFolder = textArr[textArr.length - 2];
            newProduct.images = imageFolder;
            return newProduct;
        });
        APIrequest(REMOVE_PRODUCT, product).then((response) => {
            if (
                response.result === "Success" &&
                response.data.result === "Success"
            ) {
                setProduct({});
                if (response.data.receipt_found) {
                    setRemoveResult("Set product status to inactive");
                } else {
                    setRemoveResult("Remove successfully");
                }
            } else {
                setRemoveResult("Remove failed");
            }
        });
    };

    return (
        <>
            <Form onSubmit={(e) => handleSearch(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>Product ID</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter product ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </Form.Group>
                {searchResult && (
                    <div className="text-danger">{searchResult}</div>
                )}
                <Button type="submit">Search</Button>
            </Form>
            {Object.keys(product).length > 0 && (
                <div>
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
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.initial_price}</td>
                                <td>{product.selling_price}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    {product.color.map((item) => item + " ")}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button onClick={handleRemove}>Remove</Button>
                </div>
            )}
            {removeResult && <div className="text-danger">{removeResult}</div>}
        </>
    );
}

export default ProductRemove;
