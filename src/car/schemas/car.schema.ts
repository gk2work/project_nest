import * as mongoose from 'mongoose';


export const CarSchema = new mongoose.Schema({
    id: { type: String },
    brand: { type: String},
    color: { type: String},
    model: { type: String },
    year: { type: Number },
    price: { type: Number }


});
