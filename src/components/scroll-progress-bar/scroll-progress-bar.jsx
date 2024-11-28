import { useProgress } from "./use-progress";

import styles from "./scroll-progress-bar.module.css";
import classNames from "classnames";

export const ScrollProgressBar = () => {
    const progress = useProgress();

    return (
        <div
            className={classNames(styles.progressBar)}
            style={{
                width: progress,
            }}
        />
    );
}
