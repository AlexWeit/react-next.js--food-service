//default counter-component
import styles from "./counter.module.css";

export const Counter = ({ value, increase, decrease }) => {

    return (
        <div className={styles.counterWrap}>
            <div className={styles.counterValue}>{value}</div>
            <div className={styles.counterBtns}>
                <button className={styles.counterBtn} type='button' onClick={increase}>+</button>
                <button className={styles.counterBtn} type='button' onClick={decrease}>-</button>
            </div>
        </div>
    )
};
