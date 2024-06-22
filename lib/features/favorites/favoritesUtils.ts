import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addToFavoritesProduct,
  getFavoritesFromDb,
  removeProductFromFavorites,
} from "./favoritesApi";
import { IFavoritesProducts } from "@/types/products";

export const getFavorites = createAsyncThunk(
  "api/favorites",
  getFavoritesFromDb
);
export const addToFavorites = createAsyncThunk(
  "api/favorites/addOne",
  addToFavoritesProduct
);
export const removeFromFavorites = createAsyncThunk(
  "api/favorites/removeOne",
  removeProductFromFavorites
);

export const getFavoritesStateFromLS = (
  email: string
): IFavoritesProducts[] => {
  const dataFromLS = localStorage.getItem("favorites");
  if (dataFromLS) {
    const initialDataFromLS = JSON.parse(dataFromLS);
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/favorites/addMany`, {
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
