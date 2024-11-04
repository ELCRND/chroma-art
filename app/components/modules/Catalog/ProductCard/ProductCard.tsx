import { memo, useState } from "react";
import Image from "next/image";
import CardBtn from "@/app/components/elements/Product/CardBtn";
import CardSizeToggler from "@/app/components/elements/Product/CardSizeToggler";
import CardActions from "@/app/components/elements/Catalog/CardActions";
import { setProduct } from "@/lib/features/slices/productSlice";
import {
  addToFavoritesInLS,
  removeFavoritesFromLS,
} from "@/lib/features/favorites/favoritesSlice";
import {
  addToFavorites,
  removeFromFavorites,
} from "@/lib/features/favorites/favoritesUtils";
import { useAppDispatch } from "@/lib/hooks";
import { getDateAdded } from "@/lib/utils/common";
import { IProduct } from "@/types/products";

type Props = {
  product: IProduct;
  email?: string;
  isFavorite: boolean;
  isLoading: boolean;
  modalHandler: VoidFunction;
};

const ProductCard = memo(
  ({ product, email, isFavorite, isLoading, modalHandler }: Props) => {
    const [size, setSize] = useState(0);
    const [price, setPrice] = useState(product.price);
    const dispatch = useAppDispatch();
    const handleClick = () => {
      dispatch(setProduct(product));
      modalHandler();
    };

    const handleFavorites = () => {
      if (isFavorite) {
        email
          ? dispatch(removeFromFavorites({ email, productId: product._id }))
          : dispatch(removeFavoritesFromLS(product._id));
        return;
      }
      email
        ? dispatch(
            addToFavorites({
              email,
              productId: product._id,
              dateAdded: getDateAdded(),
            })
          )
        : dispatch(
            addToFavoritesInLS({
              productId: product._id,
              dateAdded: getDateAdded(),
            })
          );
    };

    return (
      <div
        tabIndex={0}
        className="py-5 flex flex-col items-center relative text-white bg-slate-800 bg-opacity-20 rounded-3xl border border-gray-800 hover:border-gray-400 hover:bg-opacity-30 focus:bg-opacity-30 transition-colors"
      >
        <CardActions
          key={product._id}
          isFavorite={isFavorite}
          handleClick={handleFavorites}
          isLoading={isLoading}
        />
        <div className="w-36 h-40 flex justify-center items-center">
          <Image
            src={product.images[size]}
            alt={product.type}
            width="0"
            height="0"
            sizes={`100px`}
            className="w-full h-auto"
          />
        </div>
        <h2 className="mt-4 mb-6 text-center text-xl">
          {product.type}
          <br />
          {product.name}
        </h2>
        <CardSizeToggler
          id={product._id}
          price={product.price}
          handleSize={setSize}
          handlePrice={setPrice}
        />
        <div className="w-full mt-4 flex justify-around items-center text-xl">
          <span>{price} Р</span>
          <CardBtn handleClick={handleClick} />
        </div>
      </div>
    );
  }
);
export default ProductCard;
