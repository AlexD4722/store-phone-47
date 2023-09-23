import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import  oppo from '../assets/imgs/oppo.png';
import  dell from '../assets/imgs/dell.png';
import  lenovo from '../assets/imgs/lenovo.png';
import  asus from '../assets/imgs/asus.png';
import  samsung from '../assets/imgs/samsung.png';
import  sony  from '../assets/imgs/sony.png';
import '../styles/brand-item.scss';
function BrandItem() {
    return (
        <div className="xo-container">
            <Row xs={2} sm={3} md={4} lg={6}>
                <Col>
                    <div className="brand-item">
                        <img  className="brand-item__img-detail" src={oppo} alt="" />
                    </div>
                </Col>
                <Col>
                    <div className="brand-item">
                        <img  className="brand-item__img-detail" src={dell} alt="" />
                    </div>
                </Col>
                <Col>
                    <div className="brand-item">
                        <img  className="brand-item__img-detail" src={lenovo} alt="" />
                    </div>
                </Col>
                <Col>
                    <div className="brand-item">
                        <img  className="brand-item__img-detail" src={asus} alt="" />
                    </div>
                </Col>
                <Col>
                    <div className="brand-item">
                        <img  className="brand-item__img-detail" src={samsung} alt="" />
                    </div>
                </Col>
                <Col>
                    <div className="brand-item">
                        <img  className="brand-item__img-detail" src={sony} alt="" />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default BrandItem;
