import { Metadata } from "next";
import Basket from "../components/modules/Basket/Basket";

export default async function IndexPage() {
  //   const products = await fetch(
  //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`
  //   ).then((res) => res.json());

  return (
    <>
      <Basket />
    </>
  );
}

export const metadata: Metadata = {
  title: "Корзина",
};
