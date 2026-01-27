const {Schema,model}=require("mongoose");

const noteschema=new Schema({
    nombre: {
        type:String,
        required:true
    },
    rut:{
        type:String,
        required:true
    },
    gmail:{
        type:String,
        required:true
    },
    destino:{
        type:String,
        required:true
    },
    desde:{
        type: String,
        required:true

    },
    hasta:{
        type: String,
        required:true

    },
    habitaciones:{
        type: String,
        required:true

    },
    adultos:{
        type: String,
        required:true

    },
    niños:{
        type: String,
        required:true

    },
    user:{
        type: String,
        required: false

    }
    
},{
    timestamps:true
})

module.exports = model("note",noteschema);