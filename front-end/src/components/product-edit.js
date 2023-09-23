import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import APIrequest, {
    GET_PRODUCTS_BY_WISHLIST,
    GET_ALL_PRODUCT_LINE,
    EDIT_PRODUCT,
} from "../API/callAPI";

function ProductEdit() {
    const [id, setId] = useState("");
    const [searchResult, setSearchResult] = useState("");
    const [disable, setDisable] = useState(true);

    const [name, setName] = useState("");
    const [initalPrice, setInitalPrice] = useState("");
    const [sellingPrice, setSellingPrice] = useState("");
    const [images, setImages] = useState("");
    const [quantity, setQuantity] = useState("");
    const [productLine, setProductLine] = useState("");
    const [description, setDescription] = useState(["..."]);
    const [color, setColor] = useState([]);
    const [capacity, setCapacity] = useState("");
    const [productLines, setProductLines] = useState([]);
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        APIrequest(GET_PRODUCTS_BY_WISHLIST, [id]).then((response) => {
            if (response.result === "Success") {
                const item = response.data.productArray[0];
                setName(item.name);
                setInitalPrice(item.initial_price);
                setSellingPrice(item.selling_price);
                let textArr = item.images[0].split("/");
                let imageFolder = textArr[textArr.length - 2];
                setImages(imageFolder);
                setQuantity(item.quantity);
                setProductLine(item.product_line.name);
                setDescription(item.description);
                setCapacity(item.capacity);
                setColor(item.color);
                setStatus(item.status);
                setDisable(false);
            } else {
                setSearchResult("Product not found");
            }
        });
    };

    useEffect(() => {
        APIrequest(GET_ALL_PRODUCT_LINE, {}).then((obj) => {
            if (obj.result === "Success" && obj.data.result === "Found") {
                setProductLines(obj.data.linesArr);
            }
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            product: {
                name,
                initalPrice,
                sellingPrice,
                images,
                quantity,
                productLine,
                description,
                color,
                capacity,
                status,
            },
            id,
        };

        APIrequest(EDIT_PRODUCT, data).then((obj) => {
            if (obj.result === "Failed") {
                setResult("Database error");
            } else if (obj.data.result === "Success") {
                setResult("Edit product successfully");
                setDisable(true);
            } else {
                setResult("Unknown error");
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
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        disabled={disable}
                        required
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Inital Price</Form.Label>
                    <Form.Control
                        disabled={disable}
                        required
                        type="text"
                        placeholder="Enter Inital Price"
                        value={initalPrice}
                        onChange={(e) => setInitalPrice(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSelling Price">
                    <Form.Label>Selling Price</Form.Label>
                    <Form.Control
                        disabled={disable}
                        required
                        type="text"
                        placeholder="Enter Selling Price"
                        value={sellingPrice}
                        onChange={(e) => setSellingPrice(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Image folder</Form.Label>
                    <Form.Control
                        disabled={disable}
                        required
                        type="text"
                        placeholder="Enter image folder"
                        value={images}
                        onChange={(e) => setImages(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        disabled={disable}
                        required
                        type="text"
                        placeholder="Enter Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </Form.Group>
                <Form.Label>Product Line</Form.Label>
                <Form.Select
                    disabled={disable}
                    onChange={(e) => setProductLine(e.target.value)}
                >
                    <option>Choose a product line</option>
                    {productLines.map((value, index) => {
                        return (
                            <option
                                value={value.name}
                                key={index}
                                selected={value.name === productLine.name}
                            >
                                {value.name}
                            </option>
                        );
                    })}
                </Form.Select>
                <Form.Group className="mb-3">
                    <Form.Label>Color</Form.Label>
                    {color.map((value, index) => {
                        return (
                            <Form.Control
                                disabled={disable}
                                type="text"
                                placeholder="Enter color"
                                value={value}
                                key={index}
                                onChange={(e) =>
                                    setColor((prev) => {
                                        let now = [...prev];
                                        now[index] = e.target.value;
                                        return now;
                                    })
                                }
                            />
                        );
                    })}
                    <Button
                        disabled={disable}
                        onClick={() => {
                            setColor((prev) => {
                                return [...prev, "Red"];
                            });
                        }}
                    >
                        Add
                    </Button>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Capacity</Form.Label>
                    <Form.Control
                        disabled={disable}
                        type="text"
                        placeholder="Enter capacity"
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Key feature</Form.Label>
                    {description.map((value, index) => {
                        return (
                            <Form.Control
                                disabled={disable}
                                required
                                type="text"
                                placeholder="Enter description"
                                value={value}
                                key={index}
                                onChange={(e) =>
                                    setDescription((prev) => {
                                        let now = [...prev];
                                        now[index] = e.target.value;
                                        return now;
                                    })
                                }
                            />
                        );
                    })}
                    <Button
                        disabled={disable}
                        onClick={() => {
                            setDescription((prev) => {
                                return [...prev, "64GB"];
                            });
                        }}
                    >
                        Add
                    </Button>
                </Form.Group>
                <Button
                    disabled={disable}
                    variant="primary"
                    className="ma"
                    type="submit"
                >
                    Submit
                </Button>
                {result && <div>{result}</div>}
            </Form>
        </>
    );
}

export default ProductEdit;
