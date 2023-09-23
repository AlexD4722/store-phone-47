import { Tabs, Tab } from "react-bootstrap";
import UserInformation from "../components/user-information";
import UserAdd from "../components/user-add";
import UserRemove from "../components/user-remove";

function DashboardUserTab() {
    return (
        <Tab.Pane eventKey="#user">
            <Tabs
                defaultActiveKey="check"
                transition={true}
                className="mb-3"
                fill
                justify
            >
                <Tab eventKey="check" title="Check and edit user information">
                    <UserInformation />
                </Tab>
                <Tab eventKey="add" title="Add an user">
                    <UserAdd />
                </Tab>
                <Tab eventKey="remove" title="Remove user">
                    <UserRemove />
                </Tab>
            </Tabs>
        </Tab.Pane>
    );
}

export default DashboardUserTab;
