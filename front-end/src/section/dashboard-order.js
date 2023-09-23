import { Tabs, Tab } from "react-bootstrap";
import OrderCheck from "../components/order-check.js";
import OrderEdit from "../components/order-edit.js";
import OrderRemove from "../components/order-remove.js";

function DashboardOrderTab() {
    return (
        <Tab.Pane eventKey="#order">
            <Tabs
                defaultActiveKey="check"
                transition={true}
                className="mb-3"
                fill
                justify
            >
                <Tab eventKey="check" title="Check order information">
                    <OrderCheck />
                </Tab>
            </Tabs>
        </Tab.Pane>
    );
}

export default DashboardOrderTab;
