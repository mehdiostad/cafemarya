import { Schema } from "mongoose";
import mongoose from "mongoose";
const coffeeSchema = new Schema(
  {
    type: String,
    itemName: String,
    smallPrice: String,
    largePrice: String,
  },
  {
    timestamps: true,
  }
);
export const coffeeModel = mongoose.models.Coffee || mongoose.model("Coffee", coffeeSchema);
