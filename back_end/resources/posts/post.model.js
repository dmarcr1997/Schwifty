import mongoose from 'mongoose';


const postSchema = new mongoose.Schema(
    {
        content:{
            type:String,
            trim:true
        },
        createdBy:{
            type:mongoose.SchemaTypes.ObjectId,
            ref:'person',
            required: true
        },
     
    },
    {timestamps: true}
)

export const Post = mongoose.model('post', postSchema)
