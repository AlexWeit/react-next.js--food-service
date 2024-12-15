import {useParams} from "react-router-dom";
import {Menu} from "../../menu/menu";
import {useGetMenuByRestaurantIdQuery} from "../../../redux/services/api/index";

export const MenuPage = () => {

    const { restaurantId } = useParams();

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
