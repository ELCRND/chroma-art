import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { path: "/kits", title: "Комплекты" },
  { path: "/catalog", title: "Каталог" },
  { path: "/partners", title: "Партнерам" },
  { path: "/stock", title: "Акции" },
  { path: "/about", title: "О нас" },
  { path: "/services", title: "Услуги" },
];
const GlobalNavigation = () => {
  const path = usePathname();
  return (
    <nav>
      <ol className="hidden lg:flex gap-[86px]">
        {routes.map((r) => (
          <LinkComponent
            key={r.path}
            path={r.path}
            title={r.title}
            isActive={r.path === path}
          />
        ))}
      </ol>
    </nav>
  );
};

export default GlobalNavigation;

const LinkComponent = ({
  path,
  title,
  isActive,
}: {
  path: string;
  title: string;
  isActive: boolean;
}) => {
  return (
    <Link className={`${isActive && "text-amber-200"}`} href={path}>
      {title}
    </Link>
  );
};
