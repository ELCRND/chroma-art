import InnerNavBack from "@/app/components/elements/InnerNavBack";
import Feedback from "../Feedback/Feedback";

const Artist = () => {
  return (
    <section className="_container h-screen pb-20 flex flex-col justify-between pt-28 overflow-hidden  bg-[url('/common_layers_base.jpeg')] bg-cover text-white after:w-full after:h-full after:block after:absolute after:top-0 after:left-0 after:bg-[url('/services/artist_gallery.png')] after:bg-cover after:bg-center after:bg-no-repeat">
      <InnerNavBack
        back="Услуги"
        current="Художник декоратор"
        path="services"
      />

      <article className="max-w-[460px] py-2 pl-4 relative z-10 bg-[rgba(0,0,0,0.5)] rounded-2xl bg-[url('/services/artist_article_outline.png')] bg-contain bg-no-repeat bg-left">
        <h1 className="mb-5 ml-3 pt-2 text-2xl font-medium ">
          ХУДОЖНИК ДЕКОРАТОР
        </h1>
        <div className="[&>*]:first-letter:pl-6 flex flex-col gap-4 font-light text-lg">
          <p>
            Это отличный выбор для тех, кто хочет украсить свой дом или офис
            уникальными фактурами на стенах.
          </p>
          <p>
            Наши художники-декораторы имеют богатый опыт работы в различных
            стилях и направлениях, что позволяет им создавать неповторимые
            композиции, которые идеально впишутся в любой интерьер.
          </p>
          <p>
            Услуга предоставления художников-декораторов не только украсит ваше
            пространство, но и добавит ему индивидуальности.
          </p>
          <p>
            Мы стремимся к тому, чтобы каждый наш клиент получил максимальное
            удовлетворение от сотрудничества с нами.
          </p>
        </div>
      </article>

      <Feedback />
    </section>
  );
};

export default Artist;
