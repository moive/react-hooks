import React, { Fragment } from 'react'
import Avatar from './Avatar'

const Commetary = ({people}) => {
    return (
        <Fragment>
            <div className="media">
                <Avatar urlImage={people.urlImage} />
                <div className="media-body">
                    <h5 className="mt-0">{people.name}</h5>
                    <p>{people.text}</p>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Commetary;