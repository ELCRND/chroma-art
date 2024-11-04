import { useSession } from "next-auth/react";
import { selectUser } from "../features/auth/authSlice";
import { useAppSelector } from "../hooks";

const useGetSession = () => {
  const user = useAppSelector(selectUser);
  const { data } = useSession();

  return { jwtSession: user, oAuthSession: data };
};

export default useGetSession;
