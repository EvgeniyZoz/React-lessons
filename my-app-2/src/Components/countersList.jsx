import React, {useState} from 'react';
import Counter from "./counter";

const СountersList = () => {

    const initialState = [
        {id : 0, value: 0, name:'Ложка'},
        {id : 1, value: 4, name:'Тарелка'},
        {id : 2, value: 0, name:'Вилка'}
    ];
        
    const [counters, setCounters] = useState(initialState);
    
    console.log(counters);

    const handleDelete = (id) => {
        console.log('handleDelete', id);
        const newCounters = counters.filter(c => c.id !== id); 
        setCounters(newCounters);
    };

    const handleReset = () => {
        //console.log('handleReset');
        setCounters(initialState);
    };

    const handleIncrement = (id) => {
        const elementIndex = counters.findIndex(c => c.id === id);
        const newCounters = [...counters];
        newCounters[elementIndex].value++;
        setCounters(newCounters);
    };

    const handleDecrement = (id) => {
        const elementIndex = counters.findIndex(c => c.id === id);
        const newCounters = [...counters];
        newCounters[elementIndex].value--;
        setCounters(newCounters);
    };

    const handleUpdate = () => {
        const updateState = [
            {id : 0, value: 5, name:'Ложка'},
            {id : 1, value: 9, name:'Тарелка'},
            {id : 2, value: 11, name:'Вилка'}
        ];
        setCounters(updateState);
    };

    return (
        <>
            {counters.map((count) => (
                <Counter
                    key={count.id}
                    {...count}
                    onDelete={handleDelete} onIncrement={handleIncrement} onDecrement={handleDecrement} />
            ))}
            <button onClick={handleReset}>Сброс</button>
            <button onClick={handleUpdate}>Новое состояние</button>
        </>
    )
};

export default СountersList;


