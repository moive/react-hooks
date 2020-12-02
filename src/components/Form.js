import React, { Fragment, useState } from 'react'

const Form = ()=> {

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

	return (
		<Fragment>
			<h1>Form</h1>
			<form className="row" onSubmit={sendData}>
				<div className="col-md-3">
					<input
						className="form-control"
						placeholder="Enter firstname"
						name="firstName"
						type="text"
						onChange={handleInputChange}
					/>
				</div>
				<div className="col-md-3">
					<input
						className="form-control"
						placeholder="Enter lastname"
						name="lastName"
						type="text"
						onChange={handleInputChange}
					/>
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
