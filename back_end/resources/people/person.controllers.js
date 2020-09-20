import {crudControllers } from '../../utils/crud.js'
import { Person } from './person.model.js'
import request from 'request'

const callAPI = async (req, res) => {
    console.log('REQUEST RICK AND MORTY')
    await request
    .get('https://rickandmortyapi.com/api/character', (err, resp, body) => {
        res.send({data: JSON.parse(body)})
    })
    
    
}

export default {
    ...crudControllers(Person),
    call: callAPI
}




