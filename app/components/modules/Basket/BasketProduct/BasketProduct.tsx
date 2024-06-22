import { useState } from "react";
import Image from "next/image";
import Counter from "@/app/components/elements/Basket/Counter";
import Title from "@/app/components/elements/Basket/Title";
import { IBasketProduct } from "@/types/products";

const BasketProduct = ({
  product,
  handleClick,
}: {
  product: IBasketProduct;
  handleClick: (id: string, size: string | number) => void;
}) => {
  const [count, setCount] = useState(product.count);
  return (
    <li className="min-h-[none] sm:min-h-32 md:flex-row last-of-type:mb-80 py-2 px-5 flex flex-col items-center bg-neutral-900 bg-opacity-80 rounded-2xl text-white text-center border border-black hover:border-white transition-all hover:bg-opacity-100">
      <Image
        className="md:mr-10"
        src={product.img}
        alt={product.type}
        width={80}
        height={50}
      />
      <Title name={product.name} type={product.type} size={product.size} />
      <Counter count={count} setCount={setCount} />
      <span className="w-full max-w-[120px] text-2xl">
        <b className="text-amber-200">{product.price * count}</b> Р
      </span>
      <button
        className="md:self-start self-end"
        onClick={() => handleClick(product.id, product.size)}
      >
        X
      </button>
    </li>
  );
};

export default BasketProduct;
