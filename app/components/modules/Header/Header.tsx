"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";
import { signOut, useSession } from "next-auth/react";
import Modal from "../Modal/Modal";
import Menu from "./Menu/Menu";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import Logo from "../../elements/Header/Logo";
import GlobalNavigation from "../../elements/Header/GlobalNavigation";
import MenuBtn from "../../elements/Header/MenuBtn";
import { selectUser } from "@/lib/features/auth/authSlice";
import { signOut as signOutFromJwtSession } from "@/lib/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import BasketBtn from "../../elements/Header/BasketBtn";

export const AuthContext = createContext<{
  userIsRegister: boolean;
  setUserIsRegister: Dispatch<SetStateAction<boolean>>;
  setModalActive: Dispatch<SetStateAction<boolean>>;
}>({
  userIsRegister: false,
  setUserIsRegister: () => {},
  setModalActive: () => {},
});

const Header = () => {
  const [userIsRegister, setUserIsRegister] = useState(false);
  const [isModalActive, setModalActive] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const { status } = useSession();
  const authWithUsingJwt = useAppSelector(selectUser);

  const isSession = status === "authenticated" || authWithUsingJwt !== null;
  const dispatch = useAppDispatch();

  const contextValue = useMemo(
    () => ({ userIsRegister, setUserIsRegister, setModalActive }),
    [userIsRegister]
  );
  const handleSignOut = () => {
    if (status === "authenticated") {
      signOut();
      return;
    }
    dispatch(signOutFromJwtSession());
    window.location.reload();
  };
  const handleModalOpen = () => {
    setModalActive(true);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };
  return (
    <AuthContext.Provider value={contextValue}>
      <header className="_container w-screen h-[76px] fixed flex justify-between items-center bg-black bg-opacity-70 text-white text-xl z-50">
        <Logo />
        <GlobalNavigation />
        <div className="flex gap-6 items-center">
          <div>
            {isSession ? (
              <button type="button" onClick={handleSignOut}>
                Sign Out
              </button>
            ) : (
              <button type="button" onClick={handleModalOpen}>
                Sign Up
              </button>
            )}
          </div>
          <BasketBtn />
          <MenuBtn handleClick={() => setIsShowMenu((p) => !p)} />
          <Menu isShow={isShowMenu} isSession={isSession} />
        </div>

        {isModalActive && (
          <Modal
            onClose={handleModalClose}
            cnModal={`_auth-modal ${userIsRegister && "_flip"}`}
            cnModalWrapper={`_auth-modal-container`}
          >
            <SignIn />
            <SignUp />
          </Modal>
        )}
      </header>
    </AuthContext.Provider>
  );
};

export default Header;
