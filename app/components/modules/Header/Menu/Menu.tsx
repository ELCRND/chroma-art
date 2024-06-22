import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../Header";

const Menu = ({
  isShow,
  isSession,
}: {
  isShow: boolean;
  isSession: boolean;
}) => {
  const { setModalActive } = useContext(AuthContext);
  return (
    <div
      className={`${
        isShow ? "animate-menu-open" : "animate-menu-close"
      } w-60 h-[calc(100vh-76px)] fixed top-[76px] rounded rounded-l-2xl bg-slate-700 `}
    >
      <ol>
        <li>
          {isSession ? (
            <Link href={"/profile"}>Профиль</Link>
          ) : (
            <button onClick={() => setModalActive(true)} type="button">
              Профиль
            </button>
          )}
        </li>
        <li>
          <Link href={"/"}>Корзина</Link>
        </li>
        <li>
          <Link href={"/favorites"}>Избранное</Link>
        </li>
      </ol>
    </div>
  );
};

export default Menu;
