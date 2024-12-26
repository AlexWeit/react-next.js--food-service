import styles from "./restaurant.module.css";
import {TabsNav} from "../tabsNav/tabsNav";
import {TabNavLink} from "../tab-navLink/tab-navLink";
import {Container} from "../container/container";

export const Restaurant = ({ name, id }) => {

    if (!name) {
        return null;
    }

    return (
        <div className={styles.restaurantWrap}>
            <h2 className={styles.restaurantTitle}>{name}</h2>

            <TabsNav>
                <TabNavLink path={`/restaurants/${id}/menu`} title="Menu" />
                <TabNavLink path={`/restaurants/${id}/reviews`} title="Reviews" />
            </TabsNav>

        </div>
    );
};
