import { Menu } from "../menu/menu";
import { Reviews } from "../reviews/reviews";
import {ReviewForm} from "../reviewForm/reviewForm";

export const Restaurant = ({ restaurant }) => {
    const { name, menu, reviews } = restaurant;

    if (!name || menu.length === 0) {
        return null;
    }

    return (
        <div>
            <h2>{name}</h2>
            {Boolean(menu.length) && <Menu menuItems={menu} />}
            {Boolean(reviews.length) && <Reviews reviewItems={reviews} />}
            <ReviewForm />
        </div>
    );
};
