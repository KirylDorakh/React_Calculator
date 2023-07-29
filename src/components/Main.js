import React, {useState} from "react"
import {Button} from "react-bootstrap"
import * as math from "mathjs"

import "../styles/Main.css"

function Main() {
        const [display, setDisplay] = useState("")

        const handleButtonClick = (e) => {
            const value = e.target.value
            if (value=== "AC"){
                setDisplay('')
            } else if (value === '='){
                try {
                    console.log(display)
                    const result = math.evaluate(display);
                    setDisplay(result.toString())
                } catch (err) {
                    setDisplay('ERROR')
                }
            } else {
                console.log(value, display)
                const lastChatIsOperator = /[+\-*/]/.test(display)
                const clickedValueIsOperator = /[+\-*/]/.test(value)
                if (lastChatIsOperator && clickedValueIsOperator) {
                    setDisplay((prevState) => prevState.slice(0, -1) + value)
                } else {
                    setDisplay((prevState) => prevState + value)
                }
            }
        }

        return (
                <main>
                    <div className="result">{ display }</div>
                    <Button value={"AC"} onClick={handleButtonClick} variant="light">AC</Button>
                    <Button value={"+/-"} onClick={handleButtonClick} variant="light">+/-</Button>
                    <Button value={"%"} onClick={handleButtonClick} variant="light">%</Button>
                    <Button value={"/"} onClick={handleButtonClick} variant="light">/</Button>
                    <Button value={"1"} onClick={handleButtonClick} variant="light">1</Button>
                    <Button value={"2"} onClick={handleButtonClick} variant="light">2</Button>
                    <Button value={"3"} onClick={handleButtonClick} variant="light">3</Button>
                    <Button value={"*"} onClick={handleButtonClick} variant="light">*</Button>
                    <Button value={"4"} onClick={handleButtonClick} variant="light">4</Button>
                    <Button value={"5"} onClick={handleButtonClick} variant="light">5</Button>
                    <Button value={"6"} onClick={handleButtonClick} variant="light">6</Button>
                    <Button value={"-"} onClick={handleButtonClick} variant="light">-</Button>
                    <Button value={"7"} onClick={handleButtonClick} variant="light">7</Button>
                    <Button value={"8"} onClick={handleButtonClick} variant="light">8</Button>
                    <Button value={"9"} onClick={handleButtonClick} variant="light">9</Button>
                    <Button value={"+"} onClick={handleButtonClick} variant="light">+</Button>
                    <Button value={"0"} onClick={handleButtonClick} variant="light">0</Button>
                    <Button value={"."} onClick={handleButtonClick} variant="light">.</Button>
                    <Button value={"="} onClick={handleButtonClick} className="result-button" variant="light">=</Button>
                </main>
        )
}

export default Main;