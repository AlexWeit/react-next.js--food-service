import { restaurantsData } from "../../mock-data/restaurants";
import { TabButton } from "../tabButton/tabButton";
import { Restaurant } from "../restaurant/restaurant";
import { Container } from "../container/container";
import {useState} from "react";
import styles from "./restaurants.module.css";

export const RestaurantsPage = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantsData[0].id);

    const activeRestaurant = restaurantsData.find(({ id }) => id === activeRestaurantId);

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

            <div className="contentTabs">
                <div className="tabsHeader">
                    <Container>
                        <div className="tabsNav">
                            {restaurantsData.map((restaurant) => (
                                <TabButton
                                    title={restaurant.name}
                                    key={restaurant.id}
                                    onClick={() => handleSetActiveRestaurantId(restaurant.id)}
                                    isActive={restaurant.id === activeRestaurantId}
                                />
                            ))}
                        </div>
                    </Container>
                </div>

                <div className="tabsContent">
                    <Container>
                        {activeRestaurant && (
                            <Restaurant restaurant={activeRestaurant}/>
                        )}
                    </Container>
                </div>
            </div>


            {/*{activeRestaurant && (*/}
            {/*    <Restaurant restaurant={activeRestaurant}/>*/}
            {/*)}*/}
            {/*{activeRestaurant && (*/}
            {/*    <Restaurant restaurant={activeRestaurant}/>*/}
            {/*)}*/}
            {/*{activeRestaurant && (*/}
            {/*    <Restaurant restaurant={activeRestaurant}/>*/}
            {/*)}*/}


        </main>
    )
};
