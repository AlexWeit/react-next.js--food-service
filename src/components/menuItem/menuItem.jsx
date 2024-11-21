import {Counter} from "../counter/counter";

export const MenuItem = ({ menuItem }) => {
    return (
        <>
            {menuItem.name}
            <Counter />
        </>
    );
};
