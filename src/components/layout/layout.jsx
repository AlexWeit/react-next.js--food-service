import {ScrollProgressBar} from "../scroll-progress-bar/scroll-progress-bar";
import {Header} from "../header/header";
import {Footer} from "../footer/footer";
import {Cart} from "../cart/cart";
import {useAuth} from "../auth-context/use-auth";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    const { isAuth } = useAuth();

    return (
        <div className="mainWrapper">
            <ScrollProgressBar />
            <Header />
            <Outlet />
            {isAuth && <Cart />}
            <Footer />
        </div>
    )
};
