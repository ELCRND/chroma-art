import Designer from "@/app/components/modules/Services/Designer/Designer";
import { Metadata } from "next";

export default function IndexPage() {
  return (
    <>
      <Designer />
    </>
  );
}

export const metadata: Metadata = {
  title: "Дизайнер",
};
