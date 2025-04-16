import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Counter App</h1>
            <p className="text-lg font-medium text-gray-600 mb-6">Count is <span className="text-blue-500">{count}</span></p>
            <div className="flex space-x-4">
                <button
                    onClick={() => dispatch(increment())}
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
                >
                    Increment
                </button>
                <button
                    onClick={() => dispatch(decrement())}
                    className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition"
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default Counter;