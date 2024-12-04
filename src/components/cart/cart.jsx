import {useSelector} from "react-redux";
import {selectCartItems} from "../../redux/ui/cart-slice";
import {CartItem} from "../cart-item/cart-item";
import styles from "./cart.module.css";
import {Container} from "../container/container";

export const Cart = () => {

    // cart items from cart-slice
    const items = useSelector(selectCartItems);

    //check if no items in cart
    if (!items.length) {
        return null;
    }

    return (
        <div className={styles.cart}>
            <Container>
                <h3 className={styles.cartTitle}>Cart</h3>
                <ul className={styles.cartList}>
                    {items.map(({id}) => (
                        <li key={id} className={styles.cartItem}>
                            <CartItem id={id} />
                        </li>
                    ))}
                </ul>
            </Container>
        </div>
    )
};
