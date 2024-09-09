import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        // connecting to the MongoDB
        // mongoose takes the URI of the MongoDB as the parameter
        const connection = await mongoose.connect(process.env.MONGO_URI);
        // logging the connection host
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (err) {
        // logging the message error
        console.error(`Error: ${err.message}`);
        // exiting the process
        process.exit(1);
    }
}