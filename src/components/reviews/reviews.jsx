import {ReviewItemContainer} from "../reviewItem/reviewItem-container";
import styles from "./reviews.module.css";

export const Reviews = ({ reviewItems }) => {
    return (
        <div className={styles.reviewsWrap}>
            <h3 className={styles.reviewsTitle}>Reviews</h3>
            <ul className={styles.reviewsList}>
                {reviewItems.map((reviewItemId) => (
                    <li className={styles.reviewsItem} key={reviewItemId}>
                        <ReviewItemContainer id={reviewItemId}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};
