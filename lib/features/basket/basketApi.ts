import { IBasketProduct } from "@/types/products";

export const getBasketFromDb = async (email: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/basket`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }
  );
  const result = await response.json();

  return result;
};

export const addProductToBasket = async ({
  email,
  product,
}: {
  email: string;
  product: IBasketProduct;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/basket/addOne`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, product }),
    }
  );
  const result = await response.json();

  return result;
};
export const removeProductFromBasket = async ({
  email,
  productId,
  productSize,
}: {
  email: string;
  productId: string;
  productSize: string | number;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/basket/removeOne`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, productId, productSize }),
    }
  );
  const result = await response.json();

  return result;
};

export const getBasketStateFromLS = (email: string): IBasketProduct[] => {
  const dataFromLS = localStorage.getItem("basket");
  if (dataFromLS) {
    const initialDataFromLS = JSON.parse(dataFromLS);
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/basket/addMany`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        newData: initialDataFromLS,
      }),
    });
    return initialDataFromLS;
  }
  return [];
};
