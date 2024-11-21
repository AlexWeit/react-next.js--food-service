import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
    name: "",
    text: "",
    rating: "",
};

const SET_NAME_ACTION = "SET_NAME";
const SET_TEXT_ACTION = "SET_TEXT";
const SET_RATING_ACTION = "SET_RATING";
const SET_RESET_FORM_ACTION = "SET_RESET_FORM";

// action: { type: '', payload: '' }
const reducer = (state, { type, payload }) => {
    switch (type) {
        case SET_NAME_ACTION:
            return { ...DEFAULT_FORM_VALUE, name: payload };
        case SET_TEXT_ACTION:
            return { ...state, text: payload };
        case SET_RATING_ACTION:
            return { ...state, rating: payload };
        case SET_RESET_FORM_ACTION:
            return DEFAULT_FORM_VALUE;
        default:
            return state;
    }
};

export const useForm = () => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    const setName = (name) => {
        dispatch({ type: SET_NAME_ACTION, payload: name });
    };

    const setText = (text) => {
        dispatch({ type: SET_TEXT_ACTION, payload: text });
    };

    const setRating = (rating) => {
        dispatch({ type: SET_RATING_ACTION, payload: rating });
    };

    const setResetForm = () => {
        dispatch({ type: SET_RESET_FORM_ACTION });
    };

    return {
        form,
        setName,
        setText,
        setRating,
        setResetForm,
    };
};
