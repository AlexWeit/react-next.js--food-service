import { RestaurantContainer } from "../../restaurant/restaurant-container";
import {Container} from "../../container/container";

export const RestaurantPage = async ({ params, children }) => {
    const { restaurantId } = await params;

    return (
        <>

            <RestaurantContainer id={restaurantId}/>
            <Container>

                { children }

            </Container>
        </>

    )
};
