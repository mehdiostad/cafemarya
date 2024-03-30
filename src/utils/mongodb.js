import mongoose from "mongoose";

 const connect = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
  } catch (error) {
    console.log(error.message);
  }
};
export default connect;
