import AlternativeImage from "@/app/components/elements/Product/AlternativeImage";
import MainImage from "@/app/components/elements/Product/MainImage";
import { useState } from "react";

type Props = {
  images: string[];
  type: string;
  price: number;
  setPrice: (n: number) => void;
  size: number;
  setSize: (n: number) => void;
};

const Gallery = ({ images, type, price, setPrice, size, setSize }: Props) => {
  return (
    <div className="w-3/4 h-full mx-auto flex flex-col items-center">
      <MainImage src={images[size]} alt={type} />

      <div className="flex gap-8">
        <AlternativeImage
          key={"0.9L"}
          src={images[0]}
          alt={type}
          width={60}
          onChange={() => {
            setSize(0);
            setPrice(price);
          }}
          isCheked={true}
        />
        <AlternativeImage
          key={"2.7L"}
          src={images[1]}
          alt={type}
          width={80}
          onChange={() => {
            setSize(1);
            setPrice(price * 3 - 100);
          }}
        />
        <AlternativeImage
          key={"9L"}
          src={images[2]}
          alt={type}
          width={100}
          onChange={() => {
            setSize(2);
            setPrice(price * 10 - 300);
          }}
        />
      </div>
    </div>
  );
};

export default Gallery;
