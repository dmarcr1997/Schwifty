import mongoose from 'mongoose';


const messageSchema = new mongoose.Schema(
    {
        content:[{
            type:String,
            trim:true
        }],
        person_one:{
            type:mongoose.SchemaTypes.ObjectId,
            ref:'person',
            required: true
        },
        person_2: {
            type:mongoose.SchemaTypes.ObjectId,
            ref:'person',
            required: true
        }
    },
    {timestamps: true}
)

export const Message = mongoose.model('message', messageSchema)
