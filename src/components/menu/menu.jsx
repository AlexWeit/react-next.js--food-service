import styles from "./menu.module.css";
import {MenuItem} from "../menuItem/menuItem";

export const Menu = ({ menuItems }) => {
    return (
        <div className={styles.menuWrap}>
            <h3 className={styles.menuTitle}>Menu</h3>
            <ul className={styles.menuList}>
                {menuItems.map(({id, name, price, ingredients}) => (
                    <li className={styles.menuItem} key={id}>
                        <MenuItem name={name} price={price} ingredients={ingredients} id={id} />
                    </li>
                ))}
            </ul>
        </div>
    );
};


