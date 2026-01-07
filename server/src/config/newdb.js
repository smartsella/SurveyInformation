import mongoose from "mongoose";

const newdb = async () => {
  try {
    const connect = await mongoose.connect(process.env.Mongo_URL);
    console.log(`connecting db`);
  } catch (error) {
    console.log(`error msg ${error}`);
  }
};
export default newdb;
