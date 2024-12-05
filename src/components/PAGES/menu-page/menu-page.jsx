import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../../redux/entities/restaurants/restaurants-slice";
import {Menu} from "../../menu/menu";

export const MenuPage = () => {

    const { restaurantId } = useParams();

    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId),
    );

    const { menu } = restaurant;

    return (
        <>
            {Boolean(menu.length) && <Menu menuItems={menu} />}
        </>
    )
};
