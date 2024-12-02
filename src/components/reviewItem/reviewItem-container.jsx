import {useSelector} from "react-redux";
import {selectReviewById} from "../../redux/entities/reviews/reviews-slice";
import {ReviewItem} from "../reviewItem/reviewItem";

export const ReviewItemContainer = (({ id }) => {
    const review = useSelector((state) => selectReviewById(state, id));

    if (!review) {
        return null;
    }

    const { userId, text, rating } = review;

    return (
        <ReviewItem userId={userId} text={text} rating={rating} />
    )
});
