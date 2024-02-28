import { NextResponse } from "next/server";
import { coffeeModel } from "@/Models/CoffeeModel";
import { hotDrinkModel } from "@/Models/HotDrinkModel";
import { coldDrinkModel } from "@/Models/ColdDrinkModel";
import { teaModle } from "@/Models/TeaModel";
import { breakFastModel } from "@/Models/BreakFastModel";
export const PUT = async (req) => {
  const { data, type } = await req.json();
  console.log(data, type);
  switch (type) {
    case "coffee":
      try {
        const coffeeItem = await coffeeModel.findById({ _id: data.id });
        await coffeeItem.updateOne({
          $set: {
            itemName: data.itemName,
            smallPrice: data.smallPrice,
            largePrice: data.largePrice,
          },
        });
        return new NextResponse("Coffee has been updated!", { status: 200 });
      } catch (error) {
        return new NextResponse(error.message, { status: 500 });
      }
      break;
    case "hot drink":
      try {
        const hotDrink = await hotDrinkModel.findById({ _id: data.id });
        await hotDrink.updateOne({
          $set: {
            itemName: data.itemName,
            price: data.price,
          },
        });
        return new NextResponse("Hot Drink has been updated!", { status: 200 });
      } catch (error) {
        return new NextResponse(error.message, { status: 500 });
      }
      break;
    case "tea":
      try {
        const tea = await teaModle.findById({ _id: data.id });
        await tea.updateOne({
          $set: {
            itemName: data.itemName,
            price: data.price,
          },
        });
        return new NextResponse("Tea has been updated!", { status: 200 });
      } catch (error) {
        return new NextResponse(error.message, { status: 500 });
      }
      break;
    case "cold drink":
      try {
        const coldDrink = await coldDrinkModel.findById({ _id: data.id });
        await coldDrink.updateOne({
          $set: {
            itemName: data.itemName,
            price: data.price,
          },
        });
        return new NextResponse("Cold Drink has been updated!", {
          status: 200,
        });
      } catch (error) {
        return new NextResponse(error.message, { status: 500 });
      }
      break;
    case "break fast":
      try {
        const breakFast = await breakFastModel.findById({ _id: data.id });
        await breakFast.updateOne({
          $set: {
            itemName: data.itemName,
            price: data.price,
          },
        });
        return new NextResponse("Break fast has been updated!", {
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
