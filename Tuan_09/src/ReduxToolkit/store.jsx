// filepath: c:\Users\HPP\Documents\1_Programme\7_TRENLOP\NAM_3_HK2\PTGDUD\Labs\ThucHanhBT\PTGD_NguyenHuuSang_22669281\Tuan_09\src\redux\store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;