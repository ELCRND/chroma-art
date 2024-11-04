"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import SettingsBtn from "../../elements/Basket/SettingsBtn";
import { selectUser } from "@/lib/features/auth/authSlice";
import { useEffect } from "react";
import {
  getBasket,
  removeFromBasket,
  removeProductFromLS,
  selectBasket,
} from "@/lib/features/basket/basketSlice";
import BusketProduct from "./BasketProduct/BasketProduct";
import { useSession } from "next-auth/react";

const Basket = () => {
  const user = useAppSelector(selectUser)?.email;
  const { data: oAuth } = useSession();
  const products = useAppSelector(selectBasket);
  const dispatch = useAppDispatch();

  const handleRemoveFromBasket = (productId: string, productSize: number | string) => {
    if (user) {
      dispatch(removeFromBasket({ email: user, productId, productSize }));
    } else if (oAuth?.user?.email) {
      dispatch(removeFromBasket({ email: oAuth?.user?.email, productId, productSize }));
    } else {
      dispatch(removeProductFromLS({ productId, productSize }));
    }
  };

  useEffect(() => {
    if (user && products.length === 0) {
      dispatch(getBasket(user));
    }
  }, [user]);
  useEffect(() => {
    if (oAuth?.user?.email && products.length === 0) {
      dispatch(getBasket(oAuth?.user?.email));
    }
  }, [oAuth]);
  
  return (
    <section className="_container h-screen pt-24 sm:pt-32 overflow-hidden bg-black bg-[url('/basket/basket_bg.jpg')] bg-cover bg-center">
      <h1 className="mb-4 sm:mb-16 text-3xl font-semibold text-white">Корзина</h1>
      <h2 className="pb-4 sm:pb-1 flex flex-col sm:flex-row items-center gap-2 text-xl font-semibold text-white border-b-2">
        {user ? (
          <span>{user}</span>
        ) : (
          <div>
            <span>Не авторизованный пользователь</span>
            <SettingsBtn />
          </div>
        )}
        <button className="_btn ml-auto mr-auto mt-6 sm:mt-0 sm:mr-10 mb-3 py-2 px-3  text-xl text-center text-amber-100 hover:text-amber-200 active:text-amber-100  transition-colors">
          Оформить заказ
        </button>
      </h2>

      <ol
        className={`w-full h-full mt-10 mr-auto ml-auto p-2 md:max-w-[60vw] md:pr-10 md:mr-0 flex flex-col gap-10 _basket-scrollbar ${
          products.length > 3 && "overflow-y-scroll"
        }`}
      >
        {products.map((product) => (
          <BusketProduct
            key={product.id + product.size}
            product={product}
            handleClick={handleRemoveFromBasket}
          />
        ))}
      </ol>
    </section>
  );
};

export default Basket;
