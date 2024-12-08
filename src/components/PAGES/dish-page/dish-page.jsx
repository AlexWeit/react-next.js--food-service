import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {MenuItem} from "../../menuItem/menuItem";
import {selectDishById} from "../../../redux/entities/dishes/dishes-slice";
import {Container} from "../../container/container";

export const DishPage = () => {

    const { dishId } = useParams();

    const dish = useSelector((state) => selectDishById(state, dishId));

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
