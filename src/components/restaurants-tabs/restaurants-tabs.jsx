import {TabNavLink} from "../tab-navLink/tab-navLink";

export const RestaurantsTabs = ({ restaurants }) => {
    return (
        <>
            {restaurants.map(({ name, id }) => (
                <TabNavLink
                    path={`restaurants/${id}`}
                    title={name}
                    key={id}
                />
            ))}
        </>
    );
};
