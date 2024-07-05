import { Metadata } from "next";
import Catalog from "../components/modules/Catalog/Catalog";

export default async function IndexPage() {
  const products = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`
  ).then((res) => res.json());

  return (
    <>
      <Catalog products={products} />
    </>
  );
}

export const metadata: Metadata = {
  title: "Каталог",
};

export const dynamic = "force-dynamic";
