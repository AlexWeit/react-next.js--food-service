import styles from "./tabsNav.module.css";
import {Container} from "../container/container";

export const TabsNav = ({ children }) => {
    return (
        <div className={styles.tabsNavWrap}>
            <Container>
                <div className={styles.tabsNav}>
                    {children}
                </div>
            </Container>
        </div>
    )
};
