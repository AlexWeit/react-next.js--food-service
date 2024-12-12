import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../../redux/entities/restaurants/restaurants-slice";
import {Reviews} from "../../reviews/reviews";
import {ReviewForm} from "../../reviewForm/reviewForm";
import {useAuth} from "../../auth-context/use-auth";
import {useRequest} from "../../../redux/hooks/use-request";
import {getReviews} from "../../../redux/entities/reviews/get-reviews";
import {getUsers} from "../../../redux/entities/users/get-users";

export const ReviewsPage = () => {

    const { restaurantId } = useParams();

    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId),
    );

    const reviewsRequestStatus = useRequest(getReviews, restaurantId);
    const usersRequestStatus = useRequest(getUsers);

    if (reviewsRequestStatus === "pending" || usersRequestStatus === "pending") {
        return "loading ...";
    }

    if (reviewsRequestStatus === "rejected" || usersRequestStatus === "rejected") {
        return "error";
    }

    if (!restaurantId) {
        return null;
    }

    const { reviews } = restaurant;

    const { isAuth } = useAuth();

    return (
        <>
            {Boolean(reviews.length) && <Reviews reviewItems={reviews} />}

            {isAuth && <ReviewForm />}
        </>
    )
};
