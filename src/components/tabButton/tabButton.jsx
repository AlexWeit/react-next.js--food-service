import classNames from "classnames";
import styles from "./tabButton.module.css";

export const TabButton = ({ title, onClick, isActive }) => {

    return (
        <button className={classNames(styles.tab, {
            [styles.tabSelected]: isActive,
        })} disabled={isActive} onClick={onClick}>
            {title}
        </button>
    )
}
