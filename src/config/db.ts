import 'dotenv/config';
import mongoose from "mongoose";

 mongoose.connect(
  process.env.CORE_MONGODB,
     (err) => {
    if (!err) {
      console.log('MongoDB Connection Succeeded');
    } else {
      console.log(`Error in DB connection: ${err}`);
    }
  }
 )


