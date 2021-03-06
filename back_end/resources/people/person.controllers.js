import {crudControllers } from '../../utils/crud.js';
import { Person } from './person.model.js';
import request from 'request';
import MarkovGen from 'markov-generator';
import tData from '../data.js';
import { Post } from '../posts/post.model.js';

const callAPI = async (req, res) => {
    const pageNum = req.params.id;
    console.log(pageNum);
    await request
    .get(`https://rickandmortyapi.com/api/character?page=${pageNum}`, (err, resp, body) => {
        createPeople(res, JSON.parse(body))
    })
}
const createPeople = async (res, data) => {
    let count = 0
    let count2 = 0
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
        let posts = generateText()[0].replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");

        posts.map(async post => {
            let newPost = await 
            Post.create({
                authorName: newPerson.name,
                content: post,
                createdBy: newPerson._id
            });
            newPerson.posts.push(newPost)
            count2 +=1;
        });
       
        count += 1
        console.log(`Created ${count2} for person ${count}`)
        count2 = 0
    }
    console.log(`Created ${count} people on the API`)
    res.redirect('/person')
}

const GetPeople = async (req, res) => {
    const people = await Person.find({})
    const posts = await Post.find({})
    res.send({people, posts})
}

const GetRandomPerson = async (req, res) => {
    const people = await Person.find({})
    
    // get person from random number 
    let min = Math.ceil(0);
    let max = Math.floor(people.length);
    let indx = Math.floor(Math.random() * (max - min + 1)) + min;
    let randomPerson = people[indx];
    let randPosts = await Post.find({ createdBy: randomPerson._id});
    res.send({person: randomPerson, posts: randPosts});
}

const generateText = () => {

    let markov = new MarkovGen({
        input: tData,
        minLength: 1
      });
    let sentence = markov.makeChain();
    return sentence.split();
}
export default {
    ...crudControllers(Person),
    getMany: GetPeople,
    getOne: GetRandomPerson,
    call: callAPI
}




