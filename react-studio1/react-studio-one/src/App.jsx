import { useState } from 'react'
import './App.css'
import RecipeDescription from './components/Description';
import RecipeIngredients from './components/Ingredients';
import RecipePhoto from "./components/Photos"

function App() {

  return (
    <>
      <div className="App">
        <RecipePhoto />
        <div>
          <RecipeDescription />
          <RecipeIngredients />
        </div>
      </div>
    </>
  )
}

export default App