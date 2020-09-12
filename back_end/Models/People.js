import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let peopleSchema = new Schema({  
  name: {
    type: String
  },
  status: {
    type: String
  },
  species: {
      type: String
  },
  gender: {
      type: String
  },
  location: {
      type: String
  }
}, {
    collection: 'people'
  })

const peopleModel = mongoose.model('People', peopleSchema)
export default peopleModel