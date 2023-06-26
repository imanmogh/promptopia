import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {

    if(isConnected) {
        console.log('MongoDC is already connected')
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true
    } catch (error) {
        console.log(error)
    }
}