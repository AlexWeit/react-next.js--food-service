import {DishCounter} from "../dish-counter/dish-counter";
import styles from "./menuItem.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { useAuth } from "../auth-context/use-auth";
import { NavLink } from "react-router-dom";

export const MenuItem = ({ name, price, ingredients, id }) => {
    const { theme } = useTheme();

    const { isAuth } = useAuth();

    return (
        <NavLink to={`/dish/${id}`} className={styles.menuItemLink}>
            <div className={styles.menuItemLeft}>
                <h4 className={styles.menuItemName}>{name}</h4>
                <p className={styles.menuItemIngredients}>{ingredients.join(", ")}</p>
                <div className={classNames(styles.menuItemPrice, {
                    [styles.light]: theme === "light",
                    [styles.dark]: theme === "dark",
                })}>{`${price}$`}</div>
            </div>
            <div className={styles.menuItemRight}>
                {isAuth && <DishCounter id={id} />}
            </div>
        </NavLink>
    );
};
