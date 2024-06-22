import { createAppSlice } from "@/lib/createAppSlice";
import { type PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { IFavoritesProducts } from "@/types/products";
import {
  addToFavorites,
  getFavorites,
  getFavoritesStateFromLS,
  removeFromFavorites,
} from "./favoritesUtils";

const initialState = {
  products: <IFavoritesProducts[]>[],
  isLoading: false,
};

export const favoritesSlice = createAppSlice({
  name: "favoritesSlice",
  initialState: initialState,
  reducers: (create) => ({
    addToFavoritesInLS: create.reducer(
      (state, action: PayloadAction<IFavoritesProducts>) => {
        state.products.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.products));
        toast("Добавлено в избранное");
      }
    ),
    removeFavoritesFromLS: create.reducer(
      (state, action: PayloadAction<string>) => {
        const newState = state.products.filter(
          (f) => f.productId !== action.payload
        );
        localStorage.setItem("favorites", JSON.stringify(newState));
        state.products = newState;
        toast("Удалено из избранного");
      }
    ),

    setInitialStateFromLS: create.reducer(
      (state, action: PayloadAction<IFavoritesProducts[]>) => {
        state.products = action.payload;
        state.isLoading = false;
      }
    ),
  }),

  selectors: {
    selectFavorites: (state) => state,
    selectFavoritesId: (state) => state.products.map((f) => f.productId),
    selectFavoritesIsLoading: (state) => state.products.map((f) => f.productId),
  },

  extraReducers: (builder) => {
    /*
      initial state from DB,
      if DB returned <empty> try get state from LS, 
      if LS <empty> return []
    */
    builder.addCase(getFavorites.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFavorites.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getFavorites.fulfilled, (state, action) => {
      state.isLoading = false;
      if (!action.payload) {
        state.products = getFavoritesStateFromLS(action.payload.email);
        return;
      }
      state.products = action.payload.favoritesId;
    });

    /* add product */
    builder.addCase(addToFavorites.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addToFavorites.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(addToFavorites.fulfilled, (state, action) => {
      toast("Добавлено в избранное");
      state.isLoading = false;
      state.products = action.payload.updateFavorites.favoritesId;
    });

    /* remove product */
    builder.addCase(removeFromFavorites.fulfilled, (state, action) => {
      toast("Удалено из избранного");
      state.isLoading = false;
      state.products = action.payload.updateFavorites.favoritesId;
    });
    builder.addCase(removeFromFavorites.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removeFromFavorites.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {
  addToFavoritesInLS,
  removeFavoritesFromLS,
  setInitialStateFromLS,
} = favoritesSlice.actions;
export const { selectFavorites, selectFavoritesId, selectFavoritesIsLoading } =
  favoritesSlice.selectors;
