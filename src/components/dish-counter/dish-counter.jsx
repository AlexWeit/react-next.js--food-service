//use counter-component for adding dish in cart

import { Counter } from "../counter/counter";
import { useDishCount } from './use-dish-counter';

export const DishCounter = () => {
    const { value, increase, decrease } = useDishCount({ min: 0, max: 5 });

    return <Counter value={value} increase={increase} decrease={decrease} />;
};
