import styles from "./tabsNav.module.css";

export const TabsNav = ({ children }) => {
    return (
        <div className={styles.tabsNav}>
            {children}
        </div>
    )
};
