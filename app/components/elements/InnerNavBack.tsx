import Link from "next/link";

type Props = {
  back: string;
  current: string;
  path: string;
};

const InnerNavBack = ({ back, current, path }: Props) => {
  return (
    <div className="flex gap-2 items-center relative z-10 text-sm text-slate-300">
      <Link className="hover:underline" href={`/${path}`}>
        {back}
      </Link>
      <div className="w-[40px] h-[1px] bg-white"></div>
      <span>{current}</span>
    </div>
  );
};

export default InnerNavBack;
