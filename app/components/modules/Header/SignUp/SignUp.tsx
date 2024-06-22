import GoogleBtn from "@/app/components/elements/Header/GoogleBtn";
import SignUpForm from "@/app/components/elements/Header/SignUpForm";
import YandexBtn from "@/app/components/elements/Header/YandexBtn";
import { useContext } from "react";
import { AuthContext } from "../Header";

const SignUp = () => {
  const { userIsRegister } = useContext(AuthContext);
  return (
    <div className={`p-10 text-white ${userIsRegister ? "_back" : "_front"}`}>
      <h2 className="text-center">Регистрация</h2>
      <SignUpForm />
      <div className="w-full mt-2 flex gap-3">
        <GoogleBtn />
        <YandexBtn />
      </div>
    </div>
  );
};

export default SignUp;
