// logic to connect to mongoDB database
import mongoose from "mongoose"

const connectToDB = async() => {
    try {
        const {connection} = await mongoose.connect(
            "mongodb+srv://blogDB:Hrishi%401748@cluster0.hw4bw.mongodb.net/cinemate?retryWrites=true&w=majority&appName=Cluster0"
            // We passed our database name here(before "?" mark)
        )
        if(connection) {
            console.log(`Connected to database ::: ${connection.host}`);
            // connection.host ==> tells us to which database we are connected to.
        }
    } catch(e) {
        console.error("Error Connecting to MongoDB:", e.message);
        console.error(e.stack); 
    }
}

export default connectToDB;