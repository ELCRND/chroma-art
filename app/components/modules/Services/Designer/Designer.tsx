import InnerNavBack from "@/app/components/elements/InnerNavBack";
import Feedback from "../Feedback/Feedback";

const Designer = () => {
  return (
    <section className="_container h-screen pt-28 overflow-hidden  bg-[url('/common_layers_base.jpeg')] bg-cover text-white after:w-full after:h-full after:block after:absolute after:top-0 after:left-0 after:bg-[url('/services/designer_gallery.png')] after:bg-cover after:bg-center after:bg-no-repeat">
      <InnerNavBack back="Услуги" current="Дизайнер" path="services" />

      <article className="max-w-[460px] my-5 py-2 pl-4 relative z-10 bg-[rgba(0,0,0,0.5)] rounded-2xl bg-[url('/common_article_outline.png')] bg-contain bg-no-repeat bg-left">
        <h1 className="mb-5 ml-10 pt-2 text-2xl font-medium ">Дизайнер</h1>
        <div className="[&>*]:first-letter:pl-6 flex flex-col gap-4 font-light text-lg">
          <p>
            Наша команда дизайнеров поможет вам выбрать наиболее подходящие
            декоративные покрытия для вашего проекта, учитывая особенности
            интерьера или экстерьера, а также ваши личные предпочтения.
          </p>
          <p>
            Мы гарантируем индивидуальный подход к каждому клиенту и создание
            уникального дизайна, который будет отражать вашу индивидуальность и
            стиль.
          </p>
          <p>
            Мы предлагаем широкий выбор декоративных покрытий, которые позволят
            вам воплотить в жизнь самые смелые идеи.
          </p>
          <p className="w-[730px] ">
            Обращаясь к нам за дизайнерской услугой в сфере декоративных
            покрытий, вы получаете не только качественный результат, но и
            возможность создать неповторимую атмосферу в вашем доме или офисе.
          </p>
          <p>Мы поможем вам сделать ваше пространство комфортным и стильным!</p>
          <p className="w-[730px]">
            Мы также предлагаем услуги по нанесению декоративных покрытий, что
            позволит вам сэкономить время и силы на самостоятельном выполнении
            работ.
          </p>
        </div>
      </article>

      <Feedback />
    </section>
  );
};

export default Designer;
