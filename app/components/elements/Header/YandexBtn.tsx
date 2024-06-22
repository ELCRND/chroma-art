import { signIn } from "next-auth/react";

const YandexBtn = () => {
  return (
    <button
      onClick={() => signIn("yandex")}
      className="w-full py-2 px-4 flex justify-center items-center bg-[#d9d9d9] rounded-md"
    >
      <svg width="29.000000" height="29.000000" viewBox="0 0 29 29" fill="none">
        <defs />
        <path
          d="M28.94 14.28C28.94 22.37 22.37 28.94 14.28 28.94C6.18 28.94 -0.38 22.37 -0.38 14.28C-0.38 6.18 6.18 -0.38 14.28 -0.38C22.37 -0.38 28.94 6.18 28.94 14.28ZM28.13 14.28C28.13 21.93 21.93 28.13 14.28 28.13C6.63 28.13 0.43 21.93 0.43 14.28C0.43 6.63 6.63 0.43 14.28 0.43C21.93 0.43 28.13 6.63 28.13 14.28ZM7.04 5.88L14.28 13.06L21.51 5.88C22.58 6.45 23.07 6.97 23.82 8.15L15.85 15.99L15.85 25.55C14.67 25.88 13.98 25.91 12.65 25.55L12.65 15.99L4.77 8.15C5.31 6.92 5.79 6.4 7.04 5.88Z"
          fill="#000000"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default YandexBtn;
