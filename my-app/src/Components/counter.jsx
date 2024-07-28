import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);
    const [tags, setTags] = useState(['tag1', 'tag2', 'tag3']);

    const formatCount = () => {
        return count === 0 ? 'empty' : count;
    }

    const getBageClasses = () => {
        let classes = 'rounded-sm p-2 text-white mx-2 ';
        classes += count === 0 ? 'bg-warning' : 'bg-primary';
        return classes;
    };

    const handleIncrement = () => {
       setCount((prevState) => prevState + 1);
    };

    const handleDecrement = () => {
        setCount((prevState) => prevState > 0 ? prevState - 1 : 0);
     };

     const handleTagChange = (id) => {
        setTags(prevState => prevState.filter(tag => tag !== id));
     };

     const renderTags = () => {
        {
            /*если тегов нет то будет ошибка поэтому пишем условие*/
            /*Есть еще вариант рендеринга в том случае если тегов нет
                return tags.length !== 0 && tags.map((tag) => (
                    <li
                        ...
                    </li>
                )) : <div class="btn btn-danger">No tags</div>;
            
            */
        }
        return tags.length !== 0 && tags.map((tag) => (
            <li
                key={tag}
                onClick={() => handleTagChange(tag)}
                className='btn text-white bg-primary mx-2'>
                    {tag};
            </li>
        ));
    };
    
    if (tags.length !== 0) {
        return (
            <>
                <ul className='flex p-0'>
                    {renderTags()}
                </ul>
            </>
        );
    }

    return (
        <>
            <ul className='flex p-0'>
                {renderTags()}
            </ul>
            <span className={getBageClasses()}>{formatCount()}</span>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </>
    );
};

export default Counter;