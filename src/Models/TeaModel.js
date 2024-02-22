import { Schema } from "mongoose";
import mongoose from "mongoose";
const teaSchema = new Schema(
  {
    type:String,
    teaName: { type: String, require: true },
    price: String,
  },
  {
    timestamps: true,
  }
);
export default mongoose.model.TeasModel || mongoose.model("TeasModel",teaSchema);
