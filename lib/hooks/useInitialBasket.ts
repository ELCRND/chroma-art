import { useEffect } from "react";
import { useAppDispatch } from "../hooks";
import useGetSession from "./useGetSession";
import { getBasket } from "../features/basket/basketSlice";

export const useInitialBasket = () => {
  const dispatch = useAppDispatch();
  const { jwtSession, oAuthSession } = useGetSession();

  useEffect(() => {
    if (jwtSession) {
      dispatch(getBasket(jwtSession?.email!));
    }
  }, [jwtSession]);

  useEffect(() => {
    if (oAuthSession?.user?.email) {
      dispatch(getBasket(oAuthSession.user?.email));
    }
  }, [oAuthSession]);
};
