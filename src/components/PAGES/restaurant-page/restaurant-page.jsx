import {useParams} from "react-router-dom";
import { RestaurantContainer } from "../../restaurant/restaurant-container";
import {useRequest} from "../../../redux/hooks/use-request";
import {getRestaurantById} from "../../../redux/entities/restaurants/get-restaurant-by-id";

export const RestaurantPage = () => {
    const { restaurantId } = useParams();

    const requestStatus = useRequest(getRestaurantById, restaurantId);

    if (requestStatus === "pending") {
        return "loading ...";
    }

    if (requestStatus === "rejected") {
        return "error";
    }

    if (!restaurantId) {
        return null;
    }

    return (
        <RestaurantContainer id={restaurantId}/>
    )
};
