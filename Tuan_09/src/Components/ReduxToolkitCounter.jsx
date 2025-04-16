// filepath: c:\Users\HPP\Documents\1_Programme\7_TRENLOP\NAM_3_HK2\PTGDUD\Labs\ThucHanhBT\PTGD_NguyenHuuSang_22669281\Tuan_09\src\ReduxToolkitCounter.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../ReduxToolkit/CounterSlice';

const ReduxToolkitCounter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Redux Toolkit Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Tăng</button>
            <button onClick={() => dispatch(decrement())}>Giảm</button>
        </div>
    );
};

export default ReduxToolkitCounter;