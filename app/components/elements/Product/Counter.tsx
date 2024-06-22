import { SetStateAction } from "react";

type Props = {
  count: number;
  setCount: (n: SetStateAction<number>) => void;
};

const Counter = ({ count, setCount }: Props) => {
  return (
    <div className="mr-auto flex items-center">
      <button
        type="button"
        className="w-20 h-16 pb-2 flex items-center justify-center  bg-slate-500 text-5xl rounded-[10px_0_0_10px] hover:bg-orange-400 hover:text-black active:bg-orange-500 transition-colors outline-none focus:border"
        onClick={() => setCount((c) => c - 1)}
        disabled={!count}
      >
        -
      </button>
      <span className="w-[72px] h-16 flex items-center justify-center   border-l border-r bg-slate-500 text-3xl text-center text-white">
        {count}
      </span>
      <button
        autoFocus
        type="button"
        className="w-20 h-16 pb-2 flex items-center justify-center  bg-slate-500 text-5xl rounded-[0_10px_10px_0] hover:bg-orange-400 hover:text-black active:bg-orange-500 transition-colors outline-none focus:border"
        onClick={() => setCount((c) => c + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
