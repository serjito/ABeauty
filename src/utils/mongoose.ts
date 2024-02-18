import mongoose, { connect, connection, ConnectionStates } from 'mongoose';

mongoose.set('strictQuery', false);

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGODB_KEY is not set in the environment variables');
  }
  return await mongoose.connect(process.env.MONGO_URI);
};

export default connectDB;
