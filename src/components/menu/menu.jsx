import {MenuItem} from "../menuItem/menuItem";
import styles from "./menu.module.css";

export const Menu = ({ menuItems }) => {
    return (
        <div className={styles.menuWrap}>
            <h3 className={styles.menuTitle}>Menu</h3>
            <ul className={styles.menuList}>
                {menuItems.map((menuItem) => (
                    <li className={styles.menuItem} key = {menuItem.id}>
                        <MenuItem menuItem={menuItem}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};


