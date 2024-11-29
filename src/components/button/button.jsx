import styles from "./button.module.css";
import classNames from "classnames";
import {useTheme} from "../theme-context/use-theme";

export const Button = ({ children, extraClass, type, onClick }) => {
    const { theme } = useTheme();

    return (
        <button
            type={type}
            className={classNames(styles.button, extraClass, {
                [styles.light]: theme === "light",
                [styles.dark]: theme === "dark",
            })}
            onClick={onClick}>
            {children}
        </button>
    )
};
