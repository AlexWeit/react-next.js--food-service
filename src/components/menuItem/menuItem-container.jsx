import {useSelector} from "react-redux";
import {selectDishById} from "../../redux/entities/dishes/dishes-slice";
import { MenuItem } from "../menuItem/menuItem";

export const MenuItemContainer = (({ id }) => {
    const dish = useSelector((state) => selectDishById(state, id));

    if (!dish) {
        return null;
    }

    const { name, price, ingredients } = dish;

    return (
        <MenuItem name={name} price={price} ingredients={ingredients} />
    )
});
