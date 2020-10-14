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

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState(0)
  // const [value, setValue] = useState(null)
  // const [operator, setOperator] = useState(null)

  const onClickNumber = (value) => () => {
    if (!currentValue) setCurrentValue(value)
    if (currentValue) setCurrentValue(parseInt(`${currentValue}${value}`, 10))
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
        <li />
        <CalculatorKey value={0} onClick={onClickNumber(0)} />
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
