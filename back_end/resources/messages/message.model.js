import mongoose from 'mongoose';
import bycrypt from 'bcrypt.js';
import { trimEnd } from 'lodash';

const messageSchema = new mongoose.Schema(
    {
        content:[{
            type:String,
            trim:true
        }],
        person_one:{
            type:mongoose.SchemaType.ObjectId,
            ref:'person',
            required: true
        },
        person_2: {
            type:mongoose.SchemaType.ObjectId,
            ref:'person',
            required: true
        }
    },
    {timestamps: true}
)

export const Message = mongoose.model('message', messageSchema)
