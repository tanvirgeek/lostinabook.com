import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends Component {
	logOut(e){
		e.preventDefault();
		localStorage.removeItem('usertoken');
		this.props.history.push('/');
	}
	
	render(){
		const loginRegLink = (
			<ul className = "navbar-nav">
				<li className = "nav-item">
					<Link to= "/login" className = "nav-link">
						Login
					</Link>
				</li>
				<li className = "nav-item">
					<Link to= "/register" className = "nav-link">
						Register
					</Link>
				</li>
			</ul>
		)
		
		const userLink = (
			<ul className = "navbar-nav">
				<li className = "nav-item">
					<Link to= "/profile" className = "nav-link">
						User
					</Link>
				</li>
				<li className = "nav-item">
					<a href="" className = "nav-link" onClick={this.logOut.bind(this)}>
						Logout
					</a>
				</li>
			</ul>
		)
		
		return(
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
				<button className="navbar-toggler"
					type="button"
					data-toggle = "collaspe"
					data-target =  "#navbar1"
					aria-controls = "navbar1"
					aria-expanded = "false"
					aria-lable = "Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collaspe navbar-collaspe justify-content-md-center" id="navbar1">
					<ul className="navbar-nav">
						<li className = "nav-item">
							<Link to="/" className="nav-link">
								Home
							</Link>
						</li>
					</ul>
					{localStorage.usertoken ? userLink : loginRegLink}
				<div>
			</nav>
		)
	}
}