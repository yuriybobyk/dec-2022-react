import React, {useMemo, useState} from 'react';

const summator = (n) => {
    console.log('start')
    let sum = n
    for (let i = 0; i < 1000; i++) {
        sum += 1
    }
    for (let i = 0; i < 4000000000; i++) {
    }
    console.log('finish')
    return sum
}


const UseMemo = () => {

    const [n, setN] = useState(5);
    const [count, setcount] = useState(0);

    const res = useMemo(()=>summator(n), [n])
    return (
        <div>
            <div>Result: {res}</div>
            <div>Count: {count}</div>
            <button onClick={() => setN(prevState => ++prevState)}>Inc N</button>
            <button onClick={() => setcount(prevState => ++prevState)}>Inc Count</button>
        </div>
    );
};

export default UseMemo;
