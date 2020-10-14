import React from 'react'
import logo from './logo.svg'
import './App.css'
import Calculator from './Calculator'

function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <img src={logo} className="appHeader__logo" alt="logo" />
        <h1>Equal Experts Calculator</h1>
      </header>
      <main>
        <Calculator />
      </main>
    </div>
  )
}

export default App
