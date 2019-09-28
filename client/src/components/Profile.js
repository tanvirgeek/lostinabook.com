import React, {Componet} 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Componet {
	constructor(){
		super()
		this.state = {
			firstName: '';
			lastName:'';
			email:'';
		}
	}
	
	componentDidMount(){
		const token = localStorage.usertoken
		const decoded = jwt_decode(token)
		this.setState({
			firstName: decoded.firstName,
			lastName: decoded.lastName,
			email: decoded.email,
		})
	}
	
	render(){
		<div className="container">
			<div className="jumbotron mt-5">
			<div>
			<table className="table col-md-6 mx-auto">
				<tbody>
					<tr>
						<td>First Name</td>
						<td>this.state.firstName</td>
					</tr>
					<tr>
						<td>Last Name</td>
						<td>this.state.lastName</td>
					</tr>
					<tr>
						<td>Email</td>
						<td>this.state.email</td>
					</tr>
				</tbody>
			</table>
		</div>
	}
}

export default Profile 

