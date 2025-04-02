import { useState } from "react";
function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    return { count, increment, decrement, reset };
}

export function CounterWithHook() {
    const { count, increment, decrement, reset } = useCounter();
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Custom Hook Counter</h2>
            <p className="text-4xl font-semibold text-blue-500 mb-6">{count}</p>
            <div className="flex justify-center space-x-4">
                <button
                    onClick={increment}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                    Tăng
                </button>
                <button
                    onClick={decrement}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                    Giảm
                </button>
                <button
                    onClick={reset}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}