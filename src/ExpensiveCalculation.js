import React, { useState, useMemo } from 'react';

const ExpensiveCalculation = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    const expensiveComputation = (num) => {
        console.log('Performing expensive computation...');
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += num;
        }
        return result;
    };

    const memoizedValue = useMemo(() => expensiveComputation(count), [count]);

    return (
        <div>
            <h2>Expensive Calculation</h2>
            <p>Count: {count}</p>
            <p>Expensive Computation Result: {memoizedValue}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type something"
            />
        </div>
    );
};

export default ExpensiveCalculation;