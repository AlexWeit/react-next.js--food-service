import { SwitchThemeButton } from "../switch-theme-button/switch-theme-button";
import styles from "./header.module.css";
import {Container} from "../container/container";

export const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <Container>
                    <div className={styles.headerWrap}>
                        <SwitchThemeButton />
                        <a href="#" className={styles.headerLogo}>Food delivery App</a>
                        <div>Auth btn</div>
                    </div>
                </Container>
            </header>
        </>
    );
};
