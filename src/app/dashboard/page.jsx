"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Item from "@/components/Item";
import axios from "axios";
import Card from "@/components/Card";
const page = () => {
  const [coffees, setCoffees] = useState([]);
  const [hotDrinks, setHotDrinks] = useState([]);
  const [teas, setTeas] = useState([]);
  const [coldDrinks, setColdDrinks] = useState([]);
  const [breakFasts, setBreakFasts] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await axios.get("http://localhost:3000/api/getAll");
      setCoffees(data[0]);
      setHotDrinks(data[1]);
      setTeas(data[2]);
      setColdDrinks(data[3]);
      setBreakFasts(data[4]);
    };
    fetchItems();
  }, [isUpdated]);
  const handleSubmit = async (e, item, type) => {
    e.preventDefault();
    if (
      e.target[0].value == "" &&
      e.target[1].value == "" &&
      e.target[2].value == ""
    ) {
      alert("حداقل یکی از مقادیر باید پر شده باشند");
      return false;
    }
    setIsUpdated(false);
    if (type == "coffee") {
      const { data } = await axios.put("http://localhost:3000/api/updateItem", {
        data: {
          itemName: e.target[0].value == "" ? item.itemName : e.target[0].value,
          smallPrice:
            e.target[1].value == "" ? item.smallPrice : e.target[1].value,
          largePrice:
            e.target[2].value == "" ? item.largePrice : e.target[2].value,
          id: item._id,
        },
        type,
      });
      if (data) {
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        toast.success("آیتم با موفقیت تغییر کرد");
        setIsUpdated(true);
      }
    } else {
      try {
        const data = await axios.put("http://localhost:3000/api/updateItem", {
          data: {
            itemName:
              e.target[0].value == "" ? item.itemName : e.target[0].value,
            price: e.target[1].value == "" ? item.price : e.target[1].value,

            id: item._id,
          },
          type,
        });

        if (data.status == 200) {
          e.target[0].value = "";
          e.target[1].value = "";

          toast.success("آیتم با موفقیت تغییر کرد");
          setIsUpdated(true);
        }
      } catch (error) {
        toast.error("خطایی رخ داده است، با توسعه دهنده تماس بگیرید");
      }
    }
  };
  return (
    <div className="min-h-screen  bg-blue-300 flex  items-center  flex-col">
      <ToastContainer rtl />
      <div className="mt-8 flex flex-col items-center">
        <div>قهوه ها</div>

        <div>
          {coffees &&
            coffees.map((coffee) => {
              return (
                <div>
                  <div className="flex items-center w-full">
                    <div>
                      <div dir="rtl"> نام قهوه: {coffee.coffeeName}</div>
                      <div>قیمت تک : {coffee.smallPrice}</div>
                      <div>قیمت دبل: {coffee.largePrice}</div>
                    </div>
                    <div className="flex gap-4">
                      <form
                        onSubmit={(e) => handleSubmit(e, coffee, "coffee")}
                        className=" flex gap-4"
                      >
                        <input
                          type="text"
                          className="p-2 rounded-lg shadow-lg border-2"
                          placeholder="تغییر نام"
                        />
                        <input
                          type="text"
                          placeholder="تغییر قیمت تک"
                          className="p-2 rounded-lg shadow-lg border-2"
                        />
                        <input
                          type="text"
                          placeholder="تغییر قیمت دبل"
                          className="p-2 rounded-lg shadow-lg border-2"
                        />
                        <button
                          type="submit"
                          className="p-2 rounded-lg border-2 border-dashed hover:text-green-500 transition"
                        >
                          تایید
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div>
          <div>نوشیدنی های گرم</div>
          <div>
            {hotDrinks &&
              hotDrinks.map((hotDrink) => {
                return (
                  <div>
                    <div className="flex items-center w-full">
                      <div>
                        <div dir="rtl"> نام آیتم: {hotDrink.itemName}</div>
                        <div>قیمت : {hotDrink.price}</div>
                      </div>
                      <div className="flex gap-4">
                        <form
                          onSubmit={(e) =>
                            handleSubmit(e, hotDrink, "hot drink")
                          }
                          className=" flex gap-4"
                        >
                          <input
                            type="text"
                            className="p-2 rounded-lg shadow-lg border-2"
                            placeholder="تغییر نام"
                          />

                          <input
                            type="text"
                            placeholder="تغییر قیمت"
                            className="p-2 rounded-lg shadow-lg border-2"
                          />
                          <button
                            type="submit"
                            className="p-2 rounded-lg border-2 border-dashed hover:text-green-500 transition"
                          >
                            تایید
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div>
            <div>چای و دمنوش ها</div>
            <div>
              {teas &&
                teas.map((tea) => {
                  return (
                    <div>
                      <div className="flex items-center w-full">
                        <div>
                          <div dir="rtl"> نام آیتم: {tea.itemName}</div>
                          <div>قیمت : {tea.price}</div>
                        </div>
                        <div className="flex gap-4">
                          <form
                            onSubmit={(e) => handleSubmit(e, tea, "tea")}
                            className=" flex gap-4"
                          >
                            <input
                              type="text"
                              className="p-2 rounded-lg shadow-lg border-2"
                              placeholder="تغییر نام"
                            />

                            <input
                              type="text"
                              placeholder="تغییر قیمت"
                              className="p-2 rounded-lg shadow-lg border-2"
                            />
                            <button
                              type="submit"
                              className="p-2 rounded-lg border-2 border-dashed hover:text-green-500 transition"
                            >
                              تایید
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div>
            <div>سردنوش ها</div>
            <div>
              {coldDrinks &&
                coldDrinks.map((coldDrink) => {
                  return (
                    <div>
                      <div className="flex items-center w-full">
                        <div>
                          <div dir="rtl"> نام آیتم: {coldDrink.itemName}</div>
                          <div>قیمت : {coldDrink.price}</div>
                        </div>
                        <div className="flex gap-4">
                          <form
                            onSubmit={(e) =>
                              handleSubmit(e, coldDrink, "cold drink")
                            }
                            className=" flex gap-4"
                          >
                            <input
                              type="text"
                              className="p-2 rounded-lg shadow-lg border-2"
                              placeholder="تغییر نام"
                            />

                            <input
                              type="text"
                              placeholder="تغییر قیمت"
                              className="p-2 rounded-lg shadow-lg border-2"
                            />
                            <button
                              type="submit"
                              className="p-2 rounded-lg border-2 border-dashed hover:text-green-500 transition"
                            >
                              تایید
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div>
            <div>صبحانه و خوشمزه جات</div>
            <div>
              {breakFasts &&
                breakFasts.map((breakFast) => {
                  return (
                    <div>
                      <div className="flex items-center w-full">
                        <div>
                          <div dir="rtl"> نام آیتم: {breakFast.itemName}</div>
                          <div>قیمت : {breakFast.price}</div>
                        </div>
                        <div className="flex gap-4">
                          <form
                            onSubmit={(e) =>
                              handleSubmit(e, breakFast, "break fast")
                            }
                            className=" flex gap-4"
                          >
                            <input
                              type="text"
                              className="p-2 rounded-lg shadow-lg border-2"
                              placeholder="تغییر نام"
                            />

                            <input
                              type="text"
                              placeholder="تغییر قیمت"
                              className="p-2 rounded-lg shadow-lg border-2"
                            />
                            <button
                              type="submit"
                              className="p-2 rounded-lg border-2 border-dashed hover:text-green-500 transition"
                            >
                              تایید
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
