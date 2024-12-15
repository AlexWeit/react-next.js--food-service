import {useParams} from "react-router-dom";
import {Reviews} from "../../reviews/reviews";
import {ReviewForm} from "../../reviewForm/reviewForm";
import {useAuth} from "../../auth-context/use-auth";
import {
    useGetReviewsByRestaurantIdQuery,
    useGetUsersQuery,
    useAddReviewMutation
} from "../../../redux/services/api/index";
import { useCallback } from "react";

export const ReviewsPage = () => {

    const { isAuth } = useAuth();

    const { restaurantId } = useParams();

    const { data, isFetching: isGetReviewsFetching } = useGetReviewsByRestaurantIdQuery(restaurantId);
    useGetUsersQuery();

    const [addReview, { isLoading: isAddReviewFetching }] = useAddReviewMutation();

    const handleAddReview = useCallback(
        (review) => {
            addReview({ restaurantId, review });
        },
        [addReview, restaurantId]
    );

    if (isGetReviewsFetching || isAddReviewFetching) {
        return "...loading";
    }

    if (!data.length) {
        return null;
    }

    return (
        <>
            {Boolean(data.length) && <Reviews reviewItems={data} />}

            {isAuth && <ReviewForm onSubmit={handleAddReview}/>}
        </>
    )
};
