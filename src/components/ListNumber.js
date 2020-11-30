import React, {useState, Fragment } from 'react'
const ListNumber = () => {
    const [arrayNumber, setArrayNumber] = useState([1,2,3,4,5,6]);
    const [number, setNumber] = useState(arrayNumber.length)
    
    const addElement = ()=>{
        setNumber(number + 1);
        setArrayNumber([
            ...arrayNumber,
            number + 1
        ])
    }
    return (
        <Fragment>
            <h2>List Numbers</h2>
            <button className="btn btn-danger" onClick={addElement}>Add new element</button>
            {
                arrayNumber.map((item, index)=>
                <p key={index}>{item}-{index}</p>)
            }
        </Fragment>
    );
}
 
export default ListNumber;