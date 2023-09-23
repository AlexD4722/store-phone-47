import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../styles/color.scss";
import "../styles/font.scss";
import "../assets/imgs/logo-dark.png";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../bootstrap/css/bootstrap.css";
import "react-bootstrap";
import Layout from "./Layout";
import {
    Home,
    Blog,
    Contact,
    Signin,
    WishList,
    Cart,
    NotFound,
    Signup,
    Search,
    Account,
    DetailProduct,
    EmailValidation,
    Dashboard,
    SignUpSuccess
} from "../routes";
import CheckOut from "../routes/Checkout";
import OrderReceived from "../routes/orderReceived";
import SearchReceipt from "../routes/SearchReceipt";
import Orders from "../routes/Orders";
import OrderDetail from "../routes/OrderDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/product/:nameProduct",
                element: <DetailProduct />,
            },
            {
                path: "/search/:keyword",
                element: <Search />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/signin",
                element: <Signin />,
            },
            {
                path: "/account",
                element: <Account />,
            },
            {
                path: "/account/admin-dashboard",
                element: <Dashboard />,
            },
            {
                path: "/checkout",
                element: <CheckOut />,
            },
            {
                path: "/OrderReceived",
                element: <OrderReceived />,
            },
            {
                path: "/wish-list",
                element: <WishList />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/signup/email-validation",
                element: <EmailValidation />,
            },
            {
                path: "/signup/success",
                element: <SignUpSuccess />,
            },
            {
                path: "/searchReceipt",
                element: <SearchReceipt />,
            },
            {
                path: "/orders",
                element: <Orders />,
            },
            {
                path: "/orderDetail/:idRecipient",
                element: <OrderDetail />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
