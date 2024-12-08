import './app.css'
import { Layout } from "./components/layout/layout";
import {ThemeContextProvider} from "./components/theme-context/theme-context-provider";
import {AuthContextProvider} from "./components/auth-context/auth-context-provider";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { HomePage } from "./components/PAGES/home-page/home-page";
import { RestaurantsPage } from "./components/PAGES/restaurantsPage/restaurantsPage";
import { RestaurantPage } from "./components/PAGES/restaurant-page/restaurant-page";
import { MenuPage } from "./components/PAGES/menu-page/menu-page";
import { ReviewsPage } from "./components/PAGES/reviews-page/reviews-page";
import {DishPage} from "./components/PAGES/dish-page/dish-page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "restaurants",
                element: <RestaurantsPage />,
                children: [
                    {
                        path: "restaurant/:restaurantId",
                        element: <RestaurantPage />,
                        children: [
                            {
                                index: true,
                                element: <Navigate to="menu" replace />,
                            },
                            {
                                path: "menu",
                                element: <MenuPage />
                            },
                            {
                                path: "reviews",
                                element: <ReviewsPage />
                            },
                        ],
                    }
                ],
            },
            {
                path: "dish/:dishId",
                element: <DishPage />,
            },
        ]
    },

]);

export function App() {
    return (
        <Provider store={store}>
            <AuthContextProvider>
                <ThemeContextProvider>
                    <RouterProvider router={router} />
                </ThemeContextProvider>
            </AuthContextProvider>
        </Provider>
    );
}
