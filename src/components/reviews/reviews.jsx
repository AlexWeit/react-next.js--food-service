import {ReviewItem} from "../reviewItem/reviewItem";
import styles from "./reviews.module.css";

export const Reviews = ({ reviewItems }) => {
    return (
        <div className={styles.reviewsWrap}>
            <h3 className={styles.reviewsTitle}>Reviews</h3>
            <ul className={styles.reviewsList}>
                {reviewItems.map((reviewItem) => (
                    <li className={styles.reviewsItem} key={reviewItem.id}>
                        <ReviewItem reviewItem={reviewItem}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};
