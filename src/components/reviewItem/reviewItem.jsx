import styles from "./reviewItem.module.css"
import classNames from "classnames";
import {useTheme} from "../theme-context/use-theme";

export const ReviewItem = ({ reviewItem }) => {
    const { theme } = useTheme();

    return (
        <>
            <div className={styles.reviewItemLeft}>
                <div className={styles.reviewItemText}>{reviewItem.text}</div>
                <div className={styles.reviewItemUser}>{reviewItem.user}</div>
            </div>
            <div className={styles.reviewItemRight}>
                <div className={classNames(styles.reviewItemRating, {
                    [styles.light]: theme === "light",
                    [styles.dark]: theme === "dark",
                })}>{`${reviewItem.rating} ★`}</div>
            </div>

        </>
    );
};
