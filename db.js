const {connect} = require('mongoose');


const connectDB = async()=>{
    try {
        await connect("mongodb+srv://toufik:toufik@cluster0.yvams2j.mongodb.net/?retryWrites=true&w=majority");
        console.log('mongodb connected');  
    } catch (error) {
        console.log(error)
    }
    
};

module.exports = {connectDB};