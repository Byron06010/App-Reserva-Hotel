const mongoose=require("mongoose")

const { prueba_HOST,prueba_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${prueba_HOST}/${prueba_DATABASE}`;

mongoose.connect(MONGODB_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true 
})
    .then(db=> console.log("database conectada"))
    .catch(err=>console.log(err));