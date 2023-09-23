import { Form, Button } from "react-bootstrap";
import APIrequest, {
    GET_ALL_PRODUCT_LINE,
    ADD_NEW_PRODUCT,
    testAPI,
} from "../API/callAPI.js";
import { useEffect, useState } from "react";

function ProductAdd() {
    const [name, setName] = useState("");
    const [initialPrice, setInitialPrice] = useState("");
    const [sellingPrice, setSellingPrice] = useState("");
    const [images, setImages] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState(["..."]);
    const [color, setColor] = useState(["Red"]);
    const [capacity, setCapacity] = useState("");
    const [productLines, setProductLines] = useState([]);
    const [idProductLine, setIdProductLine] = useState([]);
    const [result, setResult] = useState("");

    useEffect(() => {
        APIrequest(GET_ALL_PRODUCT_LINE, {}).then((obj) => {
            if (obj.result === "Success" && obj.data.result === "Found") {
                setProductLines(obj.data.linesArr);
                console.log("----------------",obj.data.linesArr);
            }
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            initialPrice,
            sellingPrice,
            images,
            quantity,
            idProductLine,
            description,
            color,
            capacity,
        };
        console.log(data);
        APIrequest(ADD_NEW_PRODUCT, data).then((obj) => {
            if (obj.result === "Failed") {
                setResult("Database error");
            } else if (obj.data.result === "Success") {
                setResult("Add new product successfully");
            } else {
                setResult("Unknown error");
            }
        });
    };
    if(idProductLine){
        console.log("----------------idProductLines",idProductLine);
    }
    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Initial Price</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Enter Initial Price"
                    value={initialPrice}
                    onChange={(e) => setInitialPrice(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSelling Price">
                <Form.Label>Selling Price</Form.Label>
                <Form.Control
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
                    required
                    type="text"
                    placeholder="Enter Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </Form.Group>
            <Form.Label>
                Product Line
            </Form.Label>
            <Form.Select onChange={(e) => setIdProductLine(e.target.value)}>
                <option>Choose a product line</option>
                {productLines.map((value, index) => {
                    return (
                        <option value={value.id} key={index}>
                            {value.brand} -  {value.product_type}
                        </option>
                    );
                })}
            </Form.Select>
            <Form.Group className="mb-3">
                <Form.Label>Color</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter color"
                    value={color}
                    onChange={(e) =>
                        setColor(e.target.value)
                    }
                />
                {/* {color.map((value, index) => {
                    return (
                        <Form.Control
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
                })} */}
                {/* <Button
                    onClick={() => {
                        setColor((prev) => {
                            return [...prev, "Red"];
                        });
                    }}
                >
                    Add
                </Button> */}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Capacity</Form.Label>
                <Form.Control
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
                    onClick={() => {
                        setDescription((prev) => {
                            return [...prev, "64GB"];
                        });
                    }}
                >
                    Add
                </Button>
            </Form.Group>
            <Button variant="primary" className="ma" type="submit">
                Submit
            </Button>
            {result && <div>{result}</div>}
        </Form>
    );
}

export default ProductAdd;
