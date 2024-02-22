import { Schema } from "mongoose";
import mongoose from "mongoose";
const coldDrinkSchema = new Schema(
  {
    type:String,
    itemName: { type: String, require: true },
    price: String,
  },
  {
    timestamps: true,
  }
);
export default mongoose.model.ColdDrinksModel || mongoose.model("ColdDrinksModel",coldDrinkSchema);
