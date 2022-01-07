import React, { useContext, useState } from 'react'
import './keyboard.css'
import Btn from '../Btn/Btn'
import { dataContext } from '../../App'

const Keyboard = () => {

    const context = useContext(dataContext)

    // Define Text Variables
    const [currText, setCurrText] = useState([])
    const [nextText, setNextText] = useState([])
    const [operator, setOperator] = useState(null)
    const [histText, setHistText] = useState([])
    const [first, setFirst] = useState(true)
    const [result, setResult] = useState(false)

    // Handle Functional Keys

    // Plus Key
    let handlePlus = () => {
        setFirst(!first)
        setOperator('+')

        setHistText(value => {
            return [...value, '+']
        })
    }

    // Minus Key
    let handleMinus = () => {
        setFirst(!first)
        setOperator('-')

        setHistText(value => {
            return [...value, '-']
        })
    }

    // Multiply Key
    let handleMultiply = () => {
        setFirst(false)
        setOperator('x')

        setHistText(value => {
            return [...value, 'x']
        })
    }

    // Division Key
    let handleDivision = () => {
        setFirst(false)
        setOperator('÷')

        setHistText(value => {
            return [...value, '÷']
        })
    }

    // Parsent Key
    let handleParsent = () => {

        let secondValue = ''
        if (nextText.length > 0) {
            nextText.map(v => secondValue += String(v))
        }

        secondValue = Number(secondValue)
        setNextText([secondValue / 100])

        setHistText(value => {
            return [...value, '%']
        })
    }

    // Result Key
    let handleResult = () => {
        let firstValue = ''
        if (currText.length > 0) {
            currText.map(v => firstValue += String(v))
        }

        let secondValue = ''
        if (nextText.length > 0) {
            nextText.map(v => secondValue += String(v))
        }

        let result = ''

        if (operator === '+') {
            result = Number(firstValue) + Number(secondValue)
        } else if (operator === '-') {
            result = Number(firstValue) - Number(secondValue)
        } else if (operator === 'x') {
            result = Number(firstValue) * Number(secondValue)
        } else if (operator === '÷') {
            result = Number(firstValue) / Number(secondValue)
        }

        if (result) {
            setFirst(!first)

            setCurrText([result])
            setNextText([])
            setResult(true)
        }
    }

    // Backspace Handler Button
    // ac
    let handleAc = () => {
        setCurrText([])
        setNextText([])
        setHistText([])
        setResult(false)
    }

    // backspace
    let handleBackspace = () => {
        if (first) {
            setCurrText(value => {
                let numArr = [...value]
                numArr.pop()

                return numArr
            })
        } else {
            setNextText(value => {
                let numArr = [...value]
                numArr.pop()

                return numArr
            })
        }

        setHistText(value => {
            let val = [...value]
            val.pop()
            return val
        })

        if (result) {
            setCurrText([])
            setNextText([])
            setHistText([])
            setResult(false)
        }
    }

    // Number Button Handlers
    // Point
    let handlePoint = () => {
        if (first) {
            setCurrText(value => {
                return [...value, '.']
            })
        } else {
            setNextText(value => {
                return [...value, '.']
            })
        }

        setHistText(value => {
            return [...value, '.']
        })
    }

    // Zero
    let handleZero = () => {
        if (first) {
            setCurrText(value => {
                return [...value, 0]
            })
        } else {
            setNextText(value => {
                return [...value, 0]
            })
        }

        setHistText(value => {
            return [...value, 0]
        })
    }

    // One
    let handleOne = () => {
        if (first) {
            setCurrText(value => {
                return [...value, 1]
            })
        } else {
            setNextText(value => {
                return [...value, 1]
            })
        }

        setHistText(value => {
            return [...value, 1]
        })
    }

    // Two
    let handleTwo = () => {
        if (first) {
            setCurrText(value => {
                return [...value, 2]
            })
        } else {
            setNextText(value => {
                return [...value, 2]
            })
        }

        setHistText(value => {
            return [...value, 2]
        })
    }

    // Three
    let handleThree = () => {
        if (first) {
            setCurrText(value => {
                return [...value, 3]
            })
        } else {
            setNextText(value => {
                return [...value, 3]
            })
        }

        setHistText(value => {
            return [...value, 3]
        })
    }

    // Four
    let handleFour = () => {
        if (first) {
            setCurrText(value => {
                return [...value, 4]
            })
        } else {
            setNextText(value => {
                return [...value, 4]
            })
        }

        setHistText(value => {
            return [...value, 4]
        })
    }

    // Five
    let handleFive = () => {
        if (first) {
            setCurrText(value => {
                return [...value, 5]
            })
        } else {
            setNextText(value => {
                return [...value, 5]
            })
        }

        setHistText(value => {
            return [...value, 5]
        })
    }

    // Six
    let handleSix = () => {
        if (first) {
            setCurrText(value => {
                return [...value, 6]
            })
        } else {
            setNextText(value => {
                return [...value, 6]
            })
        }

        setHistText(value => {
            return [...value, 6]
        })
    }

    // Seven
    let handleSeven = () => {
        if (first) {
            setCurrText(value => {
                return [...value, 7]
            })
        } else {
            setNextText(value => {
                return [...value, 7]
            })
        }

        setHistText(value => {
            return [...value, 7]
        })
    }

    // Eight
    let handleEight = () => {
        if (first) {
            setCurrText(value => {
                return [...value, 8]
            })
        } else {
            setNextText(value => {
                return [...value, 8]
            })
        }

        setHistText(value => {
            return [...value, 8]
        })
    }

    // Nine
    let handleNine = () => {
        if (first) {
            setCurrText(value => {
                return [...value, 9]
            })
        } else {
            setNextText(value => {
                return [...value, 9]
            })
        }

        setHistText(value => {
            return [...value, 9]
        })
    }

    // Display On Screen
    context.setMainText(first ? currText : nextText)
    context.setSubText(histText)

    return (
        <div className="keyboard">
            <Btn value="AC" type="f" onClick={handleAc} />

            <Btn value="%" type="f" onClick={handleParsent} />

            <Btn value="÷" type="f" onClick={handleDivision} />

            <Btn value="x" type="f" onClick={handleMultiply} />

            <Btn value="7" onClick={handleSeven} />

            <Btn value="8" onClick={handleEight} />

            <Btn value="9" onClick={handleNine} />

            <Btn value="-" type="f" onClick={handleMinus} />

            <Btn value="4" onClick={handleFour} />

            <Btn value="5" onClick={handleFive} />

            <Btn value="6" onClick={handleSix} />

            <Btn value="+" type="f" onClick={handlePlus} />

            <Btn value="1" onClick={handleOne} />

            <Btn value="2" onClick={handleTwo} />

            <Btn value="3" onClick={handleThree} />

            <Btn value="⇍" type="f" onClick={handleBackspace} />

            <Btn value="0" onClick={handleZero} />

            <Btn value="." onClick={handlePoint} />

            <Btn value="=" type="equal" onClick={handleResult} />
        </div>
    )
}

export default Keyboard
