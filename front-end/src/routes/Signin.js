import LogoShop from "../assets/imgs/logo-dark.png";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import APIrequest, { USER_LOGIN, UPDATE_USER, testAPI } from "../API/callAPI.js";
import { Link, useNavigate } from "react-router-dom";
import { useAccountContext, useWishlistContext } from "../store";
import { useCallback, useState } from "react";

function Signin() {
    const setAccount = useAccountContext()[1];
    const setWishlist = useWishlistContext()[1];
    const [report, setReport] = useState("");
    const navigate = useNavigate();

    const handleSubmit = useCallback(() => {
        const username = document.querySelector("#formBasicUsername").value;
        const password = document.querySelector("#formBasicPassword").value;
        const remember = document.querySelector("#formBasicCheckbox").checked;
        const data = { username, password };
        APIrequest(USER_LOGIN, data).then((response) => {
            setReport("");
            if (response.result === "Success") {
                if (response.data.result === "Success") {
                    let user = response.data.user;
                    setWishlist(user.wishlist);
                    let cart = JSON.parse(sessionStorage.getItem("cart"));
                    if (!cart) {
                        cart = [];
                    }
                    if (user.cart.length >= 0) {
                        user.cart = [...user.cart, ...cart];
                    } else {
                        user.cart = [...cart];
                    }
                    const newData = {
                        login: "OK",
                        user,
                    };
                    if (remember) {
                        localStorage.setItem("user", JSON.stringify(newData));
                    } else {
                        sessionStorage.setItem("user", JSON.stringify(newData));
                    }
                    APIrequest(UPDATE_USER, user);
                    setAccount(user);
                    navigate("..");
                } else {
                    setReport("Username or Password is wrong");
                }
            } else {
                setReport("Failed to connect database");
            }
        });
    }, [setAccount, setReport]);

    return (
        <div className="section-account">
            <Container>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={6}>
                        <h2 className="text-center mt-5 mb-5">
                            <div className="mb-4">
                                <img src={LogoShop} alt="" />
                            </div>
                            <strong>Good to see you again</strong>
                        </h2>
                        <div className="section-account-form">
                            <Form>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicUsername"
                                >
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="Username"
                                        placeholder="Enter Username"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicPassword"
                                >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicCheckbox"
                                >
                                    <Form.Check
                                        type="checkbox"
                                        label="Remember me"
                                    />
                                </Form.Group>
                                <div className="text-center">
                                    <div>
                                        <Button
                                            variant="primary"
                                            className="ma"
                                            onClick={handleSubmit}
                                        >
                                            Sign In
                                        </Button>
                                    </div>
                                    <div>or</div>
                                    <div>
                                        <Link
                                            to="../signup"
                                            className="text-primary"
                                        >
                                            Sign up
                                        </Link>
                                    </div>
                                    <div>{report}</div>
                                </div>
                            </Form>
                        </div>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Signin;
