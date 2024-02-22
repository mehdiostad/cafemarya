import { Schema } from "mongoose";
import mongoose from "mongoose";
const cofeeSchema = new Schema(
  {
    type:String,
    coffeeName: { type: String, require: true },
    smallPrice: String,
    largePrice: String,
  },
  {
    timestamps: true,
  }
);
module.exports= mongoose.model.CoffeesModel || mongoose.model("CoffeesModel",cofeeSchema);
