import mongoose from 'mongoose';


const postSchema = new mongoose.Schema(
    {
        authorName:{
            type:String,
            trim:true,
            required:true
        },
        content:{
            type:String,
            trim:true,
            required: true
        },
        createdBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'person',
            required: true
        },
     
    },
    {timestamps: true}
)

export const Post = mongoose.model('post', postSchema)
