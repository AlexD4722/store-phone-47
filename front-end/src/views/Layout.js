import Headers from "../section/header";
import SiteMenu from "../components/site-menu";
import Footer from "../section/footer-page";
import NavBottom from "../components/mobile-bottom-menu";
import { Outlet } from "react-router";
import '../styles/index.scss';

function Layout({ children }) {
    return (
        <div>
            <Headers />
            <SiteMenu />
            <div className="outlet">
                <Outlet />
            </div>
            <NavBottom />
            <Footer />
        </div>
    );
}

export default Layout;
