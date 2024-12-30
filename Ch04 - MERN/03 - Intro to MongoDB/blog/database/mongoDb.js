// logic to connect to mongoDB database
import mongoose from "mongoose"

const connectToDB = async() => {
    try {
        const {connection} = await mongoose.connect(
            "mongodb+srv://blogDB:Hrishi%401748@cluster0.hw4bw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        )
        if(connection) {
            console.log(`Connected to database ::: ${connection.host}`);
            // connection.host ==> tells us to which database we are connected to.
        }
    } catch(e) {
        console.log("Error Connecting"); 
    }
}

export default connectToDB;