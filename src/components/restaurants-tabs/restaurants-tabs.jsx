import { RestaurantTabContainer } from "../restaurant-tab/restaurant-tab-container";

export const RestaurantsTabs = ({ restaurantsIds }) => {
    return (
        <>
            {restaurantsIds.map((id) => (
                <RestaurantTabContainer
                    key={id}
                    id={id}
                />
            ))}
        </>
    );
};
