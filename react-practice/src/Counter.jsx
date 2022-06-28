import { useState } from 'react';

export function Counter() {
    const [counter, setCounter] = useState(0);


    return (
        <div className="counter">
            <button className='minus' onClick={() => setCounter(counter - 1)}>-</button>
            <p>{counter}</p>
            <button className='plus' onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    )

}