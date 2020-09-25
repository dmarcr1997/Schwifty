import {crudControllers } from '../../utils/crud.js';
import { Person } from './person.model.js';
import request from 'request';
import MarkovGen from 'markov-generator';
import { data } from '../data.js';

const callAPI = async (req, res) => {
    await request
    .get('https://rickandmortyapi.com/api/character?page=2', (err, resp, body) => {
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

const GetRandomPerson = async (req, res) => {
    const people = await Person.find({})
    
    // get person from random number 
    let min = Math.ceil(0);
    let max = Math.floor(people.length);
    let indx = Math.floor(Math.random() * (max - min + 1)) + min;
    generateText();
    res.send(people[indx])
}

const generateText = () => {
    
    let trainingData = data.split(/(\.|\?|\!)/g)
    debugger
    let markov = new MarkovGen({
        input: trainingData,
        minLength: 10
      });
    let sentence = markov.makeChain();
    console.log(sentence);
}
export default {
    ...crudControllers(Person),
    getOne: GetRandomPerson,
    call: callAPI
}




