import { NextResponse } from "next/server";

import { coffeeModel } from "@/Models/CoffeeModel";
import { hotDrinkModel } from "@/Models/HotDrinkModel";
import { coldDrinkModel } from "@/Models/ColdDrinkModel";
import { teaModel } from "@/Models/TeaModel";
import { breakFastModel } from "@/Models/BreakFastModel";
import connect from "@/utils/mongodb";
export const GET = async () => {
  try {
    try {
      await connect();
    } catch (error) {
      return new NextResponse("can not connect to db", { status: 500 });
    }
    const coffees = await coffeeModel.find();
    const hotDrinks = await hotDrinkModel.find();
    const coldDrinks = await coldDrinkModel.find();
    const teas = await teaModel.find();
    const breakFasts = await breakFastModel.find();
    return new NextResponse(
      JSON.stringify([coffees, hotDrinks, coldDrinks, teas, breakFasts]),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
