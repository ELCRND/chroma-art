import Link from "next/link";

const Services = () => {
  return (
    <section className="_container h-screen pt-28 relative overflow-hidden  bg-[url('/common_layers_base.jpeg')] bg-cover text-white after:w-full after:h-full after:block after:absolute after:top-0 after:left-0 after:bg-[url('/services/services_gallery.png')] after:bg-cover after:bg-center after:bg-no-repeat">
      <div className="h-full flex flex-col relative">
        <h1 className="text-3xl font-semibold">УСЛУГИ</h1>
        <h2 className="mt-[10px] text-xs font-light">Подбор специалистов</h2>
        <nav className="mt-32 realtive z-10">
          <ol className="flex flex-col gap-20">
            <li>
              <Link
                className="_inner-nav py-3 px-8 border border-white rounded-2xl text-xl outline-none"
                href={"services/designer"}
              >
                Дизайнер
              </Link>
            </li>
            <li>
              <Link
                className="_inner-nav py-3 px-8 border border-white rounded-2xl text-xl outline-none"
                href={"/services/artist"}
              >
                Художник декоратор
              </Link>
            </li>
            <li>
              <Link
                className="_inner-nav py-3 px-8 border border-white rounded-2xl text-xl outline-none"
                href={"/services/coatingSelection"}
              >
                Подбор покрытия
              </Link>
            </li>
          </ol>
        </nav>
        <p className="max-w-[558px] mt-auto mb-32 relative bg-[rgba(0,0,0,0.5)] rounded-2xl z-10 text-xl font-medium before:block before:w-[122px] before:h-[3px] before:mb-4 before:rounded before:bg-white">
          Вы можете довериться нашим специалистам-технологам,
          художникам-декораторам, а так же воспользоваться услугами бесплатного
          подбора покрытий!
        </p>
      </div>
    </section>
  );
};

export default Services;
