import { useCallback, useState } from "react";
import { Form, Button } from "react-bootstrap";
import APIrequest, { FIND_USER_TO_UPDATE, UPDATE_USER } from "../API/callAPI";

function UserInformation() {
    const [disable, setDisable] = useState(true);
    const [name, setName] = useState("");
    const [user, setUser] = useState({});
    const [result, setResult] = useState("");
    const [result2, setResult2] = useState("");

    const handleSearch = useCallback(
        (e) => {
            e.preventDefault();
            const data = { username: name };
            APIrequest(FIND_USER_TO_UPDATE, data).then((response) => {
                if (response.result === "Success") {
                    if (response.data.result === "Success") {
                        setUser(response.data.user);
                        setDisable(false);
                    } else {
                        setResult("Can't find user");
                    }
                } else {
                    setResult("Can't connect to database");
                }
            });
        },
        [name]
    );

    const handleUpdate = (e) => {
        e.preventDefault();
        if (user.phone.length > 11) {
            setResult2("Phone number is too long");
            return;
        } else {
            APIrequest(UPDATE_USER, user).then((response) => {
                if (response.result === "Success") {
                    if (response.data.result === "Success") {
                        alert("Edit successful");
                        setUser({});
                        setDisable(true);
                    } else {
                        setResult2("Can't edit user information");
                    }
                } else {
                    setResult2("Can't connect to database");
                }
            });
        }
    };

    return (
        <>
            <Form onSubmit={(e) => handleSearch(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter the username you need to find"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                {result && <div className="text-danger">{result}</div>}
                <Button type="submit">Search</Button>
            </Form>
            <Form onSubmit={(e) => handleUpdate(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                        type="number"
                        disabled
                        defaultValue={user.id || ""}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        disabled={disable}
                        value={user.username || ""}
                        onChange={(e) =>
                            setUser((prev) => {
                                return { ...prev, username: e.target.value };
                            })
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        disabled={disable}
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
                        type="number"
                        disabled={disable}
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
                        type="text"
                        disabled={disable}
                        value={user.address || ""}
                        onChange={(e) =>
                            setUser((prev) => {
                                return { ...prev, address: e.target.value };
                            })
                        }
                    />
                </Form.Group>
                {result2 && <div className="text-danger">{result2}</div>}
                <Button type="submit" disabled={disable}>
                    Update
                </Button>
            </Form>
        </>
    );
}

export default UserInformation;
