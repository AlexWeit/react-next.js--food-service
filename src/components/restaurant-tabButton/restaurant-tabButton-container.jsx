import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurants/restaurants-slice";
import { TabButton } from "../tabButton/tabButton";

export const RestaurantTabButtonContainer = (({ id, onClick, isActive }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return null;
    }

    return (
        <TabButton title={restaurant.name} onClick={onClick} isActive={isActive} />
    )
});
