import { useState } from 'react'
import SneakerForm from '../shared/SneakerForm'
import { useNavigate } from 'react-router-dom'
import { createSneaker } from '../../api/sneaker'

const SneakerCreate = (props) => {
    const { user, msgAlert } = props

    const navigate = useNavigate()

    const [sneaker, setSneaker] = useState({
        name: '',
        brand: '',
        colorway: '',
        releaseYear: '',
        condition: 'mint'
    })

    const onChange = (e) => {
        e.persist()

        setSneaker(prevSneaker => {
            const updatedName = e.target.name
            let updatedValue = e.target.value

            if (e.target.type === 'number') {
                updatedValue = parseInt(e.target.value)
            }

            const updatedSneaker = { [updatedName] : updatedValue }

            return {
                ...prevSneaker, ...updatedSneaker
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        createSneaker(user, sneaker)
            .then(res => { navigate(`/sneakers/${res.data.sneakers.id}`)})
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: 'Created the sneakers!',
                    variant: 'success'
                })
            })
            .catch(err => {
                msgAlert({
                    heading: 'Oh no!',
                    message: 'something went wrong.',
                    variant: 'danger'
                })
            })
    }

    console.log('the sneaker inside create')

    return (
        <SneakerForm
            sneaker={sneaker}
            handleChange={onChange}
            handleSubmit={onSubmit}
            heading='Add a pair of sneaks'
        />
    )
}

export default SneakerCreate