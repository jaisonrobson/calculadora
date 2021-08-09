import React, { Component, Fragment } from 'react'

import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculator extends Component {

    clearMemory() {
        console.log('limpar')
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n) {
        console.log(n)
    }

    render() {
        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)

        return (
            <Fragment>
                <h1>Calculadora</h1>

                <div className="calculator">
                    <Display value={100} />
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