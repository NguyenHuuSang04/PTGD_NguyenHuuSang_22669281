import { createStore } from 'redux';

// Reducer function
const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

// Create store
const store = createStore(counterReducer);

export default store;