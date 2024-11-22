import { useForm } from "./use-form";
import {Counter} from "../counter/counter";

export const ReviewForm = () => {

    const { form, setName, setText, setRating, setResetForm } = useForm();

    const { name, text, rating } = form;

    //for rating counter
    const increase = () => {
        if (rating < 5) {
            setRating(rating + 1);
        }
    };

    //for rating counter
    const decrease = () => {
        if (rating > 1) {
            setRating(rating - 1);
        }
    };

    return (
        <form>
            <div>
                <span>Name</span>
                <input
                    type='text'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>

            <div>
                <span>Text</span>
                <input
                    type='text'
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
            </div>
            <div>
                <span>Rating</span>
                <Counter
                    increase={increase}
                    decrease={decrease}
                    value={rating}
                />

            </div>
            <button type='reset'
                    onClick={setResetForm}>Clear form</button>
        </form>
    );
};
