import React, { useState } from "react";
import Card from "@/components/Card";
import Item from "@/components/Item";
import menue from "@/DB/db";
import { motion, AnimatePresence } from "framer-motion";
import CamkasCoffeeBar from "../CamkasCoffeeBar";
const CoffeeItems = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className=" flex flex-col items-center justify-center mt-16">
        <Card cardName={"قهوه ها"} smallSize={"تک"} largeSize={"دبل"} />
        <div className="mt-2">همه ی نوشیدنی ها به صورت آیس قابل سفارش است</div>
      </div>

      <div className="flex flex-col justify-center">
        {menue[0].map((item, idx) => (
          <div className=" flex  justify-center items-center " key={idx}>
            <AnimatePresence>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + idx / 10,
                }}
              >
                <Item
                  itemName={item.caffeeName}
                  smallPrice={item.smallPrice}
                  largePrice={item.largePrice}
                />
              </motion.li>
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeItems;
