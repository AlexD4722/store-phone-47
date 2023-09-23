import {
    SearchContext,
    AccountContext,
    WishListContext,
    CartContext,
} from "./Context";
import { useReducer, useState } from "react";
import reducer from "./reducer";

function SearchProvider({ children }) {
    const [keyword, setKeyword] = useState("");

    return (
        <SearchContext.Provider value={[keyword, setKeyword]}>
            {children}
        </SearchContext.Provider>
    );
}

function AccountProvider({ children }) {
    const [account, setAccount] = useState({});

    return (
        <AccountContext.Provider value={[account, setAccount]}>
            {children}
        </AccountContext.Provider>
    );
}

function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);

    return (
        <WishListContext.Provider value={[wishlist, setWishlist]}>
            {children}
        </WishListContext.Provider>
    );
}

function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <CartContext.Provider value={[state, dispatch]}>
            {children}
        </CartContext.Provider>
    );
}

export { SearchProvider, AccountProvider, WishlistProvider, CartProvider };
