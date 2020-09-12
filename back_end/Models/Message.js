import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let messageSchema = new Schema({
  id1: {
      type: String
  },
  id2: {
      type: String
  },  
  message: {
    type: String
  }
}, {
    collection: 'message'
  })

const messageModel = mongoose.model('Message', messageSchema)
export default messageModel