import React, { Fragment } from 'react'

const Greeting = (props) => {
    console.log(props);
    return (
        <Fragment>
            <h2>Hi, {props.person}!</h2>
        </Fragment>
    );
}
 
export default Greeting;