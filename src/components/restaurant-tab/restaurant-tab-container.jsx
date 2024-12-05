import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurants/restaurants-slice";
import {TabNavLink} from "../tab-navLink/tab-navLink";

export const RestaurantTabContainer = (({ id }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return null;
    }

    return (
        <TabNavLink path={`restaurant/${id}`} title={restaurant.name} />
    )
});
