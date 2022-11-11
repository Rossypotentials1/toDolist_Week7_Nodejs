const mongoose = require("mongoose");

async function connect(url){
mongoose.connect( url || "mongodb://localhost:27017/Databaselist",{
    useNewUrlParser:true, useUnifiedTopology:true
},(err) =>{
    if(err){
        console.log(err)
    }else{
        console.log("successfully connected")
    }
})
}
module.exports = connect;