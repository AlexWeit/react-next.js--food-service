import { useForm } from "./use-form";

export const ReviewForm = () => {

    const { form, setName, setText, setRating, setResetForm } = useForm();

    const { name, text, rating } = form;

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
                <input
                    type='text'
                    value={rating}
                    onChange={(event) => setRating(event.target.value)}
                />
            </div>
            <button type='reset'
                    onClick={setResetForm}>Clear form</button>
        </form>
    );
};
