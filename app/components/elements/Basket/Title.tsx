type Props = {
  type: string;
  name: string;
  size: number | string;
};

const Title = ({ type, name, size }: Props) => {
  return (
    <div className="w-full max-w-[300px] flex flex-col gap-4">
      <span className="text-balance">{type}</span>
      <div className="flex justify-center gap-4">
        <span>{name}</span>
        <span className="text-amber-200">{size}л</span>
      </div>
    </div>
  );
};

export default Title;
