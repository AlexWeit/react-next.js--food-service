import {useSelector} from "react-redux";
import {selectRestaurantsIds} from "../../redux/entities/restaurants/restaurants-slice";
import {RestaurantsTabs} from "../restaurants-tabs/restaurants-tabs";

export const RestaurantsTabsContainer = () => {
    const restaurantsIds = useSelector(selectRestaurantsIds);

    if (!restaurantsIds.length) {
        return null;
    }

    return (
        <RestaurantsTabs restaurantsIds={restaurantsIds} />
    )
};
