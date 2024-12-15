import styles from "./reviews.module.css";
import {ReviewItem} from "../reviewItem/reviewItem";

export const Reviews = ({ reviewItems }) => {
    return (
        <div className={styles.reviewsWrap}>
            <h3 className={styles.reviewsTitle}>Reviews</h3>
            <ul className={styles.reviewsList}>
                {reviewItems.map(({ id, userId, text, rating }) => (
                    <li className={styles.reviewsItem} key={id}>
                        <ReviewItem userId={userId} text={text} rating={rating} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
