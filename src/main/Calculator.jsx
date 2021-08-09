import React, { Component, Fragment } from 'react'

import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
}

export default class Calculator extends Component {

    state = { ...initialState }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) return

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n

        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue

            this.setState({ values })
            console.log(values)
        }
    }

    render() {
        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)

        return (
            <Fragment>
                <h1>Calculadora</h1>

                <div className="calculator">
                    <Display value={this.state.displayValue} />
                    <Button label="AC" onClick={() => this.clearMemory()} triple />
                    <Button label="/" onClick={setOperation} operation />
                    <Button label="7" onClick={addDigit} />
                    <Button label="8" onClick={addDigit} />
                    <Button label="9" onClick={addDigit} />
                    <Button label="*" onClick={setOperation} operation />
                    <Button label="4" onClick={addDigit} />
                    <Button label="5" onClick={addDigit} />
                    <Button label="6" onClick={addDigit} />
                    <Button label="-" onClick={setOperation} operation />
                    <Button label="1" onClick={addDigit} />
                    <Button label="2" onClick={addDigit} />
                    <Button label="3" onClick={addDigit} />
                    <Button label="+" onClick={setOperation} operation />
                    <Button label="0" onClick={addDigit} double />
                    <Button label="." onClick={addDigit} />
                    <Button label="=" onClick={setOperation} operation />
                </div>
            </Fragment>
        )
    }
}