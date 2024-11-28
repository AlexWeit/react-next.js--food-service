//default counter-component
import styles from "./counter.module.css";

export const Counter = ({ value, increase, decrease }) => {

    return (
        <div className={styles.counterWrap}>
            <div className={styles.value}>{value}</div>
            <div className={styles.buttons}>
                <button className={styles.button} type='button' onClick={increase}>+</button>
                <button className={styles.button} type='button' onClick={decrease}>-</button>
            </div>
        </div>
    )
};
