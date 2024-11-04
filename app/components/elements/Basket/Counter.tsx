import { Dispatch, SetStateAction } from "react";

let timeoutId: ReturnType<typeof setTimeout> | number = 0;
const Counter = ({
  count,
  setCount,
}: {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}) => {
  const handleCounter = (v: number) => {
    clearTimeout(timeoutId);
    setCount((c: number) => c + v);
    timeoutId = setTimeout(() => {
      // !!!
    }, 500);
  };

  return (
    <div className="my-4 md:my-0 md:mx-auto lg:ml-auto lg:mr-24 flex gap-8 items-center text-2xl">
      <button
        className="hover:scale-150 focus:scale-150 transition-all"
        onClick={() => handleCounter(-1)}
        disabled={!(count - 1)}
      >
        {"<"}
      </button>
      <span className="text-amber-200">{count}</span>
      <button
        className="hover:scale-150 focus:scale-150 transition-all"
        onClick={() => handleCounter(1)}
      >
        {">"}
      </button>
    </div>
  );
};

export default Counter;
