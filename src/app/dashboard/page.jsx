"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-scroll";
import axios from "axios";
const page = () => {
  const [coffees, setCoffees] = useState([]);
  const [hotDrinks, setHotDrinks] = useState([]);
  const [teas, setTeas] = useState([]);
  const [coldDrinks, setColdDrinks] = useState([]);
  const [breakFasts, setBreakFasts] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isCoffeeSelected, setIsCoffeeSelected] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await axios.get("http://localhost:3000/api/getAll");
      setCoffees(data[0]);
      setHotDrinks(data[1]);
      setTeas(data[3]);
      setColdDrinks(data[2]);
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
  const handleCreateItem = async (e) => {
    e.preventDefault();
    setIsUpdated(false);
    if (e.target[0].value == "قهوه") {
      const { data } = await axios.post(
        "http://localhost:3000/api/createItem",
        {
          type: "coffee",
          itemName: e.target[1].value,
          smallPrice: e.target[2].value,
          largePrice: e.target[3].value,
        }
      );
      if (data) {
        setIsUpdated(true);
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        e.target[3].value = "";
        toast.success("آیتم با موفقیت ثبت شد");
      }
    } else if (e.target[0].value == "نوشیدنی گرم") {
      const { data } = await axios.post(
        "http://localhost:3000/api/createItem",
        {
          type: "hot drink",
          itemName: e.target[1].value,
          price: e.target[2].value,
        }
      );
      if (data) {
        setIsUpdated(true);
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        toast.success("آیتم با موفقیت ثبت شد");
      }
    } else if (e.target[0].value == "سردنوش") {
      const { data } = await axios.post(
        "http://localhost:3000/api/createItem",
        {
          type: "cold drink",
          itemName: e.target[1].value,
          price: e.target[2].value,
        }
      );
      if (data) {
        setIsUpdated(true);
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        toast.success("آیتم با موفقیت ثبت شد");
      }
    } else if (e.target[0].value == "چای و دمنوش") {
      const { data } = await axios.post(
        "http://localhost:3000/api/createItem",
        {
          type: "tea",
          itemName: e.target[1].value,
          price: e.target[2].value,
        }
      );
      if (data) {
        setIsUpdated(true);
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        toast.success("آیتم با موفقیت ثبت شد");
      }
    } else if (e.target[0].value == "صبحانه و خوشمزه جات") {
      const { data } = await axios.post(
        "http://localhost:3000/api/createItem",
        {
          type: "break fast",
          itemName: e.target[1].value,
          price: e.target[2].value,
        }
      );
      if (data) {
        setIsUpdated(true);
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        toast.success("آیتم با موفقیت ثبت شد");
      }
    }
  };
  return (
    <div className="min-h-screen  bg-slate-800 text-white flex  items-center  flex-col">
      <ToastContainer rtl />
      <div className=" flex justify-around w-full bg-slate-500">
        <ul className="flex justify-around gap-16">
          <li className="text-yellow-200 hover:cursor-pointer hover:text-white transition">
            قهوه ها
          </li>
          <Link spy={true} to="HotDrink" smooth={true}>
            <li className="text-green-200 hover:cursor-pointer hover:text-white transition">
              نوشیدنی های گرم
            </li>
          </Link>
          <Link spy={true} to="Tea" smooth={true}>
            <li className="text-red-200 hover:cursor-pointer hover:text-white transition">
              چای و دمنوش
            </li>
          </Link>
          <Link spy={true} to="ColdDrink" smooth={true}>
            <li className="text-blue-200 hover:cursor-pointer hover:text-white transition">
              سردنوش ها
            </li>
          </Link>
          <Link spy={true} to="BreakFast" smooth={true}>
            <li className=" hover:cursor-pointer hover:text-white transition">
              صبحانه و خوشمزه جات
            </li>
          </Link>
          <li
            className="text-green-800 hover:cursor-pointer hover:text-white transition flex items-center gap-2"
            onClick={() => setShowModal(true)}
          >
            <div className="font-bold text-xl hover:cursor-pointer">+</div>
            <div> اضافه کردن آیتم جدید</div>
          </li>
        </ul>
      </div>
      {showModal && (
        <div className="relative flex items-center justify-center w-auto my-6 mx-auto max-w-xl min-w-96">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none justify-center items-center">
            {/*header*/}
            <div className="flex  justify-center items-center p-5 border-b border-solid border-blueGray-200 rounded-t">
              <div className="flex items-center  justify-center  ">
                <h3 className="text-xl font-semibold text-black flex items-center justify-center ">{`اضافه کردن آیتم جدید`}</h3>
              </div>
            </div>
            {/*body*/}
            <div className="flex flex-col gap-4  justify-center  items-center text-black">
              <div>
                <form onSubmit={handleCreateItem}>
                  <div className="flex flex-col gap-4 items-center mt-8">
                    <label htmlFor="">دسته بندی آیتم جدید</label>
                    <input
                      type="search"
                      list="options"
                      className="bg-blue-400 p-2 rounded-lg"
                      onChange={(e) => {
                        if (e.target.value == "قهوه") {
                          setIsCoffeeSelected(true);
                        } else {
                          setIsCoffeeSelected(false);
                        }
                      }}
                    />
                    <datalist id="options">
                      <option>قهوه</option>
                      <option>نوشیدنی گرم</option>
                      <option>سردنوش</option>
                      <option>چای و دمنوش</option>
                      <option>صبحانه و خوشمزه جات</option>
                    </datalist>
                    <label htmlFor="">نام آیتم جدید</label>
                    <input type="text" className="bg-blue-400 p-2 rounded-lg" />
                    {!isCoffeeSelected ? (
                      <>
                        <label htmlFor="">قیمت آیتم جدید</label>
                        <input
                          type="text"
                          className="bg-blue-400 p-2 rounded-lg"
                        />
                      </>
                    ) : (
                      <>
                        <label htmlFor="">قیمت تک</label>
                        <input
                          type="text"
                          className="bg-blue-400 p-2 rounded-lg"
                        />
                      </>
                    )}
                    {isCoffeeSelected && (
                      <>
                        <label htmlFor="">قیمت دبل</label>
                        <input
                          type="text"
                          className="bg-blue-400 p-2 rounded-lg"
                        />
                      </>
                    )}
                    <button type="submit">تایید</button>
                  </div>
                </form>
              </div>
              <div
                className="text-start flex justify-center items-center"
                style={{ direction: "rtl" }}
              ></div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                بستن
              </button>
              <button
                className="text-white rounded-full bg-green-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                !نوش جان
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="mt-8 flex flex-col  items-center justify-center gap-16 ">
        <div className="  ">
          <div className="flex flex-col justify-center items-center gap-4 bg-yellow-800 bg-gradient-radial py-8">
            <div className="text-yellow-300">قهوه ها</div>
            <div className=" flex flex-wrap gap-16  m-2  rounded-lg border-dashed items-center justify-center">
              {coffees &&
                coffees.map((coffee) => {
                  return (
                    <div className="p-8 border-2 border-yellow-300 rounded-lg">
                      <div className="flex items-center w-full gap-4">
                        <div className=" flex items-center  gap-8 flex-col">
                          <div dir="rtl"> نام: {coffee.itemName}</div>
                          <div>قیمت تک : {coffee.smallPrice}</div>
                          <div>قیمت دبل: {coffee.largePrice}</div>
                        </div>
                        <div className="flex gap-4">
                          <form
                            onSubmit={(e) => handleSubmit(e, coffee, "coffee")}
                            className=" flex flex-col gap-4"
                          >
                            <input
                              type="text"
                              className="p-2 text-black rounded-lg shadow-lg border-2"
                              placeholder=" تغییر نام"
                            />
                            <input
                              type="text"
                              placeholder="تغییر قیمت تک"
                              className="text-black p-2 rounded-lg shadow-lg border-2"
                            />
                            <input
                              type="text"
                              placeholder="تغییر قیمت دبل"
                              className="text-black p-2 rounded-lg shadow-lg border-2"
                            />
                            <button
                              type="submit"
                              className="p-2 rounded-lg border-2 text-white border-dashed hover:text-green-500 transition"
                            >
                              تایید
                            </button>
                          </form>
                          <button
                            className="p-2 rounded-lg bg-red-600 flex"
                            onClick={async () => {
                              const data = await axios.delete(
                                "http://localhost:3000/api/deleteItem",
                                {
                                  data: {
                                    id: coffee._id,
                                    type: "coffee",
                                  },
                                }
                              );
                              console.log(data);
                              setIsUpdated((prev) => !prev);
                            }}
                          >
                            حذف
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="HotDrink mt-8 flex flex-col gap-4 justify-center items-center bg-green-800 py-8">
            <div className="text-green-500">نوشیدنی های گرم</div>
            <div className="flex flex-wrap justify-center items-center">
              <div className=" flex flex-wrap gap-16 rounded-lg border-dashed items-center justify-center">
                {hotDrinks &&
                  hotDrinks.map((hotDrink) => {
                    return (
                      <div className="p-8 border-2 border-green-500 rounded-lg mt-4">
                        <div className="flex items-center w-full gap-4">
                          <div className="flex items-center flex-col gap-8">
                            <div dir="rtl"> نام آیتم: {hotDrink.itemName}</div>
                            <div>قیمت : {hotDrink.price}</div>
                          </div>
                          <div className="flex gap-4">
                            <form
                              onSubmit={(e) =>
                                handleSubmit(e, hotDrink, "hot drink")
                              }
                              className=" text-black flex gap-4 flex-col"
                            >
                              <input
                                type="text"
                                className="p-2 rounded-lg shadow-lg border-2"
                                placeholder=" تغییر نام"
                              />

                              <input
                                type="text"
                                placeholder="تغییر قیمت"
                                className="text-black p-2 rounded-lg shadow-lg border-2"
                              />
                              <button
                                type="submit"
                                className="p-2 rounded-lg text-white border-2 border-dashed hover:text-green-500 transition"
                              >
                                تایید
                              </button>
                            </form>
                            <button
                              className="p-2 rounded-lg bg-red-600 flex"
                              onClick={async () => {
                                const data = await axios.delete(
                                  "http://localhost:3000/api/deleteItem",
                                  {
                                    data: {
                                      id: hotDrink._id,
                                      type: "hot drink",
                                    },
                                  }
                                );
                                console.log(data);
                                setIsUpdated((prev) => !prev);
                              }}
                            >
                              حذف
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="Tea flex flex-col gap-4 mt-8 justify-center items-center bg-red-800 py-8">
            <div className="text-red-500">چای و دمنوش ها</div>
            <div className=" flex flex-wrap gap-16 rounded-lg border-dashed items-center justify-center">
              {teas &&
                teas.map((tea) => {
                  return (
                    <div className="p-8 border-2 border-red-500 rounded-lg mt-4">
                      <div className="flex items-center w-full gap-4">
                        <div className="flex flex-col gap-4">
                          <div dir="rtl"> نام آیتم: {tea.itemName}</div>
                          <div>قیمت : {tea.price}</div>
                        </div>
                        <div className="flex gap-4">
                          <form
                            onSubmit={(e) => handleSubmit(e, tea, "tea")}
                            className=" flex gap-4 flex-col"
                          >
                            <input
                              type="text"
                              className="p-2 text-black  rounded-lg shadow-lg border-2"
                              placeholder="تغییر نام"
                            />

                            <input
                              type="text"
                              placeholder="تغییر قیمت"
                              className="text-black p-2 rounded-lg shadow-lg border-2"
                            />
                            <button
                              type="submit"
                              className="p-2 rounded-lg border-2 border-dashed hover:text-green-500 transition"
                            >
                              تایید
                            </button>
                          </form>
                          <button
                            className="p-2 rounded-lg bg-red-600 flex"
                            onClick={async () => {
                              const data = await axios.delete(
                                "http://localhost:3000/api/deleteItem",
                                {
                                  data: {
                                    id: tea._id,
                                    type: "tea",
                                  },
                                }
                              );
                              console.log(data);
                              setIsUpdated((prev) => !prev);
                            }}
                          >
                            حذف
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="ColdDrink flex flex-col mt-8 gap-4 justify-center items-center bg-blue-800 py-8">
            <div className="text-blue-500">سردنوش ها</div>
            <div className=" flex flex-wrap gap-16 rounded-lg border-dashed items-center justify-center">
              {coldDrinks &&
                coldDrinks.map((coldDrink) => {
                  return (
                    <div className="p-8 rounded-lg border-2 border-blue-500 mt-4">
                      <div className="flex items-center w-full gap-4">
                        <div>
                          <div dir="rtl"> نام آیتم: {coldDrink.itemName}</div>
                          <div>قیمت : {coldDrink.price}</div>
                        </div>
                        <div className="flex gap-4 ">
                          <form
                            onSubmit={(e) =>
                              handleSubmit(e, coldDrink, "cold drink")
                            }
                            className=" flex gap-4 flex-col"
                          >
                            <input
                              type="text"
                              className="p-2 text-black  rounded-lg shadow-lg border-2"
                              placeholder="تغییر نام"
                            />

                            <input
                              type="text"
                              placeholder="تغییر قیمت"
                              className="text-black p-2 rounded-lg shadow-lg border-2"
                            />
                            <button
                              type="submit"
                              className="p-2 rounded-lg border-2 border-dashed hover:text-green-500 transition"
                            >
                              تایید
                            </button>
                          </form>
                          <button
                            className="p-2 rounded-lg bg-red-600 flex"
                            onClick={async () => {
                              const data = await axios.delete(
                                "http://localhost:3000/api/deleteItem",
                                {
                                  data: {
                                    id: coldDrink._id,
                                    type: "cold drink",
                                  },
                                }
                              );
                              console.log(data);
                              setIsUpdated((prev) => !prev);
                            }}
                          >
                            حذف
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="BreakFast flex flex-col justify-center items-center mt-8 gap-4 bg-slate-800">
            <div>صبحانه و خوشمزه جات</div>
            <div className=" flex flex-wrap gap-16 rounded-lg border-dashed items-center justify-center">
              {breakFasts &&
                breakFasts.map((breakFast) => {
                  return (
                    <div className="p-8 border-2 rounded-lg mt-4">
                      <div className="flex items-center w-full gap-4">
                        <div>
                          <div dir="rtl"> نام آیتم: {breakFast.itemName}</div>
                          <div>قیمت : {breakFast.price}</div>
                        </div>
                        <div className="flex gap-4">
                          <form
                            onSubmit={(e) =>
                              handleSubmit(e, breakFast, "break fast")
                            }
                            className=" flex gap-4 flex-col"
                          >
                            <input
                              type="text"
                              className="p-2 text-black rounded-lg shadow-lg border-2"
                              placeholder=" تغییر نام"
                            />

                            <input
                              type="text"
                              placeholder="تغییر قیمت"
                              className="text-black p-2 rounded-lg shadow-lg border-2"
                            />
                            <button
                              type="submit"
                              className="p-2 rounded-lg border-2 border-dashed hover:text-green-500 transition"
                            >
                              تایید
                            </button>
                          </form>
                          <button
                            className="p-2 rounded-lg bg-red-600 flex"
                            onClick={async () => {
                              const data = await axios.delete(
                                "http://localhost:3000/api/deleteItem",
                                {
                                  data: {
                                    id: breakFast._id,
                                    type: "break fast",
                                  },
                                }
                              );
                              console.log(data);
                              setIsUpdated((prev) => !prev);
                            }}
                          >
                            حذف
                          </button>
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
