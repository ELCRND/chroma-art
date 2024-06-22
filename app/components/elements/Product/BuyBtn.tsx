const BuyBtn = ({ disabled }: { disabled: boolean }) => {
  return (
    <button
      disabled={disabled}
      className="py-3 px-12 rounded-md bg-orange-400 text-black text-2xl disabled:bg-slate-500 active:bg-orange-500 transition-colors"
    >
      Купить
    </button>
  );
};

export default BuyBtn;
