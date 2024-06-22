import { createAppSlice } from "@/lib/createAppSlice";
import { IProduct } from "@/types/products";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: IProduct = {
  _id: "",
  category: "",
  type: "",
  price: 0,
  name: "",
  description: "",
  images: [""],
  characteristics: {
    base: "",
    glossLevel: 0,
    method: "",
    sizes: [],
    substance: "",
    temperature: 0,
    time: 0,
    wet: 0,
  },
};

export const productSlice = createAppSlice({
  name: "productSlice",
  initialState,
  reducers: (create) => ({
    setProduct: create.reducer((state, action: PayloadAction<IProduct>) => {
      return (state = action.payload);
    }),
  }),

  selectors: {
    selectProduct: (product) => product,
  },
});

export const { setProduct } = productSlice.actions;
export const { selectProduct } = productSlice.selectors;
