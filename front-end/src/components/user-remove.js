import { useCallback, useState } from "react";
import { Form, Button } from "react-bootstrap";
import APIrequest, {
    FIND_USER_TO_UPDATE,
    REMOVE_USER,
    UPDATE_USER,
} from "../API/callAPI";

function UserRemove() {
    const [disable, setDisable] = useState(true);
    const [name, setName] = useState("");
    const [user, setUser] = useState({});
    const [result, setResult] = useState("");
    const [removeResult, setRResult] = useState("");

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
        APIrequest(REMOVE_USER, { id: user.id }).then((response) => {
            if (response.result === "Success") {
                if (response.data.result === "Success") {
                    alert("Remove user successfully");
                    setUser({});
                    setName("");
                } else {
                    setRResult("Failed to remove user");
                }
            } else {
                setRResult("Failed to connect database");
            }
        });
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
                        defaultValue={user.id}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        disabled
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
                        disabled={true}
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
                        disabled={true}
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
                        disabled={true}
                        value={user.address || ""}
                        onChange={(e) =>
                            setUser((prev) => {
                                return { ...prev, address: e.target.value };
                            })
                        }
                    />
                </Form.Group>
                {removeResult && (
                    <div className="text-danger">{removeResult}</div>
                )}
                <Button type="submit" disabled={disable}>
                    Remove
                </Button>
            </Form>
        </>
    );
}

export default UserRemove;
