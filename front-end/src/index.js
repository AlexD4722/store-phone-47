import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./views/App";
import "./styles/index.scss";
import {
    SearchProvider,
    AccountProvider,
    WishlistProvider,
    CartProvider,
} from "./store/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AccountProvider>
        <CartProvider>
            <WishlistProvider>
                <SearchProvider>
                    <App />
                </SearchProvider>
            </WishlistProvider>
        </CartProvider>
    </AccountProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
