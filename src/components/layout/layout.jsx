"use client";

import {ScrollProgressBar} from "../scroll-progress-bar/scroll-progress-bar";
import {Header} from "../header/header";
import {Footer} from "../footer/footer";
import {Cart} from "../cart/cart";
import {useAuth} from "../auth-context/use-auth";

export const Layout = ({ children }) => {
    const { isAuth } = useAuth();

    return (
        <div className="mainWrapper">
            <ScrollProgressBar />
            <Header />
            { children }
            {isAuth && <Cart />}
            <Footer />
        </div>
    )
};
