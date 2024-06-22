const CardBtn = ({ handleClick }: { handleClick: VoidFunction }) => {
  return (
    <button
      onClick={handleClick}
      className="py-2 px-8 bg-gray-200 rounded-md text-black hover:bg-gray-400 active:bg-yellow-300 transition-colors"
      type="button"
    >
      Купить
    </button>
  );
};
export default CardBtn;
