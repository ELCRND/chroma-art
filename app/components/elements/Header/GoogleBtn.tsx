import { signIn } from "next-auth/react";

const GoogleBtn = () => {
  return (
    <button
      onClick={() => signIn("google")}
      type="button"
      className="w-full py-2 px-4 flex justify-center items-center bg-[#d9d9d9] rounded-md"
    >
      <svg width="28.000000" height="28.000000" viewBox="-1 -0.5 28 28" fill="none">
        <defs />
        <path
          d="M27.22 13.58C27.22 21.29 20.97 27.54 13.26 27.54C5.55 27.54 -0.7 21.29 -0.7 13.58C-0.7 5.87 5.55 -0.38 13.26 -0.38C16.88 -0.38 20.18 1 22.66 3.26L19.05 6.88C17.57 5.72 15.71 5.03 13.69 5.03C8.89 5.03 5 8.92 5 13.72C5 18.52 8.89 22.41 13.69 22.41C17.54 22.41 20.81 19.9 21.95 16.43L13.69 16.43L13.69 11.16L27.01 11.16C27.15 11.94 27.22 12.75 27.22 13.58Z"
          fill="#000000"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </svg>
    </button>
  );
};

export default GoogleBtn;
