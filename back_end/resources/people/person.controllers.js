import {crudControllers } from '../../utils/crud.js'
import { Person } from './person.model.js'
import request from 'request'

const callAPI = async (req, res) => {
    console.log('REQUEST RICK AND MORTY')
    await request
    .get('https://rickandmortyapi.com/api/character', (err, resp, body) => {
        createPeople(res, JSON.parse(body))
    })
}
const createPeople = (res, data) => {
    let count = 0
    let personList = data.results
    console.log(personList)
    for (let d = 0; d < personList.length; d++){
        Person.create({
            name: personList[d].name,
            image: personList[d].image,
            status: personList[d].status,
            species: personList[d].species,
            type: personList[d].type,
            location: personList[d].location.name,
            location_link: personList[d].location.url
        })
        count += 1
    }
    console.log(`Created ${count} people on the API`)
    res.redirect('/person')
}
export default {
    ...crudControllers(Person),
    call: callAPI
}




