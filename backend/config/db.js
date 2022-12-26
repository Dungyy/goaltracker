import { connect } from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await connect(process.env.MONGO_URI);

    console.log(
      `MongoDB Connected: `.bgBlack + `${conn.connection.host}`.bgGreen
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
