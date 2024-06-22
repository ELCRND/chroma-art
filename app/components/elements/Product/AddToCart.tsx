import { selectIsLoadingBasket } from "@/lib/features/basket/basketSlice";
import { useAppSelector } from "@/lib/hooks";

const AddToCart = ({
  disabled,
  onClick,
  isInBusket,
}: {
  disabled: boolean;
  onClick: VoidFunction;
  isInBusket: boolean;
}) => {
  const isLoading = useAppSelector(selectIsLoadingBasket);
  return (
    <button
      type="button"
      disabled={disabled || isLoading}
      onClick={onClick}
      className="_btn py-3 px-12 text-white transition-colors hover:text-amber-100 hover:border-amber-100 disabled:text-gray-400 disabled:border-gray-400"
    >
      {isLoading ? "Подождите..." : isInBusket ? "Добавлено" : "В корзину"}
    </button>
  );
};

export default AddToCart;
