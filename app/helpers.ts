import mongoose = require("mongoose");
import { resolve } from "dns";

const uri: string = "mongodb+srv://admin777:admin7@cluster0-ht2pz.azure.mongodb.net/proyectotareaunah?retryWrites=true&w=majority";
//const uri: string = "mongodb+srv://ADMI:31579436@cluster0-mibza.azure.mongodb.net/test?retryWrites=true&w=majority";

export const connectMongoDB  = new Promise<void>(resolve => {
    mongoose.connect(uri,{ useNewUrlParser:true, useUnifiedTopology: true }, (err: any) => {
        if(err){
            console.log(err.message);
        }else{
            console.log("Conexion exitosa");
        }
        resolve();
    });
});


