import { NextResponse } from "next/server";

import { coffeeModel } from "@/Models/CoffeeModel";
import { hotDrinkModel } from "@/Models/HotDrinkModel";
import { coldDrinkModel } from "@/Models/ColdDrinkModel";
import { teaModle } from "@/Models/TeaModel";
import { breakFastModel } from "@/Models/BreakFastModel";
export const GET = async () => {
  try {
    const coffees = await coffeeModel.find();
    const hotDrinks = await hotDrinkModel.find();
    const coldDrinks = await coldDrinkModel.find();
    const teas = await teaModle.find();
    const breakFasts = await breakFastModel.find();
    return new NextResponse(
      JSON.stringify([coffees, hotDrinks, coldDrinks, teas, breakFasts]),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
