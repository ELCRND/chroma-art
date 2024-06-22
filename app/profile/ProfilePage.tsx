"use client";
import { useAppSelector } from "@/lib/hooks";
import { useSession } from "next-auth/react";
import { selectUser } from "@/lib/features/auth/authSlice";
import Profile from "../components/modules/Profile/Profile";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  const { status } = useSession();
  const authWithUsingJwt = useAppSelector(selectUser);
  const isSession = status === "authenticated" || authWithUsingJwt !== null;

  return <>{isSession ? <Profile /> : redirect("/")}</>;
};

export default ProfilePage;
