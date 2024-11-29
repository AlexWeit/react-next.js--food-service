import './app.css'
import { Layout } from "./components/layout/layout";
import { RestaurantsPage } from "./components/restaurantsPage/restaurantsPage";
import {ThemeContextProvider} from "./components/theme-context/theme-context-provider";
import {AuthContextProvider} from "./components/auth-context/auth-context-provider";

export function App() {
    return (
        <AuthContextProvider>
            <ThemeContextProvider>
                <Layout>
                    <RestaurantsPage />
                </Layout>
            </ThemeContextProvider>
        </AuthContextProvider>
    );
}
