import { TabsNav } from "../tabsNav/tabsNav";
import { RestaurantTabButtonContainer } from "../restaurant-tabButton/restaurant-tabButton-container";
import { RestaurantContainer } from "../restaurant/restaurant-container";
import { Container } from "../container/container";
import { useState } from "react";
import styles from "./restaurants.module.css";
import {useSelector} from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice";

export const RestaurantsPage = () => {
    const restaurantsIds = useSelector(selectRestaurantsIds);

    const [activeRestaurantId, setActiveRestaurantId] = useState(
        restaurantsIds[0].id
    );

    const handleSetActiveRestaurantId = (id) => {
        if (activeRestaurantId === id) {
            return;
        }

        setActiveRestaurantId(id);
    };

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
                <div className={styles.restaurantsTabsHeader}>
                    <Container>
                        <TabsNav>
                            {restaurantsIds.map((id) => (
                                <RestaurantTabButtonContainer
                                    key={id}
                                    id={id}
                                    onClick={() => handleSetActiveRestaurantId(id)}
                                    isActive={id === activeRestaurantId}
                                />
                            ))}
                        </TabsNav>
                    </Container>
                </div>

                <div className={styles.restaurantsTabsContent}>
                    <Container>
                        {activeRestaurantId && (
                            <RestaurantContainer
                                id={activeRestaurantId}
                                key={activeRestaurantId}
                            />
                        )}
                    </Container>
                </div>
            </div>
        </main>
    )
};
