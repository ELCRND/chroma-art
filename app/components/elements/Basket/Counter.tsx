import { Dispatch, SetStateAction, useState } from "react";

let timeoutId: ReturnType<typeof setTimeout> | number = 0;
const Counter = ({
  count,
  setCount,
}: {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}) => {
  const handleIncrementCount = () => {
    clearTimeout(timeoutId);
    setCount((c: number) => c + 1);
    timeoutId = setTimeout(() => {
      //Когда нибудь здесь,возможно, появится логика сохранения нового колличества в DB
    }, 500);
  };
  const handleDecrementCount = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      //Когда нибудь здесь,возможно, появится логика сохранения нового колличества в DB
    }, 500);
    setCount((c: number) => c - 1);
  };
  return (
    <div className="my-4 md:my-0 md:mx-auto lg:ml-auto lg:mr-24 flex gap-8 items-center text-2xl">
      <button
        className="hover:scale-150 focus:scale-150 transition-all"
        onClick={handleDecrementCount}
        disabled={!(count - 1)}
      >
        {"<"}
      </button>
      <span className="text-amber-200">{count}</span>
      <button
        className="hover:scale-150 focus:scale-150 transition-all"
        onClick={handleIncrementCount}
      >
        {">"}
      </button>
    </div>
  );
};

export default Counter;
