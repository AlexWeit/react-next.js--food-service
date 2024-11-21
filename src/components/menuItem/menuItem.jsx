// import {Counter} from "../counter/counter";
import {DishCounter} from "../dish-counter/dish-counter";

export const MenuItem = ({ menuItem }) => {
    return (
        <>
            {menuItem.name}
            {/*<Counter />*/}
            <DishCounter min={0} max={5}/>
        </>
    );
};
