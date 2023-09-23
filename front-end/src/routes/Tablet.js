import '../styles/banner-wrapper.scss';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import SortProduct from "../section/sort-product";
function Tablet() {
    return (
        <div>
            <div className='xo-container'>
                <section className='page-section'>
                    <div className="banner-wrapper">
                        <div className="banner-wrapper__box-inner">
                            <h4 className="banner-wrapper__entry-title">Shop and <strong>Save Big on Hottest</strong> Products</h4>
                            <div className="banner-wrapper__content-details">
                                <div className="banner-wrapper__price-box">
                                    <div className="banner-wrapper__price">
                                        <p>from <span>$79.00</span></p>
                                    </div>
                                    <p>Don't miss this special opportunity today.</p>
                                </div>
                                <div className="banner-wrapper__btn-link">
                                    <Link to="#" className="">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='page-section'>
                    <Breadcrumb>
                        <Breadcrumb.Item href="./">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Tablet</Breadcrumb.Item>
                    </Breadcrumb>
                </section>
                <section>
                    <SortProduct />
                </section>
            </div>
        </div>
    )
}

export default Tablet;