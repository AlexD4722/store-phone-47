import "../styles/logo.scss";
import "../styles/form-search.scss";

function SearchEmail() {

    return (
        <form className="form-search">
            <div className="form-search__wrapper-search">
                <div className="form-search__box-input">
                    <input
                        type="text"
                        placeholder="Your email address"
                    />
                </div>

                <div className="form-search__button">
                    <button
                        className="form-search__button-detail"
                        type="button"
                    >
                        <span>sign in</span>
                    </button>
                </div>
            </div>
        </form>
    );
}

export default SearchEmail;
