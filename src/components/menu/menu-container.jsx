"use client";

import {Menu} from "./menu";
import {useGetMenuByRestaurantIdQuery} from "../../redux/services/api/index";

export const MenuContainer = ({ restaurantId }) => {

    const { data, isLoading, isError } = useGetMenuByRestaurantIdQuery(restaurantId);

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
        <>
            {Boolean(data.length) && <Menu menuItems={data} />}
        </>
    )
};
