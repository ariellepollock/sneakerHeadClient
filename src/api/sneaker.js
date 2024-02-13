import apiUrl from '../apiConfig'
import axios from 'axios'

// READ -> Index
export const getAllSneakers = () => {
    return axios(`${apiUrl}/sneakers`)
}

// READ -> Show
export const getOneSneaker = (id) => {
    return axios(`${apiUrl}/sneakers/${id}`)
}

// CREATE -> Add a sneaker
export const createSneaker = (user, newSneaker) => {
    return axios({
        url: `${apiUrl}/sneakers`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { sneaker: newSneaker }
    })
}

// UPDATE -> Adjust a sneaker
// DELETE -> throw away a pair of sneakers