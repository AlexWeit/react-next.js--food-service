"use client";

import {DishCounter} from "../dish-counter/dish-counter";
import styles from "./menuItem.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { useAuth } from "../auth-context/use-auth";
import Link from "next/link";

export const MenuItem = ({ name, price, ingredients, id }) => {
    const { theme } = useTheme();

    const { isAuth } = useAuth();

    return (
        <div className={styles.menuItemLink}>
            <div className={styles.menuItemLeft}>
                <Link href={`/dish/${id}`}>
                    <h4 className={styles.menuItemName}>{name}</h4>
                </Link>

                <p className={styles.menuItemIngredients}>{ingredients.join(", ")}</p>
                <div className={classNames(styles.menuItemPrice, {
                    [styles.light]: theme === "light",
                    [styles.dark]: theme === "dark",
                })}>{`${price}$`}</div>
            </div>
            <div className={styles.menuItemRight}>
                {isAuth && <DishCounter id={id} />}
            </div>
        </div>
    );
};
