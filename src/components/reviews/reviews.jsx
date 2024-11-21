import {ReviewItem} from "../reviewItem/reviewItem";

export const Reviews = ({ reviewItems }) => {
    return (
        <div>
            <h3>Reviews</h3>
            <ul>
                {reviewItems.map((reviewItem) => (
                    <li key={reviewItem.id}>
                        <ReviewItem reviewItem={reviewItem}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};
