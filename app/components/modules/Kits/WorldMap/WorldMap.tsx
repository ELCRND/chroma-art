import Image from "next/image";
import Link from "next/link";

const WorldMap = () => {
  return (
    <section className="h-screen pb-20 relative overflow-hidden bg-[url('/common_layers_base.jpeg')] bg-cover text-white">
      <div className="h-full">
        <div className="h-full bg-[url('/kits/concrete/concrete_layers_front.png')] bg-contain bg-no-repeat bg-right "></div>
        <div className="w-full h-full relative -top-[95%] left-[2%]  bg-[url('/kits/kits_outline.png')] bg-contain bg-no-repeat bg-right"></div>
      </div>
      <div className="absolute top-24 left-20 ">
        <div className="flex gap-2 items-center text-sm text-slate-300">
          <Link href={"/kits"}>Комплекты</Link>
          <div className="w-[40px] h-[1px] bg-white"></div>
          <span>Карта мира</span>
        </div>

        <article className="max-w-[510px] my-5 py-2 px-4 bg-[rgba(0,0,0,0.5)] rounded-2xl  bg-[url('/kits/concrete/concrete_outline.png')] bg-contain bg-no-repeat bg-left">
          <h1 className="mb-5 ml-8 pt-[10px] text-xl font-medium">
            Карта мира
          </h1>
          <div className="flex flex-col gap-2 font-light">
            <p className="first-letter:pl-6">
              Декоративная штукатурка «Travertino Art» в стиле “Карта мира” -
              это уникальный и интересный вариант отделки стен, который позволит
              вам создать неповторимую атмосферу в вашем доме. Эта штукатурка
              представляет собой карту мира, нанесенную на стену, с возможностью
              выбора различных цветовых решений и уровней детализации.
            </p>
            <p className="first-letter:pl-6">
              Основными преимуществами декоративной штукатурки “Карта мира”
              являются ее экологичность, долговечность и простота в уходе.
            </p>
            <p className="first-letter:pl-6">
              Она изготовлена из натуральных материалов, не содержит вредных
              веществ и не вызывает аллергических реакций. Кроме того, такая
              штукатурка устойчива к механическим повреждениям и воздействию
              влаги, что гарантирует ее долговечность и сохранение
              первоначального вида на протяжении многих лет.
            </p>
            <p className="first-letter:pl-6">
              Таким образом, декоративная штукатурка “Карта мира” станет
              отличным решением для тех, кто мечтает о необычном и стильном
              интерьере, сочетающем в себе красоту и функциональность.
            </p>
            <span className="mt-3 font-medium text-center">
              Создайте свою собственную карту мира на стене вашего дома и
              наслаждайтесь неповторимой атмосферой!
            </span>
          </div>
        </article>

        <div>
          <h3 className="text-center text-xl font-medium">
            Используемые материалы:
          </h3>
          <div className="flex gap-3">
            <div className="flex flex-col items-center">
              <Image
                src={"/kits/concrete/paint.png"}
                alt="paint"
                width={126}
                height={101}
              ></Image>
              <h4 className="font-medium">«Quartz Start»</h4>
              <h5>Кварцевая грунтовка</h5>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={"/kits/concrete/paint.png"}
                alt="paint"
                width={126}
                height={101}
              ></Image>
              <h4 className="font-medium">«Travertino Art»</h4>
              <h5>Декоративная штукатурка</h5>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={"/kits/concrete/paint.png"}
                alt="paint"
                width={126}
                height={101}
              ></Image>
              <h4 className="font-medium">«Finish Lak»</h4>
              <h5>Декоративный лак</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
