import React, {useState} from 'react';
import './CounterHook.css';

const CounterHook = () => {
const [counter, setCounter] = useState(110); //useState aina ensimmäiseksi


const addOne = () => {
    setCounter(counter + 1)
}

const removeOne = () => {
    counter <= 110? setCounter(110) : setCounter(counter -1);
}

const reset = () => {
    setCounter(110)
}

let test =
    counter === 0
    ? "circle neutral"
    :counter % 10 === 0


    return (
        <div>
            <div>
                <p>{counter}</p>
            </div>
            <div>
                <button onClick={addOne}>Add 1</button>
                <button onClick={removeOne}>Remove 1</button>
                <button onClick={reset}>Reset</button>
            </div>       
        </div>
    )
}

export default CounterHook;