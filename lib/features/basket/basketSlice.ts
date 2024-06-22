import { createAppSlice } from "@/lib/createAppSlice";

import { createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import {
  addProductToBasket,
  getBasketFromDb,
  getBasketStateFromLS,
  removeProductFromBasket,
} from "./basketApi";
import toast from "react-hot-toast";
import { IBasketProduct } from "@/types/products";

const initialState = {
  isLoading: false,
  products: <IBasketProduct[]>[],
};

export const getBasket = createAsyncThunk("api/basket", getBasketFromDb);
export const addToBasket = createAsyncThunk(
  "api/basket/addOne",
  addProductToBasket
);
export const removeFromBasket = createAsyncThunk(
  "api/basket/removeOne",
  removeProductFromBasket
);

export const basketSlice = createAppSlice({
  name: "basketSlice",
  initialState: initialState,
  reducers: (create) => ({
    addProductToLS: create.reducer(
      (state, action: PayloadAction<IBasketProduct>) => {
        state.products.push(action.payload);
        localStorage.setItem("basket", JSON.stringify(state.products));
        toast("Товар добавлен в корзину");
      }
    ),
    removeProductFromLS: create.reducer(
      (
        state,
        action: PayloadAction<{
          productId: string;
          productSize: string | number;
        }>
      ) => {
        const newState = state.products.filter(
          (f) =>
            f.id !== action.payload.productId ||
            f.size != action.payload.productSize
        );

        localStorage.setItem("basket", JSON.stringify(newState));
        state.products = newState;
        toast("Товар удален из корзины");
      }
    ),

    setInitialBasketFromLS: create.reducer(
      (state, action: PayloadAction<IBasketProduct[]>) => {
        state.products = action.payload;
      }
    ),
  }),

  selectors: {
    selectBasket: (state) => state.products,
    selectIsLoadingBasket: (state) => state.isLoading,
  },

  extraReducers: (builder) => {
    /*
      initial state from DB,
      if DB returned <empty> try get state from LS, 
      if LS <empty> return []
    */
    builder.addCase(getBasket.fulfilled, (state, action) => {
      state.isLoading = false;
      if (!action.payload || !action.payload?.products?.length) {
        state.products = getBasketStateFromLS(action.payload.email);
        return state;
      }
      state.products = action.payload.products;
    });
    builder.addCase(getBasket.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBasket.rejected, (state) => {
      state.isLoading = false;
    });

    /* add product */
    builder.addCase(addToBasket.fulfilled, (state, action) => {
      if (action.payload.status === 201) {
        toast("Товар добавлен в корзину");
        state.products = action.payload.updateBasket.products;
      }
      state.isLoading = false;
    });
    builder.addCase(addToBasket.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addToBasket.rejected, (state) => {
      state.isLoading = false;
    });

    /* remove product */
    builder.addCase(removeFromBasket.fulfilled, (state, action) => {
      state.products = action.payload.updateBasket.products;
      state.isLoading = false;
      toast("Товар удален из корзины");
    });
    builder.addCase(removeFromBasket.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(removeFromBasket.rejected, (state) => {
      state.isLoading = true;
    });
  },
});

export const { addProductToLS, removeProductFromLS, setInitialBasketFromLS } =
  basketSlice.actions;
export const { selectBasket, selectIsLoadingBasket } = basketSlice.selectors;
