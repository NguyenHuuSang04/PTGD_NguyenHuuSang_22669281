import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ReduxCounter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Redux Counter: {count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>Tăng</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Giảm</button>
        </div>
    );
};

export default ReduxCounter;