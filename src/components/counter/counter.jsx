//default counter-component
import { useTheme } from "../theme-context/use-theme";
import styles from "./counter.module.css";
import classNames from "classnames";

export const Counter = ({ value, increase, decrease }) => {

    const { theme } = useTheme();

    return (
        <div className={styles.counterWrap}>
            <div className={styles.value}>{value}</div>
            <div className={styles.buttons}>
                <button
                    className={classNames(styles.button, {
                        [styles.light]: theme === "light",
                        [styles.dark]: theme === "dark",
                    })}
                    type='button'
                    onClick={increase}>
                    +
                </button>
                <button
                    className={classNames(styles.button, {
                        [styles.light]: theme === "light",
                        [styles.dark]: theme === "dark",
                    })}
                    type='button'
                    onClick={decrease}>
                    -
                </button>
            </div>
        </div>
    )
};
