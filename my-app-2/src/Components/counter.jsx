import React, { useState } from 'react';

const Counter = (props) => {

    const {value} = props;

    const formatValue = () => {
        return value === 0 ? 'empty' : value;
    }

    const getBageClasses = () => {
        let classes = 'rounded-sm p-2 text-white mx-2 ';
        classes += value === 0 ? 'bg-warning' : 'bg-primary';
        return classes;
    };

    return (
        <div>
            <span>{props.name}</span>
            <span className={getBageClasses()}>{formatValue()}</span>
            <button onClick={() => props.onIncrement(props.id)}>+</button>
            <button onClick={() => props.onDecrement(props.id)}>-</button>
            <button onClick={() => props.onDelete(props.id)}>Удалить</button>
        </div>
    );
};

export default Counter;