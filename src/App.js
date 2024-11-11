import { useState } from "react"
import './App.css'

export default function App() {
  
  const [numero, setNumero] = useState(0)
  
  function add() {
    setNumero(numero + 1)
  }

  function sub() {
    setNumero(numero - 1)
  }

  return <div id="app">
    <h1>Contador</h1>
    <p id="number">{numero}</p>
    <div id="box-buttons">
      <button onClick={add} id="sum">Mais</button>
      <button onClick={sub} id="sub">Menos</button>
    </div>
  </div>
}