import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
const item = ({ itemName, smallPrice, largePrice }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);


 
  
  return (
    <div>
      {showModal ? (
        <>
          <div className="flex justify-between w-72  mt-4 ">
            <div className=" flex gap-6">
              <div>{largePrice}</div>
              <div>{smallPrice}</div>
            </div>
            <div className="-mr-2 font-bold text-xl">{itemName}</div>
          </div>
          <div className=" flex justify-center items-center">
            <div className="  transition-all duration-100 ease-in-out backdrop-blur-sm justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative items-center justify-center w-auto my-6 mx-auto max-w-xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex  justify-center items-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <div className="flex items-center  justify-center  ">
                      <h3 className="text-xl font-semibold text-black flex items-center justify-center ">{`اطلاعات  ${itemName}`}</h3>
                      {/* <Image src={icon} width={50} /> */}
                    </div>
                    {/* <button
                    className=" bg-transparent border-0 items-center -mt-2 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="  h-6 ml-2 items-center w-6 text-2xl block  focus:outline-none">
                      ×
                    </span>
                  </button> */}
                  </div>
                  {/*body*/}
                  <div className="flex flex-col gap-4 ml-8 justify-center  items-center">
                    <div>
                      {loading ? (
                        <SkeletonTheme baseColor="#8d6a20" highlightColor="#444">

                        <Skeleton count={5} /> // Five-line loading skeleton
                        </SkeletonTheme>
                      ) : (
                        <iframe
                          src="https://www.aparat.com/video/video/embed/videohash/e6EKs/vt/frame"
                          allowFullScreen="true"
                          webkitallowfullscreen="true"
                          mozallowfullscreen="true"
                          className="flex items-center justify-center mr-8 w-64 rounded-lg py-4"
                        ></iframe>
                      )}
                    </div>
                    <div className="text-start flex justify-center items-center" style={{direction:"rtl"}}>
                      <p className="text-black flex justify-center items-center mr-8 ">
                        آفوگاتو یکی از بهترین و قدیمی ترین دسر های ایتالیایی هست
                        که طرز تهیه اون بسیار سادست . آفوگاتو یک ترکیب بسیار
                        ساده از بستنی و قهوه اسپرسو هست که علاوه بر ساده بودن،
                        بسیار لذیذ و خوشمزست .
                      </p>
                    </div>
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
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between w-72  mt-4">
            <div className=" flex gap-6">
              <div>{largePrice}</div>
              <div>{smallPrice}</div>
            </div>
            <div
              className="-mr-2 font-bold text-xl"
              onClick={() => {
                setShowModal(true);
                const timer =  setTimeout(() => setLoading(false), 1500);
                return () => clearTimeout(timer);
              }}
            >
              {itemName}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default item;
