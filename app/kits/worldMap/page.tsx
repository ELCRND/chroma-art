import WorldMap from "@/app/components/modules/Kits/WorldMap/WorldMap";
import { Metadata } from "next";

export default function IndexPage() {
  return (
    <>
      <WorldMap />
    </>
  );
}

export const metadata: Metadata = {
  title: "Карта Мира",
};
