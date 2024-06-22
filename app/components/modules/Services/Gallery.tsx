import Image from "next/image";

const Gallery = () => {
  return (
    <div className="relative after:w-full after:h-screen after:block after:relative after:left-24 after:top-[76px] after:z-10 after:bg-[url('/services/services_outline.png')] after:bg-no-repeat after:bg-right">
      <Image
        className="absolute -top-[80px] -right-[50px]"
        src={"/services/services_gallery_1.png"}
        alt="gallery 1"
        width={840}
        height={320}
      />
      <Image
        className="absolute top-[116px] right-6"
        src={"/services/services_gallery_2.png"}
        alt="gallery 1"
        width={800}
        height={320}
      />
      <Image
        className="absolute top-[152px] right-[464px]"
        src={"/services/services_gallery_3.png"}
        alt="gallery 1"
        width={720}
        height={320}
      />
      <Image
        className="absolute top-[520px] right-12"
        src={"/services/services_gallery_4.png"}
        alt="gallery 1"
        width={770}
        height={320}
      />
      <Image
        className="absolute -bottom-[112px] -right-[400px]"
        src={"/services/services_gallery_5.png"}
        alt="gallery 1"
        width={740}
        height={320}
      />
    </div>
  );
};

export default Gallery;
