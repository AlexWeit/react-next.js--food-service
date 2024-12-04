import {useSelector} from "react-redux";
import {selectDishById} from "../../redux/entities/dishes/dishes-slice";
import {DishCounter} from "../dish-counter/dish-counter";
import styles from "./cart-item.module.css";

export const CartItem = ({ id }) => {
    const dish = useSelector((state) => selectDishById(state, id));

    if (!dish) {
        return null;
    }

    return (
        <>
            {dish.name}
            <DishCounter id={id} />
        </>
    );
};
