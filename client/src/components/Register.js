import React, {Component} from 'react'
import {Login} from './Userfunctions'

class Register extends Component {
	constructor() {
		super()
		this.state={
			firstName:'',
			lastName:'',
			email: '',  
			password: '',
		}
		
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
	onChange(e) {
		this.setState({[e.target.name]:e.target.value});
	}
	
	onSubmit(e){
		this.setState({[e.target.value]:e.target.value});
	}
	
	const User {
		firstName: this.state.firstName
		lastName: this.state.lastNamme
		email: this.state.email
		password: this.state.password
	}
	
	register(user).then(res => {
		if (res) {
			this.props.history.push('/profile');
		}
	})
}

