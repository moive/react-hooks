import React, { Fragment } from 'react';

const Temperature = () => {
    const temperature = 21;
    return (
        <Fragment>
            <h2>Is it hold or cold?</h2>
            <h4>
                {
                    temperature > 20 ? 'Hold' : 'Cold'
                }
            </h4>
        </Fragment>
    );
}
 
export default Temperature;