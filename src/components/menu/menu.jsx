import {MenuItemContainer} from "../menuItem/menuItem-container";
import styles from "./menu.module.css";

export const Menu = ({ menuItems }) => {
    return (
        <div className={styles.menuWrap}>
            <h3 className={styles.menuTitle}>Menu</h3>
            <ul className={styles.menuList}>
                {menuItems.map((menuItemId) => (
                    <li className={styles.menuItem} key={menuItemId}>
                        <MenuItemContainer id={menuItemId}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};


