import React from 'react'
import { range } from 'lodash/fp'
import './Calculator.css'

const CalculatorKey = ({ value = '', ariaLabel = '' }) => {
  return (
    <li className="calculatorKeys__key">
      <button aria-label={ariaLabel} type="button">
        {value}
      </button>
    </li>
  )
}

const Calculator = () => {
  return (
    <div className="calculator">
      <div
        id="result"
        aria-label="result"
        role="presentation"
        readOnly
        className="calculatorResult"
      >
        0
      </div>
      <ul className="calculatorKeys">
        {range(7, 10).map((number) => (
          <CalculatorKey key={`key-${number}`} value={number} />
        ))}
        <li />
        {range(4, 7).map((number) => (
          <CalculatorKey key={`key-${number}`} value={number} />
        ))}
        <li />
        {range(1, 4).map((number) => (
          <CalculatorKey key={`key-${number}`} value={number} />
        ))}
        <li />
        <CalculatorKey value={0} />
        <li />
        <CalculatorKey ariaLabel="equals" value="=">
          =
        </CalculatorKey>
        <CalculatorKey ariaLabel="plus" value="+">
          +
        </CalculatorKey>
      </ul>
    </div>
  )
}

export default Calculator
