import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../../redux/entities/restaurants/restaurants-slice";
import {Reviews} from "../../reviews/reviews";
import {ReviewForm} from "../../reviewForm/reviewForm";
import {useAuth} from "../../auth-context/use-auth";

export const ReviewsPage = () => {

    const { restaurantId } = useParams();

    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId),
    );

    const { reviews } = restaurant;

    const { isAuth } = useAuth();

    return (
        <>
            {Boolean(reviews.length) && <Reviews reviewItems={reviews} />}

            {isAuth && <ReviewForm />}
        </>
    )
};
