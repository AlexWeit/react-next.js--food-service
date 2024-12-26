import { MenuContainer } from "../../menu/menu-container";

export const MenuPage = async ({ params }) => {

    const { restaurantId } = await params;

    return (
        <MenuContainer restaurantId={restaurantId} />
    )
};
