import React, { useState } from 'react'
import { range, noop } from 'lodash/fp'
import './Calculator.css'

const CalculatorKey = ({
  value = '',
  ariaLabel = `${value}`,
  onClick = noop,
}) => {
  return (
    <li className="calculatorKeys__key">
      <button aria-label={ariaLabel} type="button" onClick={onClick}>
        {value}
      </button>
    </li>
  )
}

const EQUALS = 'equals'
const PLUS = 'plus'
const MULTIPLY = 'multiply'

const operations = {
  [PLUS]: (currentValue, storedValue) => currentValue + storedValue,
  [MULTIPLY]: (currentValue, storedValue) => currentValue * storedValue,
}

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState(0)
  const [storedValue, setStoredValue] = useState(null)
  const [storedOperator, setStoredOperator] = useState(null)

  const onClickNumber = (value) => () => {
    if (!currentValue) setCurrentValue(value)
    if (currentValue) setCurrentValue(parseInt(`${currentValue}${value}`, 10))
  }

  const onClickEquals = () => {
    if (storedValue !== null && storedOperator !== null) {
      setCurrentValue(operations[storedOperator](currentValue, storedValue))
      setStoredValue(null)
      setStoredOperator(null)
    }
  }

  const onClickOperator = (operator = PLUS) => () => {
    setStoredOperator(operator)
    setStoredValue(currentValue)
    setCurrentValue(0)
  }

  return (
    <div className="calculator">
      <div
        id="result"
        aria-label="result"
        role="presentation"
        readOnly
        className="calculatorResult"
      >
        {currentValue}
      </div>
      <ul className="calculatorKeys">
        {range(7, 10).map((number) => (
          <CalculatorKey
            key={`key-${number}`}
            value={number}
            onClick={onClickNumber(number)}
          />
        ))}
        <li />
        {range(4, 7).map((number) => (
          <CalculatorKey
            key={`key-${number}`}
            value={number}
            onClick={onClickNumber(number)}
          />
        ))}
        <li />
        {range(1, 4).map((number) => (
          <CalculatorKey
            key={`key-${number}`}
            value={number}
            onClick={onClickNumber(number)}
          />
        ))}
        <CalculatorKey
          ariaLabel={MULTIPLY}
          value="*"
          onClick={onClickOperator(MULTIPLY)}
        />
        <CalculatorKey value={0} onClick={onClickNumber(0)} />
        <li />
        <CalculatorKey ariaLabel={EQUALS} value="=" onClick={onClickEquals}>
          =
        </CalculatorKey>
        <CalculatorKey
          ariaLabel={PLUS}
          value="+"
          onClick={onClickOperator(PLUS)}
        />
      </ul>
    </div>
  )
}

export default Calculator
