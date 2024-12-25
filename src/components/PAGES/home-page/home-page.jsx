"use client";

import Link from "next/link";
import {Container} from "../../container/container";
import styles from "./home-page.module.css";
import classNames from "classnames";
import {useTheme} from "../../theme-context/use-theme";

export const HomePage = () => {
    const { theme } = useTheme();

    return (
        <main className={styles.wrap}>
            <Container>
                <div className={styles.content}>
                    <p>Welcome to our food delivery App. </p>
                    <p>Choose restaurant and order your favorite dishes.</p>
                    <Link href='/restaurants'
                          className={classNames(styles.link, {
                              [styles.light]: theme === "light",
                              [styles.dark]: theme === "dark",
                          })
                    }>Go to restaurants list</Link>
                </div>
            </Container>
        </main>
    )
};
