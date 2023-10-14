import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  useEffect(() => {

    if(text !== ""){
      console.log("va")
      console.log(text.split(' '))
      setCount(text.match(/\S+/g).length)
    }
    
  },[text])

  return (
    <div className='App'>
      <div className='container'>
        <h1>Responsive Paragraph Word Counter</h1>
        <textarea text={text} onChange={(e) => setText(e.target.value)}></textarea>
        <p>Word Count: {count}</p>
      </div>
    </div>
  )
}

export default App
