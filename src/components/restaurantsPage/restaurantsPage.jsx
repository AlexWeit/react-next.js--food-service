import { restaurantsData } from "../../mock-data/restaurants";
import { TabButton } from "../tabButton/tabButton";
import { Restaurant } from "../restaurant/restaurant";
import {useState} from "react";

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
            <h1>Restaurants</h1>

            {restaurantsData.map((restaurant) => (
                <TabButton
                    title={restaurant.name}
                    key={restaurant.id}
                    onClick={() => handleSetActiveRestaurantId(restaurant.id)}
                    isActive={restaurant.id === activeRestaurantId}
                />
            ))}

            {activeRestaurant && (
                <Restaurant restaurant={activeRestaurant}/>
            )}
            {activeRestaurant && (
                <Restaurant restaurant={activeRestaurant}/>
            )}
            {activeRestaurant && (
                <Restaurant restaurant={activeRestaurant}/>
            )}
            {activeRestaurant && (
                <Restaurant restaurant={activeRestaurant}/>
            )}


        </main>
    )
};
