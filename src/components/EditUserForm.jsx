import React from 'react'
import {useForm} from 'react-hook-form'

const EditUserForm = (props) => {

    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    const onSubmit = (data, e)=>{
        console.log(data);
        data.id = props.currentUser.id;
        props.updateUser(props.currentUser.id, data);

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
            <button className="btn btn-primary mt-3">Edit user</button>
        </form>
    );
}
 
export default EditUserForm;