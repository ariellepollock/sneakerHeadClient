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
// UPDATE -> Adjust a sneaker
// DELETE -> throw away a pair of sneakers