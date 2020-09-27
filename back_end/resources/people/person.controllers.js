import {crudControllers } from '../../utils/crud.js';
import { Person } from './person.model.js';
import request from 'request';
import MarkovGen from 'markov-generator';
import tData from '../data.js';
import { Post } from '../posts/post.model.js';

const callAPI = async (req, res) => {
    await request
    .get('https://rickandmortyapi.com/api/character?page=2', (err, resp, body) => {
        createPeople(res, JSON.parse(body))
    })
}
const createPeople = async (res, data) => {
    let count = 0
    let personList = data.results
    for (let d = 0; d < personList.length; d++){
        let newPerson = await Person.create({
            name: personList[d].name,
            image: personList[d].image,
            status: personList[d].status,
            species: personList[d].species,
            type: personList[d].type,
            location: personList[d].location.name,
            location_link: personList[d].location.url
        })
        let posts = generateText();
        posts.split(/(\.|\?|\!)/g)
        .filter(sen => sen !== '?' && sen !== '!' && sen !== '.' && sen !== ',' && sen !== ' ')
        .map(async post => await Post.create({
            content: post,
            createdBy: newPerson._id
        }))
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
    res.send(people[indx])
}

const generateText = () => {

    let markov = new MarkovGen({
        input: tData,
        minLength: 1
      });
    let sentence = markov.makeChain();
    return sentence;
}
export default {
    ...crudControllers(Person),
    getOne: GetRandomPerson,
    call: callAPI
}




