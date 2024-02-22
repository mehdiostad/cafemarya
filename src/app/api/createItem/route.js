import connect from "@/utils/mongodb";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
let CoffeesModel = mongoose.model("CoffeesModel");
let HotDrinkModel = mongoose.model("HotDrinksModel");
let TeasModel = mongoose.model("TeasModel");
let ColdDrinksModel = mongoose.model("ColdDrinksModel");
let BreakFastModel = mongoose.model("BreakFastsModel");

export const POST = async (request, response) => {
  const req = await request.json();
  await connect();
  console.log(req);
  switch (req.type) {
    case "coffee":
      const newCoffee = new CoffeesModel({
        coffeName: req.coffeName,
        smallPrice: req.smallPrice,
        largePrice: req.largePrice,
      });
      try {
        await newCoffee.save();
        return new NextResponse("Coffee has been added!", { status: 200 });
      } catch (error) {
        return new NextResponse(error.message, { status: 500 });
      }
      break;
    case "hot drink":
      const newHotDrink = new HotDrinkModel({
        itemName: req.itemName,
        price: req.price,
      });
      try {
        await newHotDrink.save();
        return new NextResponse("new hot drink has been added!", {
          status: 200,
        });
      } catch (error) {
        return new NextResponse(error.message, { status: 500 });
      }
      break;
    case "tea":
      const newTea = new TeasModel({
        itemName: req.itemName,
        price: req.price,
      });
      try {
        await newHotDrink.save();
        return new NextResponse("Tea has been added!", { status: 200 });
      } catch (error) {
        return new NextResponse(error.message, { status: 500 });
      }
      break;
    case "tea":
      const newColdDrink = new ColdDrinksModel({
        itemName: req.itemName,
        price: req.price,
      });
      try {
        await newColdDrink.save();
        return new NextResponse("new cold drink has been added!", {
          status: 200,
        });
      } catch (error) {
        return new NextResponse(error.message, { status: 500 });
      }
      break;
    case "break fast":
      const newBreakeFast = new BreakFastModel({
        itemName: req.itemName,
        price: req.price,
      });
      try {
        await newBreakeFast.save();
        return new NextResponse("new break fast has been added!", {
          status: 200,
        });
      } catch (error) {
        return new NextResponse(error.message, { status: 500 });
      }
      break;

    default:
      break;
  }
};
export const dynamic = "force-static";
