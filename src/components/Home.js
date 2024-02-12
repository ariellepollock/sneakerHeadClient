import { useState, useEffect } from 'react'
import { getAllSneakers } from "../api/sneaker"
import SneakersIndex from './sneakers/SneakersIndex'

const Home = (props) => {
	const { msgAlert, user } = props
	// console.log('props in home', props)
	// const [sneakers, setSneakers] = useState(null)
	return (
		<>
			<h2>Home Page</h2>
			{/* { user !== null ? <h5>Hello {user.email}</h5> : null }
			{sneakers === null ? <LoadingScreen /> : <p>{sneakers[0].name}</p>} */}
			<SneakersIndex msgAlert={ msgAlert } />
		</>
	)
}

export default Home
