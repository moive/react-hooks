import React, { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'

const Example1 = () => {
    const {register, errors, handleSubmit} = useForm();
    const [Entries, setEntries] = useState([])

    const onSubmit = (data,e)=>{
        e.preventDefault();
        
        console.log(data);
        setEntries([
            ...Entries,
            data
        ]);
        e.target.reset();
        e.target[0].focus();
    }

    return ( 
        <Fragment>
            <h1>Example #1</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    name="title"
                    className="form-control my-2"
                    placeholder="Enter title"
                    ref={
                        register({
                            required: {value:true, message: 'Field required'},
                            minLength: {value:2, message: 'Minimum of 2 letters'}
                        })
                    }
                />
                {
                    errors.title &&
                    <span className="text-danger text-small d-block mb-2">{errors.title.message}</span>
                }
                <input
                    type="text"
                    name="description"
                    className="form-control my-2"
                    placeholder="Enter description"
                    ref={
                        register({
                            required: {value:true, message: 'Field required'}
                        })
                    }
                />
                {
                    errors.description &&
                    <span className="text-danger text-small d-block mb-2">{errors.description.message}</span>
                }
                <button className="btn btn-primary">Add</button>
            </form>
            {
                Entries.length>0 &&
                <ul className="list-group my-5">
                    {Entries.map((item, index) => <li key={index} className="list-group-item">{item.title}</li>)}
                </ul>
            }
            <p className={ Entries.length>0 ? '': 'mt-4'}>This is a demo very fantastic.</p>
        </Fragment>
     );
}
 
export default Example1;