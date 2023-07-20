import mongoose from "mongoose";

let isConnected= false

const CONNECTION_URL = `mongodb://${process.env.MONGODB_URL}`

export const connectToDB = async () => {
        mongoose.set('strictQuery', true)

        if(isConnected){
            console.log('mongodb is already connected')
            return ;
        }

        try {
            await mongoose.connect(CONNECTION_URL,{
                dbName: "chatdb",
                // useNewUrlPerser: true,
                useUnifiedTopology: true,
            })

            isConnected = true
            console.log('mongodb connected')
        } catch (error) {
            console.log(error)
            
        }
}