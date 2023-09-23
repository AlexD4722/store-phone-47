import { Button, Container, Row, Col, Badge, Card } from "react-bootstrap";
import {
    useAccountContext,
    useCartContext,
    useWishlistContext,
} from "../store";
import { useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../styles/account-page.scss'

function Account() {
    const [account, setAccount] = useAccountContext();
    const setWishlist = useWishlistContext()[1];
    const dispatchCart = useCartContext()[1];
    const navigate = useNavigate();

    const handleSignOut = useCallback(() => {
        if (localStorage.getItem("user")) {
            localStorage.removeItem("user");
        }
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("cart");
        setAccount({});
        setWishlist([]);
        const action = { type: "replace", payload: [] };
        dispatchCart(action);
        navigate("..");
    }, []);

    console.log(account, '-----------------------------------------')
    return (
        <>
            <div className="xo-container">
                <div className="account-page">
                    <div className="account-page__title-box">
                        <h2 className="account-page__title-box-detail">My Account</h2>
                        <p className="account-page__btn-logout"
                            onClick={handleSignOut}
                        >logout</p>
                    </div>
                    <div className="account-page__main-content">
                        <div className="account-page__comp">
                            <h3>Account Details</h3>
                            <div className="account-page__comp-content">
                                <p>Name Account: {account.username}</p>
                                <p>Email: {account.email}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        {account.user_type === "admin" && (
                            <a
                                href='../admin/'
                            >
                               <p className="account-page__link"> Go to Admin Dashboard</p>
                            </a>
                        )}
                    </div>
                    <div>
                        <Link to={"/orders"}>
                            <p className="account-page__link">
                                show list orders
                            </p>
                        </Link>
                    </div>

                    {/* <Row>
                        <Col sm={3}>

                        </Col>
                        <Col sm={6}>
                            {Object.keys(account).length > 0 && (
                                <>
                                    <Card className="text-center">
                                        <Card.Body>
                                            <Card.Title>
                                                <Badge pill bg="secondary">
                                                    {account.username}
                                                </Badge>
                                            </Card.Title>
                                            <Card.Text>
                                                User type: {account.user_type}
                                            </Card.Text>
                                            <Card.Text>
                                                Email: {account.email}
                                            </Card.Text>
                                            <Card.Text>
                                                Address: {account.address}
                                            </Card.Text>
                                            <Card.Text>
                                                Phone number: {account.phone}
                                            </Card.Text>
                                            {account.user_type === "admin" && (
                                                <Link
                                                    to="admin-dashboard"
                                                    className="d-flex justify-content-center text-primary"
                                                >
                                                    Go to Admin Dashboard
                                                </Link>
                                            )}
                                            {Object.keys(account).length > 0 && (
                                                <Button onClick={handleSignOut}>
                                                    Sign out
                                                </Button>
                                            )}
                                            <div className="account-btn">
                                                <Link to={"/searchReceipt"}>
                                                    <Button>Search for orders</Button>
                                                </Link>
                                            </div>
                                            <div className="account-btn">
                                                <Link to={"/orders"}>
                                                    <Button>your orders</Button>
                                                </Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </>
                            )}
                        </Col>
                        <Col sm={3}></Col>
                    </Row> */}
                </div>
            </div>
        </>
    );
}

export default Account;
