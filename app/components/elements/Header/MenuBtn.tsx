import { MouseEventHandler } from "react";

const MenuBtn = ({
  handleClick,
}: {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={handleClick}
      type="button"
      className=" flex flex-col gap-1"
    >
      <div className="w-6 h-1 rounded-sm bg-white"></div>
      <div className="w-6 h-1 rounded-sm bg-white"></div>
      <div className="w-6 h-1 rounded-sm bg-white"></div>
    </button>
  );
};

export default MenuBtn;
