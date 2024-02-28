import { Schema } from "mongoose";
import mongoose from "mongoose";
const hotDrinkSchema = new Schema(
  {
    type: String,
    itemName: { type: String, require: true },
    price: String,
  },
  {
    timestamps: true,
  }
);
export const hotDrinkModel =
  mongoose.models.HotDrink || mongoose.model("HotDrink", hotDrinkSchema);
