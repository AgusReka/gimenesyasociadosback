import mongoose from "mongoose";

const URI = "mongodb+srv://admin:admin@gimenezyasociados.uzg51z3.mongodb.net/gimenezyasociados_db?retryWrites=true&w=majority";


mongoose.connect(URI).then(db => console.log("DB Connected Succesfully")).catch(err => console.log(err));