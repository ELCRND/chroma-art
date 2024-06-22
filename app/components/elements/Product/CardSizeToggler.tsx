import { Dispatch, SetStateAction } from "react";

const CardSizeToggler = ({
  id,
  handleSize,
}: {
  id: string;
  handleSize: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="flex gap-6">
      <label className="w-10 text-center bg-gray-400 relative rounded cursor-pointer has-[:checked]:bg-yellow-500 has-[input:focus]:outline outline-1 transition-colors">
        <input
          className="absolute -z-10"
          onChange={() => handleSize(0)}
          type="radio"
          name={id}
        />
        <span>0.9л</span>
      </label>
      <label className="w-10 text-center bg-gray-400 relative rounded cursor-pointer has-[:checked]:bg-yellow-500 has-[input:focus]:outline outline-1 transition-colors">
        <input
          className="absolute -z-10"
          onChange={() => handleSize(1)}
          type="radio"
          name={id}
        />
        <span>2.7л</span>
      </label>
      <label className="w-10 text-center bg-gray-400 relative rounded cursor-pointer has-[:checked]:bg-yellow-500 has-[input:focus]:outline outline-1 transition-colors">
        <input
          className="absolute -z-10"
          onChange={() => handleSize(2)}
          type="radio"
          name={id}
        />
        <span>9л</span>
      </label>
    </div>
  );
};

export default CardSizeToggler;
