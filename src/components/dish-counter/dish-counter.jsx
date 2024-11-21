//use counter-component for adding dish in cart

import {Counter} from "../counter/counter";
import { useState } from 'react';

export const DishCounter = ({ min, max }) => {
    const [value, setValue] = useState(0);

    // functions for click events
    const increase = () => {
        if (value < max) {
            setValue(value + 1);
        }
    };

    const decrease = () => {
        if (value > min) {
            setValue(value - 1);
        }
    };

    return <Counter value={value} increase={increase} decrease={decrease} />;
};
