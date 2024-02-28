import { NextResponse } from "next/server";
import CoffeeModel from "../../../Models/CoffeeModel";
import HotDrinkModel from "../../../Models/HotDrinkModel";
import TeasModel from "../../../Models/TeaModel";
import ColdDrinksModel from "../../../Models/ColdDrinkModel";
import BreakFastModel from "../../../Models/BreakFastModel";
export const DELETE = async (req) => {
  const { data } = await req.json();
  try {
    switch (type) {
      case "coffee":
        try {
          await CoffeeModel.findOneAndDelete({ _id: data.id });

          return new NextResponse("Coffee has been deleted!", { status: 200 });
        } catch (error) {
          return new NextResponse(error.message, { status: 500 });
        }
        break;
      case "hot drink":
        try {
          await HotDrinkModel.findOneAndDelete({ _id: data.id });

          return new NextResponse("Hot Drink has been deleted!", {
            status: 200,
          });
        } catch (error) {
          return new NextResponse(error.message, { status: 500 });
        }
        break;
      case "tea":
        try {
          await TeasModel.findOneAndDelete({ _id: data.id });

          return new NextResponse("Tea has been deleted!", { status: 200 });
        } catch (error) {
          return new NextResponse(error.message, { status: 500 });
        }
        break;
      case "cold drink":
        try {
          await ColdDrinksModel.findOneAndDelete({ _id: data.id });

          return new NextResponse("Cold Drink has been deleted!", {
            status: 200,
          });
        } catch (error) {
          return new NextResponse(error.message, { status: 500 });
        }
        break;
      case "break fast":
        try {
          await BreakFastModel.findOneAndDelete({ _id: data.id });

          return new NextResponse("Break fast has been deleted!", {
            status: 200,
          });
        } catch (error) {
          return new NextResponse(error.message, { status: 500 });
        }
        break;

      default:
        break;
    }
  } catch (error) {}
};
