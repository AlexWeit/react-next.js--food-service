import {Container} from "../container/container";
import { SwitchThemeButton } from "../switch-theme-button/switch-theme-button";
import { AuthButton } from "../auth-button/auth-button";
import styles from "./header.module.css";

export const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <Container>
                    <div className={styles.headerWrap}>
                        <SwitchThemeButton />
                        <a href="/" className={styles.headerLogo}>Food delivery App</a>
                        <AuthButton />
                    </div>
                </Container>
            </header>
        </>
    );
};
