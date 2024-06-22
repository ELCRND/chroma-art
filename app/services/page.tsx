import type { Metadata } from "next";
import Services from "../components/modules/Services/Services";

export default function IndexPage() {
  return (
    <>
      <Services />
    </>
  );
}

export const metadata: Metadata = {
  title: "Услуги",
};
