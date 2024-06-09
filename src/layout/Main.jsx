import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import Navbar from "../pages/shared/navbar/Navbar";


const Main = () => {
    const location = useLocation()

    const showOffNo = location.pathname.includes('login') || location.pathname.includes('signUp')

    return (
        <div>
            {showOffNo || <Navbar></Navbar>}

            <Outlet></Outlet>

            {showOffNo || <Footer></Footer>}
        </div>
    );
};

export default Main;