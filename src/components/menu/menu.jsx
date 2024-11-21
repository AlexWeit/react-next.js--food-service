import {MenuItem} from "../menuItem/menuItem";

export const Menu = ({ menuItems }) => {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                {menuItems.map((menuItem) => (
                    <li key = {menuItem.id}>
                        <MenuItem menuItem={menuItem}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};


