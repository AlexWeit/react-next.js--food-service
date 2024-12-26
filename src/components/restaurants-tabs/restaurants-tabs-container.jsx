"use client";

import {RestaurantsTabs} from "../restaurants-tabs/restaurants-tabs";
import {useGetRestaurantsQuery} from "../../redux/services/api/index";

export const RestaurantsTabsContainer = () => {

    const { data, isLoading, isError } = useGetRestaurantsQuery();

    if (isLoading) {
        return "loading ...";
    }

    if (isError) {
        return "error";
    }

    if (!data.length) {
        return null;
    }

    return (
        <RestaurantsTabs restaurants={data} />
    )
};
