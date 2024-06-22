import { Metadata } from "next";
import ProfilePage from "./ProfilePage";

export const metadata: Metadata = {
  title: "Профиль",
};

export default async function IndexPage() {
  return (
    <>
      <ProfilePage />
    </>
  );
}
