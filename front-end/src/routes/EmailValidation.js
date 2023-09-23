import { useCallback, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import APIrequest, { VALIDATE_CODE } from "../API/callAPI";

function EmailValidation() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [result, setResult] = useState("");
    const [code, setCode] = useState("");

    useEffect(() => {
        const loginStatus = JSON.parse(sessionStorage.getItem("user"));
        if (!loginStatus || loginStatus.login !== "none") {
            navigate("404notfound");
        }
    }, []);

    const handleSubmitCode = useCallback(
        (e) => {
            e.preventDefault();

            const loginStatus = JSON.parse(sessionStorage.getItem("user"));
            setEmail(loginStatus.user.email);
            const data = {
                username: loginStatus.user.username,
                email: loginStatus.user.email,
                validation_code: code,
            };
            APIrequest(VALIDATE_CODE, data).then((response) => {
                if (response.result === "Success") {
                    if (response.data.result === "Success") {
                        navigate("/signup/success");
                    } else {
                        setResult("Validation code is not correct!");
                    }
                }
            });
        },
        [code]
    );

    return (
        <>
            An validation code has been sent to email {email}
            <Form onSubmit={(e) => handleSubmitCode(e)}>
                <Form.Group>
                    <Form.Label>Validation code</Form.Label>
                    <Form.Control
                        type="text"
                        value={code}
                        onChange={(e) => {
                            setCode(e.target.value);
                        }}
                    />
                </Form.Group>
                {result && (
                    <Form.Group>
                        <Form.Control type="hidden" isInvalid={true} />
                        <Form.Control.Feedback type="invalid">
                            {result}
                        </Form.Control.Feedback>
                    </Form.Group>
                )}
                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form>
        </>
    );
}

export default EmailValidation;
