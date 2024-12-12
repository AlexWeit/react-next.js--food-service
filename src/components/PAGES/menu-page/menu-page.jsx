import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../../redux/entities/restaurants/restaurants-slice";
import {Menu} from "../../menu/menu";
import {useRequest} from "../../../redux/hooks/use-request";
import {getMenu} from "../../../redux/entities/dishes/get-menu";

export const MenuPage = () => {

    const { restaurantId } = useParams();

    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId),
    );

    const requestStatus = useRequest(getMenu, restaurantId);

    if (requestStatus === "pending") {
        return "loading ...";
    }

    if (requestStatus === "rejected") {
        return "error";
    }

    if (!restaurantId) {
        return null;
    }

    const { menu } = restaurant;

    return (
        <>
            {Boolean(menu.length) && <Menu menuItems={menu} />}
        </>
    )
};
