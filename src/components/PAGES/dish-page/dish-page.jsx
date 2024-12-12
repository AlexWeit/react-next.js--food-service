import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {MenuItem} from "../../menuItem/menuItem";
import {selectDishById} from "../../../redux/entities/dishes/dishes-slice";
import {Container} from "../../container/container";
import {useRequest} from "../../../redux/hooks/use-request";
import {getDishById} from "../../../redux/entities/dishes/get-dish-by-id";

export const DishPage = () => {

    const { dishId } = useParams();

    const dish = useSelector((state) => selectDishById(state, dishId));

    const requestStatus = useRequest(getDishById, dishId);

    if (requestStatus === "pending") {
        return "loading ...";
    }

    if (requestStatus === "rejected") {
        return "error";
    }

    if (!dishId) {
        return null;
    }

    const { name, price, ingredients } = dish;

    return (
        <main>
            <Container>
                <MenuItem name={name}
                          price={price}
                          ingredients={ingredients}
                          id={dishId}
                />
            </Container>
        </main>
    )
};
