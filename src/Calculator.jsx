import React from 'react'
import { range } from 'lodash/fp'
import './Calculator.css'

const CalculatorKey = ({ children = '' }) => {
  return (
    <li className="calculatorKeys__key">
      <button type="button">{children}</button>
    </li>
  )
}

const Calculator = () => {
  return (
    <div className="calculator">
      <ul className="calculatorKeys">
        {range(7, 10).map((number) => (
          <CalculatorKey key={`key-${number}`}>{number}</CalculatorKey>
        ))}
        <CalculatorKey>/</CalculatorKey>
        {range(4, 7).map((number) => (
          <CalculatorKey key={`key-${number}`}>{number}</CalculatorKey>
        ))}
        <CalculatorKey>*</CalculatorKey>
        {range(1, 4).map((number) => (
          <CalculatorKey key={`key-${number}`}>{number}</CalculatorKey>
        ))}
        <CalculatorKey>-</CalculatorKey>
        <CalculatorKey>0</CalculatorKey>
        <li />
        <CalculatorKey>=</CalculatorKey>
        <CalculatorKey>+</CalculatorKey>
      </ul>
    </div>
  )
}

export default Calculator
