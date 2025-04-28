import { Document } from "mongoose";



export interface ICar extends Omit<Document, 'model'> {
    
    readonly id: string;
    readonly brand: string;
    readonly color: string;
    readonly model: string;
    readonly year: number;
    readonly price: number;
}