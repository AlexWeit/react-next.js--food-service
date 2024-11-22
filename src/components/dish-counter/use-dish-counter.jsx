import { useState } from 'react';

export const useDishCount = ({ min, max }) => {
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

    return {
        value,
        increase,
        decrease
    };
};
