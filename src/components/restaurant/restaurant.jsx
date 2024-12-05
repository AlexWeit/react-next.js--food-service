import styles from "./restaurant.module.css";
import {TabsNav} from "../tabsNav/tabsNav";
import {TabNavLink} from "../tab-navLink/tab-navLink";
import {Container} from "../container/container";
import { Outlet } from "react-router-dom";

export const Restaurant = ({ name }) => {

    if (!name) {
        return null;
    }

    return (
        <div className={styles.restaurantWrap}>
            <h2 className={styles.restaurantTitle}>{name}</h2>

            <TabsNav>
                <TabNavLink path="menu" title="Menu" />
                <TabNavLink path="reviews" title="Reviews" />
            </TabsNav>

            <Container>

                <Outlet />

            </Container>

        </div>
    );
};
