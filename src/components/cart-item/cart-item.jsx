import {DishCounter} from "../dish-counter/dish-counter";
import styles from "./cart-item.module.css";
import {useGetMenuByRestaurantIdQuery} from "../../redux/services/api";

export const CartItem = ({ id }) => {
    const { data: dish, isLoading, isError } = useGetMenuByRestaurantIdQuery(undefined, {

        // get from cache
        selectFromResult: (result) => ({
            ...result,
            data: result?.data?.find(({ id: restaurantId }) => restaurantId === id),
        }),
    });

    if (isLoading) {
        return "loading ...";
    }

    if (isError) {
        return "error";
    }

    if (!dish?.name) {
        return;
    }

    return (
        <>
            {dish.name}
            <DishCounter id={id} />
        </>
    );
};
