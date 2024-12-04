import { useTheme } from "../theme-context/use-theme";
import { Button } from "../button/button";
import styles from "./switch-theme-button.module.css";

export const SwitchThemeButton = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <Button
            type="button"
            extraClass={styles.switchButton}
            onClick={toggleTheme}>Toggle Theme</Button>
    )
};
