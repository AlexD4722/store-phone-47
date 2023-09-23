import { Tabs, Tab } from "react-bootstrap";
import ProductCheck from "../components/product-check";
import ProductAdd from "../components/product-add";
import ProductAddLine from "../components/product-add-line";
import ProductEdit from "../components/product-edit";
import ProductRemove from "../components/product-remove";

function DashboardProductTab() {
    return (
        <Tab.Pane eventKey="#product">
            <Tabs
                defaultActiveKey="check"
                transition={true}
                className="mb-3"
                fill
                justify
                mountOnEnter
                unmountOnExit
            >
                <Tab eventKey="check" title="Check product info">
                    <ProductCheck />
                </Tab>
                <Tab eventKey="add" title="Add product">
                    <ProductAdd />
                </Tab>
                <Tab eventKey="addPL" title="Add product line">
                    <ProductAddLine />
                </Tab>
                <Tab eventKey="edit" title="Edit product info">
                    <ProductEdit />
                </Tab>
                <Tab eventKey="remove" title="Remove product">
                    <ProductRemove />
                </Tab>
            </Tabs>
        </Tab.Pane>
    );
}

export default DashboardProductTab;
