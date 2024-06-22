import CoatingSelection from "@/app/components/modules/Services/CoatingSelection/CoatingSelection";
import { Metadata } from "next";

export default function IndexPage() {
  return (
    <>
      <CoatingSelection />
    </>
  );
}

export const metadata: Metadata = {
  title: "Подбор покрытий",
};
