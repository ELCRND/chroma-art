import { useState } from "react";
import Gallery from "./Gallery/Gallery";
import Characteristics from "./Characteristics/Characteristics";
import Counter from "@/app/components/elements/Product/Counter";
import Price from "@/app/components/elements/Product/Price";
import AddToCart from "@/app/components/elements/Product/AddToCart";
import BuyBtn from "@/app/components/elements/Product/BuyBtn";
import { selectProduct } from "@/lib/features/slices/productSlice";
import { addProductToLS, addToBasket } from "@/lib/features/basket/basketSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const ProductModal = ({ email }: { email: string }) => {
  const product = useAppSelector(selectProduct);
  const [size, setSize] = useState(0);
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(product.price);
  const dispatch = useAppDispatch();
  const isInBusket = useAppSelector((state) => state.basketSlice.products)
    .map((p) => {
      return p.id + p.size;
    })
    .includes(product._id + product.characteristics.sizes[size]);
  const handleClick = () => {
    const selectedProducts = {
      id: product._id,
      name: product.name,
      type: product.type,
      count,
      price,
      img: product.images.filter((i) => i.includes("_" + (size + 1)))[0],
      size: product.characteristics.sizes[size],
    };
    if (email) {
      dispatch(
        addToBasket({
          email,
          product: selectedProducts,
        })
      );
    } else {
      dispatch(addProductToLS(selectedProducts));
    }
  };

  return (
    <form className="p-10 grid grid-cols-2 gap-10 text-gray-400 ">
      <Gallery
        images={product.images}
        type={product.type}
        price={product.price}
        setPrice={setPrice}
        size={size}
        setSize={setSize}
      />

      <div className="h-full flex flex-col">
        <h3 className="mb-4 text-white text-3xl">{product.name}</h3>
        <p>{product.description}</p>

        <Characteristics characteristics={product.characteristics} />

        <div className="mt-auto flex items-center justify-end">
          <Counter count={count} setCount={setCount} />
          <Price count={count} price={price} />
          <div className="flex flex-col gap-2">
            <AddToCart
              disabled={!count || isInBusket}
              onClick={handleClick}
              isInBusket={isInBusket}
            />
            <BuyBtn disabled={!count} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductModal;
