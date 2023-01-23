import React, { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from'./json/colors.json'

const App = () => {

  const randomElementFromArray = arr => {
    const indexRandom = Math.floor(Math.random()* arr.length);
    return arr[indexRandom]

  // creamos una funcion que encuentra numero random, dinamico y reutilizable
  }

  const [quoteRandom, setquoteRandom] = useState(randomElementFromArray(quotes))
  const [colorRandom, setcolorRandom] = useState(randomElementFromArray(colors))

  const handleClick = () => {
    setquoteRandom(randomElementFromArray(quotes))
    setcolorRandom(randomElementFromArray(colors))
  }



  return (
    <div style={ {backgroundColor: colorRandom}} className='App'>
      <QuoteBox quoteRandom={quoteRandom}
      handleClick={handleClick}
      colorRandom={colorRandom}
      />
      
    </div>
  )
}

export default App