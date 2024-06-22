"use client";
import { refreshToken as refreshTokenFn } from "@/lib/features/auth/authSlice";
import { loginCheck } from "@/lib/features/auth/authSlice";
import { setInitialBasketFromLS } from "@/lib/features/basket/basketSlice";
import { setInitialStateFromLS } from "@/lib/features/favorites/favoritesSlice";

import { useAppDispatch } from "@/lib/hooks";

import Cookies from "js-cookie";
import { ReactNode, useEffect } from "react";

interface Props {
  readonly children: ReactNode;
}

const Hoc = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const cookies = Cookies.get("jwt-session");
    const favoritesFromLS = JSON.parse(localStorage.getItem("favorites")!);
    const basketFromLS = JSON.parse(localStorage.getItem("basket")!);
    if (cookies) {
      const { accessToken, refreshToken } = JSON.parse(cookies);
      dispatch(loginCheck(accessToken)).then((res) => {
        if (res.payload?.error?.message === "jwt expired")
          dispatch(refreshTokenFn(refreshToken));
      });
    }
    if (!cookies && favoritesFromLS && favoritesFromLS != "undefined") {
      dispatch(setInitialStateFromLS(favoritesFromLS));
    }
    if (!cookies && basketFromLS && basketFromLS != "undefined") {
      dispatch(setInitialBasketFromLS(basketFromLS));
    }
  }, []);

  return <>{children}</>;
};

export default Hoc;
