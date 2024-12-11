import {useSelector} from "react-redux";
import {selectRestaurantsIds} from "../../redux/entities/restaurants/restaurants-slice";
import {RestaurantsTabs} from "../restaurants-tabs/restaurants-tabs";
import {getRestaurants} from "../../redux/entities/restaurants/get-restaurants";
import {useRequest} from "../../redux/hooks/use-request";

export const RestaurantsTabsContainer = () => {

    const restaurantsIds = useSelector(selectRestaurantsIds);

    const requestStatus = useRequest(getRestaurants);

    if (requestStatus === "pending") {
        return "loading ...";
    }

    if (requestStatus === "rejected") {
        return "error";
    }

    if (!restaurantsIds.length) {
        return null;
    }

    return (
        <RestaurantsTabs restaurantsIds={restaurantsIds} />
    )
};
