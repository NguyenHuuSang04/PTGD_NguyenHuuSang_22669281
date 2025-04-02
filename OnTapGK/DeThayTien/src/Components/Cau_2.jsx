// import React, { useReducer } from "react";

//     const initialState = 0;
//     function reducer(state, action) {
//         switch(action.type) {
//             case 'INCREASE': return state + 1;
//             case 'DECREASE': return state -1;
//             case 'RESET': return 0;
//             default: return state;
//         }
//     }

//     function CounterUseReducer() {
//         const [count, dispatch] = useReducer(reducer, initialState);
//         return(
//             <div className="counter">
//                 <h2>useReducer Counter</h2>
//                 <p>{count}</p>
//                 <button onClick={() => dispatch({type: 'INCREASE'})}>Tăng</button>
//                 <button onClick={() => dispatch({type: 'DECREASE'})}>Giảm</button>
//                 <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
//             </div>
//         );
//     }
// export default CounterUseReducer;


import React, { useReducer } from "react";

const initialState = 0;
function reducer(state, action) {
    switch (action.type) {
        case "INCREASE":
            return state + 1;
        case "DECREASE":
            return state - 1;
        case "RESET":
            return 0;
        default:
            return state;
    }
}

function CounterUseReducer() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">useReducer Counter</h2>
            <p className="text-4xl font-semibold text-blue-500 mb-6">{count}</p>
            <div className="flex justify-center space-x-4">
                <button
                    onClick={() => dispatch({ type: "INCREASE" })}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                    Tăng
                </button>
                <button
                    onClick={() => dispatch({ type: "DECREASE" })}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                    Giảm
                </button>
                <button
                    onClick={() => dispatch({ type: "RESET" })}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default CounterUseReducer;