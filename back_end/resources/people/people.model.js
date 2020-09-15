import mongoose from 'mongoose';
import bycrypt from 'bcrypt.js';
import { trimEnd } from 'lodash';

const personSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        status:{
            type:String,
            default:'unknown',
            trim:true
        },
        species: String,
        type: String,
        location:String,
        location_image:String,
    },
    {timestamps: true}
)

export const Person = mongoose.model('person', personSchema)