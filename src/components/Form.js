import React, { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'

const Form = ()=> {
	const {register, errors, handleSubmit} = useForm();
	const [data, setdata] = useState({
		firstName: '',
		lastName: ''
	})

	const handleInputChange = (e)=> {
		setdata({
			...data, 
			[e.target.name]: e.target.value
		})
	}

	const sendData = (e)=>{
		e.preventDefault();
		console.log(`${data.firstName} ${data.lastName}`);
	}

	const onSubmit = (data,e)=>{
		console.log(data);
		e.target.reset();
	}

	return (
		<Fragment>
			<h1>Form</h1>
			<form className="row" onSubmit={handleSubmit(onSubmit)}>
				<div className="col-md-3">
					<input
						className="form-control"
						placeholder="Enter firstname"
						name="firstName"
						type="text"
						onChange={handleInputChange}
						ref={
							register({
								required:{value: true, message:'FirstName is required'}
							})
						}
					/>
					<span className="text-danger text-small d-block mb-2">
						{errors?.firstName?.message}
					</span>
				</div>
				<div className="col-md-3">
					<input
						className="form-control"
						placeholder="Enter lastname"
						name="lastName"
						type="text"
						onChange={handleInputChange}
						ref={
							register({
								required: {value: true, message: 'LastName is required'}
							})
						}
					/>
					<span className="text-danger text-small d-block mb-2">
						{errors?.lastName?.message}
					</span>
				</div>
				<div className="col-md-3">
					<button className="btn btn-primary" type="submit">Send</button>
				</div>				
			</form>
			<h3>{data.firstName} - {data.lastName}</h3>
		</Fragment>
	);
}

export default Form;
