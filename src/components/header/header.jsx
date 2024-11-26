import styles from "./header.module.css";

export const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <a href="#" className={styles.headerLogo}>Food delivery App</a>
            </header>
        </>
    );
};
