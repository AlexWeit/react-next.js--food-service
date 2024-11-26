import {DishCounter} from "../dish-counter/dish-counter";
import styles from "./menuItem.module.css";

export const MenuItem = ({ menuItem }) => {
    return (
        <>
            <div className={styles.menuItemLeft}>
                <h4 className={styles.menuItemName}>{menuItem.name}</h4>
                <p className={styles.menuItemIngredients}>{menuItem.ingredients.join(", ")}</p>
                <div className={styles.menuItemPrice}>{`${menuItem.price}$`}</div>
            </div>
            <div className={styles.menuItemRight}>
                <DishCounter />
            </div>
        </>
    );
};
