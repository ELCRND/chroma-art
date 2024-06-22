type Props = {
  type: string;
  name: string;
  price: number;
  date: string | undefined;
  handleClick: VoidFunction;
};

const Title = ({ handleClick, type, name, date, price }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        onClick={handleClick}
        className="flex flex-col text-2xl hover:text-orange-300 transition-colors"
        title="Купить"
      >
        <span className="text-balance">{type}</span>
        <span>{name}</span>
        <span className="text-sm text-slate-400">Добавлено: {date}</span>
      </button>
      <span>{price}Р</span>
    </div>
  );
};

export default Title;
