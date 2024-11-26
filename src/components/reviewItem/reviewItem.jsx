import styles from "./reviewItem.module.css"

export const ReviewItem = ({ reviewItem }) => {
    return (
        <>
            <div className={styles.reviewItemLeft}>
                <div className={styles.reviewItemText}>{reviewItem.text}</div>
                <div className={styles.reviewItemUser}>{reviewItem.user}</div>
            </div>
            <div className={styles.reviewItemRight}>
                <div className={styles.reviewItemRating}>{`${reviewItem.rating} ★`}</div>
            </div>

        </>
    );
};
