import "../styles/logo.scss";
import "../styles/form-search.scss";
import React, { useCallback, useState } from "react";
import APIrequest, * as API from "../API/callAPI";
import { useSearchContext } from "../store/hooks";
import { Link } from "react-router-dom";

function FormSearch() {
    const [hint, setHint] = useState([]);
    const [keyword, setKey] = useSearchContext();
    const [isHiddenBoxSuggest, setIsHiddenBoxSuggest] = useState(false);
    const handleSearch = useCallback((e) => {
        setHint([]);
        setKey(e.target.value);
        const data = { search: e.target.value };
        const action = API.GET_5_PRODUCTS_BY_NAME;
        if (data.search !== "") {
            APIrequest(action, data).then((response) => {
                if (response.result === "Success") {
                    setHint(response.data.productArray);
                }
            });
        }
    }, [setKey]);
    const handleButton = () => {
        window.location.href = "/search/" + keyword;
    }

    const handleEnter = e => {
        if (e.key === "Enter") {
            handleButton();
        }
    }
    const handleBlurInputSearchClick = () => {
        setIsHiddenBoxSuggest(true);
    }
    const handleBlurInputSearchBlur = () => {
        setIsHiddenBoxSuggest(false);
    }
    return (
        <form className="form-search">
            <div className="form-search__wrapper-search">
                <div className="form-search__box-input"
                >
                    <input
                        value={keyword}
                        type="text"
                        placeholder="Search your favorite product..."
                        onChange={(event) => handleSearch(event)}
                        onKeyUp={event => handleEnter(event)}
                        onClick={handleBlurInputSearchClick}
                    />
                    {
                        hint.length !== 0 && isHiddenBoxSuggest ?
                            <div className="recommend-product">
                                <ul className="recommend-product__box-list">
                                    {hint.map((value, index) => {
                                        return (
                                            <li key={value.id}>
                                                <Link to={`/product/${value.name}`}
                                                    onClick={handleBlurInputSearchBlur}>
                                                    <div className="recommend-product__box-img">
                                                        <div className="recommend-product__img-detail">
                                                            <img src={value.images[0]} alt="img search" />
                                                        </div>
                                                    </div>
                                                    <div className="recommend-product__info-product">
                                                        <h2 className="recommend-product__name-product">{value.name} {value.capacity}</h2>
                                                        <div className="recommend-product__price-item">
                                                            <p className="recommend-product__price-initall">${value.initial_price}</p>
                                                            <p className="recommend-product__price-selling">${value.selling_price}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div> : ""
                    }
                </div>

                <div className="form-search__button">
                    <button
                        className="form-search__button-detail"
                        type="button"
                        onClick={handleButton}
                    >
                        <span>search</span>
                    </button>
                </div>
            </div>
        </form>
    );
}

export default FormSearch;
