import { Metadata } from "next";
import Favorites from "../components/modules/Favorites/Favorites";

export default async function IndexPage() {
  // const products = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`
  // ).then((res) => res.json());
  return (
    <>
      {/* <Favorites products={products} /> */}
      <Favorites />
    </>
  );
}

export const metadata: Metadata = {
  title: "Избранное",
};

export const dynamic = "force-dynamic";
