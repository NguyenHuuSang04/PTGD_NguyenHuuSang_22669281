import React, { useReducer } from 'react';

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error('Invalid action type');
    }
};

const UseReducerCounter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <h1>useReducer Counter: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>Tăng</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Giảm</button>
        </div>
    );
};

export default UseReducerCounter;