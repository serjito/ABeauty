import mongoose, { connect, connection, ConnectionStates } from 'mongoose';

mongoose.set('strictQuery', false);

const connectDB = async () => {
  if (!process.env.MONGODB_KEY) {
    throw new Error('MONGODB_KEY is not set in the environment variables');
  }
  return await mongoose.connect(process.env.MONGODB_KEY);
};

export default connectDB;
