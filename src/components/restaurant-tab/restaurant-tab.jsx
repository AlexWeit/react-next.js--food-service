import classNames from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./restaurant-tab.module.css";

export const RestaurantTab = ({ id, title }) => {
    return (
        <NavLink
            to={`restaurant/${id}`}
            className={({ isActive }) =>
                classNames(styles.link, isActive && styles.activeLink)
            }
        >
            {title}
        </NavLink>
    );
};
