import InnerNavBack from "@/app/components/elements/InnerNavBack";
import Feedback from "../Feedback/Feedback";

const CoatingSelection = () => {
  return (
    <section className="_container h-screen pb-20 flex flex-col justify-between pt-28 overflow-hidden  bg-[url('/common_layers_base.jpeg')] bg-cover text-white after:w-full after:h-full after:block after:absolute after:top-0 after:left-0 after:bg-[url('/services/coating_gallery.png')] after:bg-cover after:bg-center after:bg-no-repeat">
      <InnerNavBack back="Услуги" current="Подбор покрытия" path="services" />

      <article className="max-w-[460px] py-2 pl-4 relative z-10 bg-[rgba(0,0,0,0.5)] rounded-2xl bg-[url('/services/artist_article_outline.png')] bg-contain bg-no-repeat bg-left">
        <h1 className="mb-5 ml-8 pt-2 text-2xl font-medium ">
          ПОДБОР ПОКРЫТИЯ
        </h1>
        <div className="[&>*]:first-letter:pl-6 flex flex-col gap-4 font-light text-lg">
          <p>
            Подбор покрытия - это важный этап в процессе создания интерьера или
            экстерьера здания.
          </p>
          <p>
            Наши специалисты помогут вам выбрать наиболее подходящее покрытие
            для вашего проекта, учитывая такие факторы, как стиль интерьера,
            функциональность и бюджет.
          </p>
          <p>
            Мы предлагаем широкий ассортимент декоративных красок и штукатурок,
            которые отличаются по цвету, фактуре и техническим характеристикам.
          </p>
          <p>
            Наши специалисты также могут предоставить рекомендации по уходу за
            покрытием и помочь с выбором инструментов для его нанесения.
          </p>
        </div>
      </article>

      <Feedback />
    </section>
  );
};

export default CoatingSelection;
