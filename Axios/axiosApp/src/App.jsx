import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState('Please enter a scripture verse you\'d like to see :) Format = Book Chapter : verse start - verse end');
  const [input, setInput] = useState('');

  const getQuote = async () => {
    const TOKEN = process.env.REACT_APP_BIBLE_TOKEN;
    await axios.get('https://api.esv.org/v3/passage/text/', {
      params: {'q': input},
      headers: {
        Authorization: 'Token ' + TOKEN,
      }
    })
      .then(response => {
        setQuote(response.data.passages[0]);
        console.log(response.data.passages[0]);
      })
      .catch(error => {
        console.log(error)
      })
    }
  return (
    <>
      <div className="App">
        <button onClick={getQuote}>Get Quote</button>
        <br/>
        <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} /> 
        <p>{quote}</p> 
      </div>
    </>
  )
}

export default App
