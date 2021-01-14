import React from 'react'
import {useForm} from 'react-hook-form'

const AddUserForm = (props) => {

    const {register, errors, handleSubmit} = useForm();
    const onSubmit = (data, e)=>{
        console.log(data);
        props.addUser(data);

        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-label">Name</label>
            <input className="form-control" type="text" name="name" ref={
                register({
                    required:{value:true, message:'Field required'}
                })
            } />
            <div>{errors?.name?.message}</div>
            <label className="form-label">Username</label>
            <input className="form-control" type="text" name="username" ref={
                register({
                    required:{value:true, message:'Field required'}
                })
            } />
            <div>{errors?.username?.message}</div>
            <button className="btn btn-primary mt-3">Add new user</button>
        </form>
    );
}
 
export default AddUserForm;