import express from 'express';
import { v4 as uuidv4 } from 'uuid'; 
const router = express.Router();

const users = []

router.get('/', (req, res) => {
    res.send(users);
})
router.post('/', (req, res) =>{
    const user = req.body;
    users.push({ "id": uuidv4(), ...user});
    res.send(users)
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    let foundUser = users.find((user) => user.id === id)
    if (!foundUser){
        foundUser = {"error" : "User not found"}
    }
    res.send(foundUser);
})
router.get('/')
export default router