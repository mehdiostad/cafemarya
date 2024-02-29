import connect from "@/utils/mongodb";
import { NextResponse } from "next/server";

import { coffeeModel } from "@/Models/CoffeeModel";
import { hotDrinkModel } from "@/Models/HotDrinkModel";
import { coldDrinkModel } from "@/Models/ColdDrinkModel";
import { teaModel } from "@/Models/TeaModel";
import { breakFastModel } from "@/Models/BreakFastModel";
export const POST = async (request, response) => {
  const req = await request.json();
  await connect();

  switch (req.type) {
    case "coffee":
      try {
        const newCoffee = new coffeeModel({
          type: req.type,
          itemName: req.itemName,
          smallPrice: req.smallPrice,
          largePrice: req.largePrice,
        });
        await newCoffee.save();
        return new NextResponse(JSON.stringify(newCoffee), { status: 200 });
      } catch (error) {
        return new NextResponse(error.message, { status: 500 });
      }
      break;
    case "hot drink":
      const newHotDrink = new hotDrinkModel({
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
      const newTea = new teaModel({
        itemName: req.itemName,
        price: req.price,
      });
      try {
        await newTea.save();
        return new NextResponse("Tea has been added!", { status: 200 });
      } catch (error) {
        return new NextResponse(error.message, { status: 500 });
      }
      break;
    case "cold drink":
      const newColdDrink = new coldDrinkModel({
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
      const newBreakeFast = new breakFastModel({
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
