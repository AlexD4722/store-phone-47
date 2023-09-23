import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import APIrequest, { ADD_NEW_USER } from "../API/callAPI";

function UserAdd() {
    const [user, setUser] = useState({});
    const [result, setResult] = useState("");

    const handleAdd = (e) => {
        e.preventDefault();
        APIrequest(ADD_NEW_USER, user).then((response) => {
            if (response.result === "Success") {
                if (response.data.result === "Success") {
                    alert("Add new user successful");
                    setUser({});
                } else {
                    setResult("Failed to add new user");
                }
            } else {
                setResult("Failed to connect to database");
            }
        });
    };

    return (
        <>
            <Form onSubmit={(e) => handleAdd(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        value={user.username || ""}
                        onChange={(e) =>
                            setUser((prev) => {
                                return { ...prev, username: e.target.value };
                            })
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        value={user.password || ""}
                        onChange={(e) =>
                            setUser((prev) => {
                                return { ...prev, password: e.target.value };
                            })
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        value={user.email || ""}
                        onChange={(e) =>
                            setUser((prev) => {
                                return { ...prev, email: e.target.value };
                            })
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        value={user.phone || ""}
                        onChange={(e) =>
                            setUser((prev) => {
                                return { ...prev, phone: e.target.value };
                            })
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        value={user.address || ""}
                        onChange={(e) =>
                            setUser((prev) => {
                                return { ...prev, address: e.target.value };
                            })
                        }
                    />
                </Form.Group>
                <Form.Select
                    onChange={(e) =>
                        setUser((prev) => {
                            return { ...prev, user_type: e.target.value };
                        })
                    }
                >
                    <option>User type</option>
                    <option value="admin">Admin</option>
                    <option value="customer">Customer</option>
                </Form.Select>
                {result && <div className="text-danger">{result}</div>}
                <Button type="submit">Add</Button>
            </Form>
        </>
    );
}

export default UserAdd;
