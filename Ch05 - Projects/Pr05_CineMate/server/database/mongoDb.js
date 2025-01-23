// logic to connect to mongoDB database
import mongoose from "mongoose"

const connectToDB = async() => {
    try {
        const {connection} = await mongoose.connect(
            process.env.mongo_db_url
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