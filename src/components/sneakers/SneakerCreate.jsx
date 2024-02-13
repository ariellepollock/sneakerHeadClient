import { useState } from 'react'
import SneakerForm from '../shared/SneakerForm'

const SneakerCreate = (props) => {
    const { user, msgAlert } = props

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
    console.log('the sneaker inside create')
    
    return (
        <SneakerForm
            sneaker={sneaker}
            handleChange={onChange}
            handleSubmit={() => {console.log('handles submit')}}
            heading='Add a pair of sneaks'
        />
    )
}

export default SneakerCreate