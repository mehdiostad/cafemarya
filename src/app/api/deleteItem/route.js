import { NextResponse } from "next/server";
import { coffeeModel } from "@/Models/CoffeeModel";
import { hotDrinkModel } from "@/Models/HotDrinkModel";
import { coldDrinkModel } from "@/Models/ColdDrinkModel";
import { teaModel } from "@/Models/TeaModel";
import { breakFastModel } from "@/Models/BreakFastModel";
export const DELETE = async (req) => {
  const data = await req.json();
  console.log(data, "data");
  try {
    switch (data.type) {
      case "coffee":
        try {
          await coffeeModel.findOneAndDelete({ _id: data.id });

          return new NextResponse("Coffee has been deleted!", { status: 200 });
        } catch (error) {
          return new NextResponse(error.message, { status: 500 });
        }
        break;
      case "hot drink":
        try {
          await hotDrinkModel.findOneAndDelete({ _id: data.id });

          return new NextResponse("Hot Drink has been deleted!", {
            status: 200,
          });
        } catch (error) {
          return new NextResponse(error.message, { status: 500 });
        }
        break;
      case "tea":
        try {
          await teaModel.findOneAndDelete({ _id: data.id });

          return new NextResponse("Tea has been deleted!", { status: 200 });
        } catch (error) {
          return new NextResponse(error.message, { status: 500 });
        }
        break;
      case "cold drink":
        try {
          await coldDrinkModel.findOneAndDelete({ _id: data.id });

          return new NextResponse("Cold Drink has been deleted!", {
            status: 200,
          });
        } catch (error) {
          return new NextResponse(error.message, { status: 500 });
        }
        break;
      case "break fast":
        try {
          await breakFastModel.findOneAndDelete({ _id: data.id });

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
