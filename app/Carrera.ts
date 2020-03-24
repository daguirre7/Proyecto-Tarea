import mongoose = require("mongoose");
import {connectMongoDB} from "./helpers"

export interface ICarrera extends mongoose.Document { 
    nameab: string;
    name: string;
}

const CarreraSchema = new mongoose.Schema({
    nameab: { type: String, required: true },
    name: {type: String, required: true},
});

export const Carrera = mongoose.model<ICarrera>("Carrera", CarreraSchema);

export const CreateCarrera = async function(nameab: string, name: string){
    await connectMongoDB;

    const newOCarr = new Carrera();
    newOCarr.nameab = nameab;
    newOCarr.name = name;

    newOCarr.save( (err:any) =>{
        if(err){
            console.log(err.message);
        }else{
            console.log(newOCarr);
        }
    } );
}

export function getCarrera(_nameab: string):Promise<any>{
    return new Promise<any>( resolve => {
        Carrera.findOne({ nameab: _nameab}, (err:any,data:any) => {//Duda
            if(err){
                resolve({});
            }else{
                resolve(data);
            }
        } );
    });
}


