import {DishCounter} from "../dish-counter/dish-counter";

export const MenuItem = ({ menuItem }) => {
    return (
        <>
            {menuItem.name}
            <DishCounter />
        </>
    );
};
