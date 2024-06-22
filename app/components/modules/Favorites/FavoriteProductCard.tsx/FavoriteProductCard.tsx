import Image from "next/image";
import RemoveFromFavorites from "@/app/components/elements/Favorites/RemoveFromFavorites";
import Title from "@/app/components/elements/Favorites/Title";
import { setProduct } from "@/lib/features/slices/productSlice";
import { useAppDispatch } from "@/lib/hooks";
import { IProduct } from "@/types/products";
import { removeFavoritesFromLS } from "@/lib/features/favorites/favoritesSlice";
import { removeFromFavorites } from "@/lib/features/favorites/favoritesUtils";

type Props = {
  product: IProduct;
  modalHandler: VoidFunction;
  user: {
    email: string;
    _id: string;
  } | null;
};

const FavoriteProductCard = ({ product, modalHandler, user }: Props) => {
  const dispatch = useAppDispatch();
  const handleClickBuy = () => {
    dispatch(setProduct(product));
    modalHandler();
  };
  const handleClickRemove = () => {
    user?.email
      ? dispatch(
          removeFromFavorites({ email: user.email, productId: product._id })
        )
      : dispatch(removeFavoritesFromLS(product._id));
  };
  return (
    <div className="w-full p-4 flex flex-col sm:flex-row items-center gap-x-4 rounded-xl bg-[#3d3a3a] bg-opacity-20 border border-transparent [box-shadow:12px_14px_30px_0px_rgb(0,0,0)] text-white self-start hover:bg-opacity-40 hover:border-gray-300 transition-colors">
      <Image
        src={product.images[0]}
        alt={product.type}
        width={100}
        height={50}
        className="w-auto max-w-[160px]"
      />
      <Title
        name={product.name}
        type={product.type}
        date={product.date}
        price={product.price}
        handleClick={handleClickBuy}
      />
      <RemoveFromFavorites handleClick={handleClickRemove} />
    </div>
  );
};

export default FavoriteProductCard;
