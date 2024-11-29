import { useForm } from "./use-form";
import {Counter} from "../counter/counter";
import classNames from "classnames";
import styles from "./reviewForm.module.css";
import {Button} from "../button/button";

export const ReviewForm = () => {

    const { form, setName, setText, setRating, setResetForm } = useForm();

    const { name, text, rating } = form;

    //for rating counter
    const increase = () => {
        if (rating < 5) {
            setRating(rating + 1);
        }
    };

    //for rating counter
    const decrease = () => {
        if (rating > 1) {
            setRating(rating - 1);
        }
    };

    return (
        <div className={styles.reviewFormWrap}>
            <h4 className={styles.reviewFormTitle}>Leave your review</h4>
            <form className={styles.reviewForm}>
                <div className={styles.reviewFormItem}>
                    <span className={styles.reviewFormLabel}>Name</span>
                    <input
                        className={styles.reviewFormInput}
                        type='text'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>

                <div className={styles.reviewFormItem}>
                    <span className={styles.reviewFormLabel}>Text</span>
                    <textarea
                        className={classNames(styles.reviewFormInput, styles.reviewFormTextarea)}
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                    />
                </div>
                <div className={styles.reviewFormItem}>
                    <span  className={styles.reviewFormLabel}>Rating</span>
                    <Counter
                        increase={increase}
                        decrease={decrease}
                        value={rating}
                    />

                </div>

                <Button
                    type="reset"
                    extraClass={styles.reviewFormButton}
                    onClick={setResetForm}>Clear form</Button>
            </form>
        </div>
    );
};
