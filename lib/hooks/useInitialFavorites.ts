import { useEffect } from "react";
import { useAppDispatch } from "../hooks";
import { getFavorites } from "../features/favorites/favoritesUtils";
import useGetSession from "./useGetSession";

export const useInitialFavorites = () => {
  const dispatch = useAppDispatch();
  const { jwtSession, oAuthSession } = useGetSession();

  useEffect(() => {
    if (jwtSession) {
      dispatch(getFavorites(jwtSession?.email!));
    }
  }, [jwtSession]);

  useEffect(() => {
    if (oAuthSession?.user?.email) {
      dispatch(getFavorites(oAuthSession.user?.email));
    }
  }, [oAuthSession]);
};
