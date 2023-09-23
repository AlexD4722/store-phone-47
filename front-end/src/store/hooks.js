import { useContext } from "react";
import {
    SearchContext,
    AccountContext,
    CartContext,
    WishListContext,
} from "./Context";

export function useSearchContext() {
    const store = useContext(SearchContext);

    return store;
}

export function useAccountContext() {
    const store = useContext(AccountContext);

    return store;
}

export function useWishlistContext() {
    const store = useContext(WishListContext);

    return store;
}

export function useCartContext() {
    const store = useContext(CartContext);

    return store;
}
