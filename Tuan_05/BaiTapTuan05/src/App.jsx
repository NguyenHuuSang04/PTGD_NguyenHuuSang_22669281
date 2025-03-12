
// export default App
import React, { useReducer, useState } from 'react';

// Reducer xử lý các phép tính
const calculatorReducer = (state, action) => {
  const { type, payload } = action;
  const { number1, number2 } = payload;

  switch (type) {
    case 'ADD':
      return { result: number1 + number2 };// thực hiện phép cộng
    case 'SUBTRACT':
      return { result: number1 - number2 }; // thực hiện phép trừ
    case 'MULTIPLY':
      return { result: number1 * number2 };
    case 'DIVIDE':
      return { result: number2 !== 0 ? number1 / number2 : 'Không chia được cho 0' };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(calculatorReducer, { result: 0 });
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const handleCalculate = (type) => {
    dispatch({
      type,
      payload: {
        number1: parseFloat(number1),
        number2: parseFloat(number2)
      }
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🧮 Máy tính đơn giản (useReducer)</h2>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        placeholder="Số thứ nhất"
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        placeholder="Số thứ hai"
        style={{ marginLeft: 10 }}
      />
      <div style={{ marginTop: 10 }}>
        <button onClick={() => handleCalculate('ADD')}>+</button>
        <button onClick={() => handleCalculate('SUBTRACT')}>-</button>
        <button onClick={() => handleCalculate('MULTIPLY')}>×</button>
        <button onClick={() => handleCalculate('DIVIDE')}>÷</button>
      </div>
      <h3 style={{ marginTop: 20 }}>Kết quả: {state.result}</h3>
    </div>
  );
}

export default App;
