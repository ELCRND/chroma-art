import Image from "next/image";
import Link from "next/link";

const Concrete = () => {
  return (
    <section className="_container min-h-screen pt-20 overflow-hidden bg-[url('/kits/concrete/concrete_bg.jpeg')] bg-cover bg-center bg-no-repeat text-white">
      <div className="flex gap-2 items-center text-sm text-slate-300">
        <Link href={"/kits"}>Комплекты</Link>
        <div className="w-[40px] h-[1px] bg-white"></div>
        <span>Арт-Бетон</span>
      </div>

      <article className="max-w-[510px] my-5 py-2 px-4 bg-[rgba(0,0,0,0.5)] rounded-2xl sm:bg-[url('/kits/concrete/concrete_outline.png')] bg-contain bg-left bg-no-repeat">
        <h1 className="mb-5 ml-8 pt-[10px] text-xl font-medium">Арт - Бетон</h1>
        <div className="flex flex-col gap-2 font-light">
          <p className="first-letter:pl-6">
            Декоративная штукатурка «Travertino Art» в стиле «Арт-бетон» - это
            уникальное и стильное решение для интерьера, которое придаст вашему
            дому неповторимый характер и изысканность. Этот материал идеально
            подойдет для создания современного и модного пространства, в котором
            сочетаются прочность бетона и элегантность художественного
            оформления.
          </p>
          <p className="first-letter:pl-6">
            Арт-бетон отличается высокой прочностью и устойчивостью к
            механическим воздействиям, что делает его идеальным выбором для
            помещений с высокой проходимостью и позволяет сохранить первозданный
            вид на долгие годы.
          </p>
          <p className="first-letter:pl-6">
            Нанесение арт-бетона может быть выполнено в виде объемных узоров,
            абстрактных рисунков, создавая ощущение глубины и трехмерности
            пространства.{" "}
          </p>
          <p className="first-letter:pl-6">
            Такой эффект достигается благодаря использованию специальных
            инструментов и техник нанесения, которые позволяют создавать
            уникальные фактуры и рельефы.
          </p>
          <span className="mt-3 font-medium text-center">
            Создайте свой неповторимый стиль с помощью декоративной штукатурки в
            стиле Арт-Бетон!
          </span>
        </div>
      </article>

      <div className="max-w-[510px]">
        <h2 className="text-center text-xl font-medium">
          Используемые материалы:
        </h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex flex-col items-center">
            <Image
              src={"/kits/concrete/paint.png"}
              alt="paint"
              width={126}
              height={101}
              className="w-full max-w-[126px]"
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
              className="w-full max-w-[126px]"
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
              className="w-full max-w-[126px]"
            ></Image>
            <h4 className="font-medium">«Finish Lak»</h4>
            <h5>Декоративный лак</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concrete;
