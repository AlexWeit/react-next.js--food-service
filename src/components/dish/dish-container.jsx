"use client";

import {MenuItem} from "../menuItem/menuItem";
import {useGetDishByIdQuery} from "../../redux/services/api";

export const DishContainer = ({ dishId }) => {

    const { data, isLoading, isError } = useGetDishByIdQuery(dishId);

    if (isLoading) {
        return "loading ...";
    }

    if (isError) {
        return "error";
    }

    if (!data) {
        return null;
    }

    const { name, price, ingredients, id } = data;

    return (
        <>
            <MenuItem name={name}
                      price={price}
                      ingredients={ingredients}
                      id={id}
            />
        </>
    )
};
