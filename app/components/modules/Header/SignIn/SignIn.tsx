import GoogleBtn from "@/app/components/elements/Header/GoogleBtn";
import SignInForm from "@/app/components/elements/Header/SignInForm";
import YandexBtn from "@/app/components/elements/Header/YandexBtn";
import { useContext } from "react";
import { AuthContext } from "../Header";

const SignIn = () => {
  const { userIsRegister } = useContext(AuthContext);
  return (
    <div className={`p-10 text-white ${userIsRegister ? "_front" : "_back"}`}>
      <h2 className="text-center">Авторизация</h2>
      <SignInForm />
      <div className="w-full mt-2 flex gap-3">
        <GoogleBtn />
        <YandexBtn />
      </div>
    </div>
  );
};

export default SignIn;
