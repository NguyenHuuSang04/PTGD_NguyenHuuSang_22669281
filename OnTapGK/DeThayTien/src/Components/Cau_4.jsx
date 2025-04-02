import React, { useState, memo, useMemo, useCallback } from "react";

// câu 4a
// Component con được ghi nhớ bằng React.memo
const MemoizedChild = memo(({ value }) => {
    console.log("MemoizedChild render");
    return <p className="text-lg text-blue-500">Value: {value}</p>;
});

export function ParentComponent() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    console.log("ParentComponent render");
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">React.memo Example</h2>
            <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mb-4"
            >
                Increment Count
            </button>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something"
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            {/* MemoizedChild chỉ render lại khi prop 'value' thay đổi */}
            <MemoizedChild value={count} />
        </div>
    );
}


// 4b. useMemo
export function UseMemoExample() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    // Sử dụng useMemo để ghi nhớ giá trị tính toán
    const expensiveCalculation = useMemo(() => {
        console.log("Calculating...");
        // Giả sử đây là một phép tính phức tạp
        return count * 2;
    }, [count]); // Chỉ tính toán lại khi `count` thay đổi
    console.log("UseMemoExample...");
    return (
        <div className="p-6 font-sans">
            <h1 className="text-2xl font-bold text-green-600 mb-4">useMemo Example</h1>
            <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mb-4"
            >
                Increment Count
            </button>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something"
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <p className="text-lg text-blue-500">
                Expensive Calculation Result: {expensiveCalculation}
            </p>
        </div>
    );
}


// //Câu 4c: useCallBack
// export function WithUseCallback() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log("Button clicked!");
//   }, []);

//   console.log("Component re-rendered!");

//   return (
//     <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md text-center">
//       <h1 className="text-2xl font-bold text-green-600 mb-4">useCallback Example</h1>
//       <p className="text-lg text-blue-500 mb-4">Count: {count}</p>
//       <button
//         onClick={() => setCount(count + 1)}
//         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mb-4"
//       >
//         Increase
//       </button>
//       <ChildComponent onClick={handleClick} />
//     </div>
//   );
// }
// function ChildComponent({ onClick }) {
//   console.log("Child re-rendered!");
//   return (
//     <button
//       onClick={onClick}
//       className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
//     >
//       Click Me
//     </button>
//   );
// }

//Câu 4c
// Component con nhận hàm callback từ component cha
const ChildComponent = React.memo(({ onClick }) => {
    console.log("ChildComponent render");
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
        >
            Click Me
        </button>
    );
});

export function UseCallbackExample() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    // Sử dụng useCallback để ghi nhớ hàm callback
    const handleClick = useCallback(() => {
        console.log("Button clicked!");
    }, []); // Hàm chỉ được tạo lại khi các phụ thuộc trong mảng thay đổi

    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md text-center">
            <h1 className="text-2xl font-bold text-green-600 mb-4">useCallback Example</h1>
            <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mb-4"
            >
                Increment Count
            </button>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something"
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <p className="text-lg text-blue-500 mb-4">Count: {count}</p>
            {/* Truyền hàm callback vào component con */}
            <ChildComponent onClick={handleClick} />
        </div>
    );
}
