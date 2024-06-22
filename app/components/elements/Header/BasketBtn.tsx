import Link from "next/link";

const BasketBtn = () => {
  return (
    <Link href={"/basket"} className="hover:opacity-50 transition-opacity">
      <svg width="35" height="35" viewBox="0 0 50 32" fill="none">
        <defs />
        <path
          id="Vector"
          d="M18.21 27.93L15.78 19.43M13.35 1.21L8.5 8.5M30.35 1.21L35.21 8.5M25.5 27.93L27.92 19.43M18.72 35.21C14.98 35.21 13.11 35.21 11.78 34.15C10.45 33.08 10.04 31.25 9.23 27.61L6.59 15.73C6.29 14.34 5.06 13.36 3.64 13.36C2.3 13.36 1.21 12.27 1.21 10.93C1.21 9.59 2.3 8.5 3.64 8.5L40.07 8.5C41.41 8.5 42.5 9.59 42.5 10.93C42.5 12.27 41.41 13.36 40.07 13.36C38.65 13.36 37.42 14.34 37.11 15.73L34.47 27.61C33.66 31.25 33.26 33.08 31.92 34.15C30.59 35.21 28.72 35.21 24.99 35.21L18.72 35.21ZM3.64 13.36L40.07 13.36"
          stroke="#FFFFFF"
          strokeWidth="3"
        />
      </svg>
    </Link>
  );
};

export default BasketBtn;
