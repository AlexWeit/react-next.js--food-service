"use client";

import { Restaurant } from "../restaurant/restaurant";
import {useGetRestaurantsQuery} from "../../redux/services/api";

export const RestaurantContainer = (({ id }) => {

    const { data: restaurant } = useGetRestaurantsQuery(undefined, {

        // get from cache
        selectFromResult: (result) => ({
            ...result,
            data: result?.data?.find(({ id: restaurantId }) => restaurantId === id),
        }),
    });

    if (!restaurant) {
        return null;
    }

    const { name, menu, reviews } = restaurant;

    return (
        <Restaurant name={name} menu={menu} reviews={reviews} id={id}/>
    )
});
