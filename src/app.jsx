import './app.css'
import { Layout } from "./components/layout/layout";
import { RestaurantsPage } from "./components/restaurantsPage/restaurantsPage";
import {ThemeContextProvider} from "./components/theme-context/theme-context-provider";
import {AuthContextProvider} from "./components/auth-context/auth-context-provider";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export function App() {
    return (
        <Provider store={store}>
            <AuthContextProvider>
                <ThemeContextProvider>
                    <Layout>
                        <RestaurantsPage />
                    </Layout>
                </ThemeContextProvider>
            </AuthContextProvider>
        </Provider>
    );
}
