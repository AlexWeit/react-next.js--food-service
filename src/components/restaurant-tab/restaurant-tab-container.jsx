import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurants/restaurants-slice";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";

export const RestaurantTabContainer = (({ id }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return null;
    }

    return (
        <RestaurantTab title={restaurant.name} id={id} />
    )
});
