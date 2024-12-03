//use counter-component for adding dish in cart

import { Counter } from "../counter/counter";
import { useDispatch, useSelector } from "react-redux";
import { addToCart,
    removeFromCart,
    selectCartItemAmountById,
} from "../../redux/ui/cart-slice";

export const DishCounter = ({ id }) => {

    // helper for sending action in store
    const dispatch = useDispatch();

    const amount = useSelector((state) => selectCartItemAmountById(state, id)) || 0;

    const increase = () => dispatch(addToCart(id));
    const decrease = () => dispatch(removeFromCart(id));

    return <Counter value={amount} increase={increase} decrease={decrease} />;
};
