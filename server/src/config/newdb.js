import mongoose from "mongoose";

const newdb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connecting db ${connect.connection.host}`);
  } catch (error) {
    console.log(`error msg ${error}`);
  }
};
export default newdb;
