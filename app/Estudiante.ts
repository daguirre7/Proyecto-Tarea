import mongoose = require("mongoose");
import {ICarrera, getCarrera} from "./Carrera"
import {connectMongoDB} from "./helpers"

interface IEstudiante extends mongoose.Document { 
    nickname:string;
    name: string;
    lastname: string;
    email: string;
    password: string;
    accountnumber: string;
    CarreraID: ICarrera
}

const EstudianteSchema = new mongoose.Schema({
    nickname: { type: String, required: true},
    name: { type: String, required: true},
    lastname: {type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
    accountnumber: {type: Number, required: true},
    CarreraID: { type: mongoose.Schema.Types.ObjectId, ref: "Carrera" }
});


export const Estudiante = mongoose.model<IEstudiante>("Estudiante", EstudianteSchema);

export const CreateEstudiante = async function(carreraid:string,nickname:string,name:string, lastname:string,email:string,password:string,accountnumber:string){
    //Conectar con la base de datos
    await connectMongoDB;
    //Obtener el proveedor en funcion del nombre
    const carr:any = await getCarrera(carreraid);

    //persistencia de nuestro producto
    const oE = new Estudiante();
    oE.nickname = nickname;
    oE.name = name;
    oE.lastname = lastname;
    oE.email = email;
    oE.password = password;
    oE.accountnumber = accountnumber;
    oE.CarreraID = carr;

    oE.save((err:any)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log(oE);
        }
    });
}

