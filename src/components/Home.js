import { useState, useEffect } from 'react'
import { getAllSneakers } from "../api/sneaker"
import LoadingScreen from './shared/LoadingScreen'

const Home = (props) => {
	const { msgAlert, user } = props
	// console.log('props in home', props)

	const [sneakers, setSneakers] = useState(null)

	useEffect(() => {
		getAllSneakers()
			// .then(res => console.log('sneakers from axios call: \n', res.data.sneakers))
			.then(res => {
				console.log('use Effect hook ran')
				setSneakers(res.data.sneakers)
			})
			.catch(error => console.error)
	}, [])
	console.log('the sneakers in Home: \n', sneakers)
	return (
		<>
			<h2>Home Page</h2>
			{ user !== null ? <h5>Hello {user.email}</h5> : null }
			{sneakers === null ? <LoadingScreen /> : <p>{sneakers[0].name}</p>}
		</>
	)
}

export default Home
