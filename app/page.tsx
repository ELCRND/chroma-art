import type { Metadata } from "next";
import Hero from "./components/modules/Hero/Hero";

export default function IndexPage() {
  return (
    <>
      <Hero />
    </>
  );
}

export const metadata: Metadata = {
  title: "Colora",
};
