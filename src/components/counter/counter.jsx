//default counter-component

export const Counter = ({ value, increase, decrease }) => {

    return (
        <div>
            <button type='button' onClick={increase}>+</button>
            {value}
            <button type='button' onClick={decrease}>-</button>
        </div>
    )
};
