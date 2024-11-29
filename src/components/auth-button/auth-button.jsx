import { useAuth } from "../auth-context/use-auth";
import styles from "./auth-button.module.css";
import {Button} from "../button/button";

export const AuthButton = () => {
    const { name, setName, isAuth } = useAuth();

    const text = !isAuth ? "Login" : `${name} Logout`;

    const loginLogout = () => {
        if (name === undefined) {
            setName("Alex");
        } else {
            setName(undefined);
        }
    };

    return (
        <Button
            type="button"
            extraClass={styles.authButton}
            onClick={loginLogout}>{text}</Button>
    )
};
