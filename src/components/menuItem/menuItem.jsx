import {DishCounter} from "../dish-counter/dish-counter";
import styles from "./menuItem.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { useAuth } from "../auth-context/use-auth";

export const MenuItem = ({ menuItem }) => {
    const { theme } = useTheme();

    const { isAuth } = useAuth();

    return (
        <>
            <div className={styles.menuItemLeft}>
                <h4 className={styles.menuItemName}>{menuItem.name}</h4>
                <p className={styles.menuItemIngredients}>{menuItem.ingredients.join(", ")}</p>
                <div className={classNames(styles.menuItemPrice, {
                    [styles.light]: theme === "light",
                    [styles.dark]: theme === "dark",
                })}>{`${menuItem.price}$`}</div>
            </div>
            <div className={styles.menuItemRight}>
                {isAuth && <DishCounter />}
            </div>
        </>
    );
};
