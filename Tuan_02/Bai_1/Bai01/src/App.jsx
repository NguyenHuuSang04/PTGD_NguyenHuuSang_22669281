import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <>
     
  //   </>

  // )

   //Tạo 1 khung text nhập name vào và 1 button "Hello" thì in ra màn hình Hello name
   const [name, setName] = useState('');
   const [greeting, setGreeting] = useState('');
 
   const handleGreet = () => {
     setGreeting(`Hello, ${name}!`);
   };
 
   return (
     <div className="app-container">
       <input
         type="text"
         placeholder="Enter your name"
         value={name}
         onChange={(e) => setName(e.target.value)}
       />
       <button onClick={handleGreet}>Hello</button>
       <p>{greeting}</p>
     </div>
   );
}

export default App
