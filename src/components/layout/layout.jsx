import {ScrollProgressBar} from "../scroll-progress-bar/scroll-progress-bar";
import {Header} from "../header/header";
import {Footer} from "../footer/footer";
import { AuthContextProvider } from "../auth-context/auth-context-provider";
import { ThemeContextProvider } from "../theme-context/theme-context-provider";

export const Layout = ({ children }) => {
    return (
        <AuthContextProvider>
            <ThemeContextProvider>
                <div>
                    <ScrollProgressBar />
                    <Header />
                    {children}
                    <Footer />
                </div>
            </ThemeContextProvider>
        </AuthContextProvider>
    )
};
