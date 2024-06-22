import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

const MainImage = ({ src, alt }: Props) => {
  return (
    <div className="w-full h-[50vh] mb-20 flex justify-center items-center bg-white bg-opacity-90 shadow shadow-black rounded-2xl">
      <div className="w-1/2 ">
        <Image
          src={src}
          alt={alt}
          width="0"
          height="0"
          sizes="100px"
          className="w-full h-auto block"
        />
      </div>
    </div>
  );
};

export default MainImage;
