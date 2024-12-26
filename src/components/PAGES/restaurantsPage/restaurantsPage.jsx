import { TabsNav } from "../../tabsNav/tabsNav";
import { RestaurantsTabsContainer } from "../../restaurants-tabs/restaurants-tabs-container";
import styles from "./restaurants.module.css";

export const RestaurantsPage = ({ children }) => {

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
                    <RestaurantsTabsContainer />
                </TabsNav>

                <div className={styles.restaurantsTabsContent}>

                    { children }

                </div>
            </div>
        </main>
    )
};
