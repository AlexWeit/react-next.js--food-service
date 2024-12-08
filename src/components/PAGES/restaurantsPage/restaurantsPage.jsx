import { TabsNav } from "../../tabsNav/tabsNav";
import { RestaurantTabContainer } from "../../restaurant-tab/restaurant-tab-container";
import styles from "./restaurants.module.css";
import {useSelector} from "react-redux";
import { selectRestaurantsIds } from "../../../redux/entities/restaurants/restaurants-slice";
import { Outlet } from "react-router-dom";

export const RestaurantsPage = () => {
    const restaurantsIds = useSelector(selectRestaurantsIds);

    return (
        <main>
            <div className={styles.restaurantsHeader}>
                <img src="/images/header-img.jpg"
                     className={styles.restaurantsHeaderImg}
                     alt="restaurantsHeaderBanner" />
                <div className={styles.restaurantsHeaderTitleWrap}>
                    <h1 className={styles.restaurantsHeaderTitle}>Restaurants</h1>
                </div>
            </div>

            <div className={styles.restaurantsTabs}>
                <TabsNav>
                    {restaurantsIds.map((id) => (
                        <RestaurantTabContainer
                            key={id}
                            id={id}
                        />
                    ))}
                </TabsNav>

                <div className={styles.restaurantsTabsContent}>

                    <Outlet />

                </div>
            </div>
        </main>
    )
};
