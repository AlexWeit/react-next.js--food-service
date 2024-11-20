//counter-component for adding dish in cart

import {useCount} from "./use-count";

export const Counter = () => {
    const { value, increase, decrease } = useCount({ min: 0, max: 5 });

    return (
        <div>
            <button onClick={increase}>+</button>
            {value}
            <button onClick={decrease}>-</button>
        </div>
    )
};
