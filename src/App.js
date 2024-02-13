// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'

import SneakerShow from './components/sneakers/SneakerShow'
import SneakerCreate from './components/sneakers/SneakerCreate'

const App = () => {

	const [user, setUser] = useState(null)
	const [msgAlerts, setMsgAlerts] = useState([])

	useEffect(() => {
		const loggedInUser = localStorage.getItem('user')

		if (loggedInUser) {
			const foundUser = JSON.parse(loggedInUser)

			setUser(foundUser)
		}
	}, [])

	console.log('user in app', user)
	console.log('message alerts', msgAlerts)

	const clearUser = () => {
		console.log('clear user ran')

		localStorage.removeItem('user')

		setUser(null)
	}

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
		)
		})
	}

	return (
		<Fragment>
			<Header user={user} />
			<Routes>
				<Route path='/' element={<Home msgAlert={msgAlert} user={user} />} 
				/>
				<Route
					path='/sign-up'
					element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-in'
					element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-out'
					element={
					<RequireAuth user={user}>
						<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
					</RequireAuth>
					}
				/>
				<Route
					path='/change-password'
					element={
					<RequireAuth user={user}>
						<ChangePassword msgAlert={msgAlert} user={user} />
					</RequireAuth>
					}
				/>
				<Route
					path='/create-sneaker'
					element={
						<RequireAuth user={user}>
							<SneakerCreate msgAlert={msgAlert} user={user} />
						</RequireAuth>
					}
				/>
				<Route 
					path='sneakers/:sneakerId'
					element={
						<SneakerShow user={user} msgAlert={msgAlert} />
					}
				/>
			</Routes>
			{msgAlerts.map((msgAlert) => (
				<AutoDismissAlert
					key={msgAlert.id}
					heading={msgAlert.heading}
					variant={msgAlert.variant}
					message={msgAlert.message}
					id={msgAlert.id}
					deleteAlert={deleteAlert}
				/>
			))}
		</Fragment>
	)
}

export default App
