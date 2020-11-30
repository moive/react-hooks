import React, { useState, Fragment } from 'react'

const Counter = () => {
    const [number, setNumber] = useState(0);
    const increase = () => {
        setNumber(number + 1)
    }
    return (
        <Fragment>
            <h3>My first component {number}</h3>
            <button className="btn btn-primary" onClick={increase}>Increase</button>
        </Fragment>
    );
}
 
export default Counter;