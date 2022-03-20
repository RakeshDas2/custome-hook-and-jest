import React from 'react';
import useCounter from '../hooks/useCounter';

function CounterOne() {
    const [count, increment, decrement, reset] = useCounter(0, 10)
    return <div>
        <p>Count-{count}</p>
        <button onClick={() => { increment(10) }}>Increment</button>
        <button onClick={() => { decrement() }}>Decrement</button>
        <button onClick={() => { reset() }}>Reset</button>
    </div>;
}

export default CounterOne;
