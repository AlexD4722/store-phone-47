import Logo from "../components/logo.js";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import APIrequest, {
    USER_SIGNUP,
    SEND_VALIDATION_EMAIL,
} from "../API/callAPI.js";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router";

function Signup() {
    const [validated, setValidated] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [reenter, setReenter] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            setValidated({});
            setName((prev) => prev.trim());
            setEmail((prev) => prev.trim());
            setPass((prev) => prev.trim());
            setReenter((prev) => prev.trim());

            let stop = false;

            if (name.length < 6) {
                setValidated((prev) => {
                    return {
                        ...prev,
                        name: "Name is invalid",
                    };
                });
                stop = true;
            }
            if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
                setValidated((prev) => {
                    return {
                        ...prev,
                        email: "Email is invalid",
                    };
                });
                stop = true;
            }
            if (pass !== reenter) {
                setValidated((prev) => {
                    return {
                        ...prev,
                        pass: "You need to re-enter password correctly",
                    };
                });
                stop = true;
            }
            if (phone.length > 11) {
                setValidated((prev) => {
                    return {
                        ...prev,
                        phone: "Phone number exceeds length limit",
                    };
                });
                stop = true;
            }
            if (stop) {
                return;
            }
            const data = {
                username: name,
                password: pass,
                email,
                phone,
                address,
            };
            APIrequest(USER_SIGNUP, data).then((obj) => {
                if (obj.result === "Failed") {
                    setValidated((prev) => {
                        return {
                            ...prev,
                            database: "Database error. Retry later",
                        };
                    });
                } else if (obj.data.error) {
                    setValidated((prev) => {
                        return {
                            ...prev,
                            error: obj.data.error,
                        };
                    });
                } else {
                    let user = {
                        username: name,
                        email,
                        wishlist: [],
                        cart: [],
                    };
                    let loginStatus = { login: "none", user };
                    sessionStorage.setItem("user", JSON.stringify(loginStatus));
                    APIrequest(SEND_VALIDATION_EMAIL, user);
                    navigate("email-validation");
                }
            });
        },
        [email, name, pass, reenter, address, phone, navigate]
    );

    return (
        <div className="section-account">
            <Container>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={6}>
                        <div className="d-flex justify-content-center mb-5 mt-5">
                            <Logo />
                        </div>
                        <h2 className="d-flex justify-content-center mb-5">
                            <strong>Sign Up Form</strong>
                        </h2>
                        <div className="section-account-form">
                            <Form onSubmit={(event) => handleSubmit(event)}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter Username"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                {validated.name && (
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="hidden"
                                            isInvalid={true}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {validated.name}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                )}
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                {validated.email && (
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="hidden"
                                            isInvalid={true}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {validated.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                )}
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Password"
                                        value={pass}
                                        onChange={(e) =>
                                            setPass(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Re-enter password</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Re-enter Password"
                                        value={reenter}
                                        onChange={(e) =>
                                            setReenter(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                {(validated.pass || validated.error) && (
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="hidden"
                                            isInvalid={true}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {validated.pass} {validated.error}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                )}
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter phone number"
                                        value={phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                {validated.phone && (
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="hidden"
                                            isInvalid={true}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {validated.phone}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                )}
                                <Form.Group className="mb-3">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter address"
                                        value={address}
                                        onChange={(e) =>
                                            setAddress(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                <Button
                                    variant="primary"
                                    className="ma"
                                    type="submit"
                                >
                                    Sign Up
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Signup;
