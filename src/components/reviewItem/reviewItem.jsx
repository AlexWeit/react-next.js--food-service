import styles from "./reviewItem.module.css"
import classNames from "classnames";
import {useTheme} from "../theme-context/use-theme";
import {UserContainer} from "../user/user-container";

export const ReviewItem = ({ userId, text, rating }) => {
    const { theme } = useTheme();

    return (
        <>
            <div className={styles.reviewItemLeft}>
                <div className={styles.reviewItemText}>{text}</div>
                <div className={styles.reviewItemUser}>
                    <UserContainer id={userId}/>
                </div>

            </div>
            <div className={styles.reviewItemRight}>
                <div className={classNames(styles.reviewItemRating, {
                    [styles.light]: theme === "light",
                    [styles.dark]: theme === "dark",
                })}>{`${rating} ★`}</div>
            </div>

        </>
    );
};
