// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React from 'react';
import Header from './components/Header';
import RecipeCard from './components/RecipeCard';
import Footer from './components/Footer';
import styled from 'styled-components';
import './App.css'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const App = () => {
  const recipes = [
    { title: "Italian-style tomato salad", time: "14 minutes" },
    { title: "Vegetable and shrimp spaghetti", time: "15 minutes" },
    { title: "Lotus delight salad", time: "20 minutes" },
    { title: "Snack cakes", time: "21 minutes" },
  ];

  return (
    <Container>
      <Header />
      <h1>Emma Gonzalez's Recipe Box</h1>
      <RecipeGrid>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} title={recipe.title} time={recipe.time} />
        ))}
      </RecipeGrid>
      <Footer />
    </Container>
  );
};

export default App;
