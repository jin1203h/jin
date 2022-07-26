import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom'
import App from './App'
import Basket from './basket/Basket'
import BasketL from './basket/BasketL'
import EcoOrder from './ecoorder/EcoOrder'
import EcoOrderList from './ecoorder/EcoOrderList'
import Payment from './payment/Payment'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/basketlist" element={<BasketL />} />
        <Route path="/ecoorder" element={<EcoOrder />} />
        <Route path="/ecoorderlist" element={<EcoOrderList />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
