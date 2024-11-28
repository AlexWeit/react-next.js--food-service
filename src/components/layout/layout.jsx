import {ScrollProgressBar} from "../scroll-progress-bar/scroll-progress-bar";
import {Header} from "../header/header";
import {Footer} from "../footer/footer";
import { ThemeContextProvider } from "../theme-context/theme-context-provider";

export const Layout = ({ children }) => {
    return (
        <ThemeContextProvider>
            <div>
                <ScrollProgressBar />
                <Header />
                {children}
                <Footer />
            </div>
        </ThemeContextProvider>
    )
};
