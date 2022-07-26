import { useState } from 'react'
import {Link} from 'react-router-dom'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Main</h1>
      <li><Link to="basket">Basket</Link></li>
      <li><Link to="basketlist"> BasketList</Link></li>
      <li><Link to="ecoorder">EcoOrder</Link></li>
      <li><Link to="ecoorderlist"> EcoOrderList</Link></li>
      <li><Link to="payment"> Payment</Link></li>
    </div>
  )
}

export default App
