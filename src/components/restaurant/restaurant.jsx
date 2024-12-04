import { Menu } from "../menu/menu";
import { Reviews } from "../reviews/reviews";
import { ReviewForm } from "../reviewForm/reviewForm";
import { useAuth } from "../auth-context/use-auth";
import styles from "./restaurant.module.css";

export const Restaurant = ({ name, menu, reviews }) => {

    if (!name) {
        return null;
    }

    const { isAuth } = useAuth();

    return (
        <div className={styles.restaurantWrap}>
            <h2 className={styles.restaurantTitle}>{name}</h2>

            {Boolean(menu.length) && <Menu menuItems={menu} />}

            {Boolean(reviews.length) && <Reviews reviewItems={reviews} />}

            {isAuth && <ReviewForm />}
        </div>
    );
};
