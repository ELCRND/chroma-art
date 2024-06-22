import React from "react";

const Price = ({ price, count }: { price: number; count: number }) => {
  const total = price * count;
  return (
    <div className="flex flex-col">
      <span className="mr-8 text-3xl text-white">{total}Р</span>
      <span className="text-xs">{price} Р/шт</span>
    </div>
  );
};

export default Price;
