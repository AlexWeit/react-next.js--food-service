import styles from "./reviewItem.module.css"
import classNames from "classnames";
import {useTheme} from "../theme-context/use-theme";
import {useSelector} from "react-redux";
import {selectUserById} from "../../redux/entities/users/users-slice";

export const ReviewItem = ({ userId, text, rating }) => {
    const { theme } = useTheme();

    const user = useSelector((state) => selectUserById(state, userId));

    return (
        <>
            <div className={styles.reviewItemLeft}>
                <div className={styles.reviewItemText}>{text}</div>
                <div className={styles.reviewItemUser}>{user.name}</div>
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
