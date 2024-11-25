import './app.css'
import { Layout } from "./components/layout/layout";
import { RestaurantsPage } from "./components/restaurantsPage/restaurantsPage";

export function App() {
    return (
        <Layout>
            <RestaurantsPage />
        </Layout>
    );
}
