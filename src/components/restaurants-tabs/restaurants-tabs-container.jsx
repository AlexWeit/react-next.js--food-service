import {useDispatch, useSelector} from "react-redux";
import {selectRestaurantsIds, selectRestaurantsRequestStatus} from "../../redux/entities/restaurants/restaurants-slice";
import {RestaurantsTabs} from "../restaurants-tabs/restaurants-tabs";
import {useEffect} from "react";
import {getRestaurants} from "../../redux/entities/restaurants/get-restaurants";

export const RestaurantsTabsContainer = () => {
    const dispatch = useDispatch();

    const restaurantsIds = useSelector(selectRestaurantsIds);

    const requestStatus = useSelector(selectRestaurantsRequestStatus);

    useEffect(() => {
        dispatch(getRestaurants());
    }, [dispatch]);

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
