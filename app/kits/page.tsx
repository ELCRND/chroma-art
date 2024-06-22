import { Metadata } from "next";
import Kits from "../components/modules/Kits/Kits";

export default function IndexPage() {
  return (
    <>
      <Kits />
    </>
  );
}

export const metadata: Metadata = {
  title: "Комплекты",
};
