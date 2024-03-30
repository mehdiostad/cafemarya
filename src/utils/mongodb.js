import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://meostad80:ZmvfaDp5LSB40bXK@cafemarya.e2xxom5.mongodb.net/cafeMarya"
    );
  } catch (error) {
    console.log(error.message);
  }
};
export default connect;
