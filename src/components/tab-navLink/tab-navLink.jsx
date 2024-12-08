import classNames from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./tab-navLink.module.css";

export const TabNavLink = ({ path, title }) => {
    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                classNames(styles.link, isActive && styles.activeLink)
            }
        >
            {title}
        </NavLink>
    );
};
