import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../modules/Header/Header";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectIsLoading, signin } from "@/lib/features/auth/authSlice";

type Inputs = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const dispach = useAppDispatch();
  const { setUserIsRegister } = useContext(AuthContext);
  const loading = useAppSelector(selectIsLoading);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <form
      id="authForm"
      onSubmit={handleSubmit((data) => dispach(signin(data)))}
      className="mt-10 flex flex-col gap-3 items-center"
    >
      <label className="w-full flex flex-col relative before:w-5 before:h-6 before:absolute before:top-1/2 before:left-2 before:bg-[url('/header/tel_icon.svg')] before:bg-contain before:bg-center before:bg-no-repeat">
        <span>Почта</span>
        <input
          {...register("email", { required: true })}
          type="email"
          className="h-12 pl-8 border border-white rounded-md bg-transparent"
        />
      </label>
      {errors.email && <span>This field is required</span>}
      <label className="w-full flex flex-col relative before:w-5 before:h-6 before:absolute before:top-1/2 before:left-2 before:bg-[url('/header/password_icon.svg')] before:bg-contain before:bg-center before:bg-no-repeat">
        <span>Пароль</span>
        <input
          {...register("password", { required: true })}
          type="password"
          className="h-12 pl-8 border border-white rounded-md bg-transparent "
        />
      </label>
      {errors.password && <span>This field is required</span>}

      <button type="button" onClick={() => setUserIsRegister(false)}>
        Создать аккаунт
      </button>

      <button
        disabled={loading}
        className="w-full mt-10 py-2 px-4 bg-[#d9d9d9] rounded-md text-2xl text-[#080808] font-semibold"
      >
        {loading ? "Подождите" : "Войти"}
      </button>
    </form>
  );
};

export default SignInForm;
