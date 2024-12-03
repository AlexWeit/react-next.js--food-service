import {useSelector} from "react-redux";
import {selectCartItems} from "../../redux/ui/cart-slice";
import {CartItem} from "../cart-item/cart-item";

export const Cart = () => {

    // cart items from cart-slice
    const items = useSelector(selectCartItems);

    //check if no items in cart
    if (!items.length) {
        return null;
    }

    return (
        <div>
            <h3>Cart</h3>
            <ul>
                {items.map(({id}) => (
                    <li key={id}>
                        <CartItem id={id} />
                    </li>
                ))}
            </ul>
        </div>
    )
};
