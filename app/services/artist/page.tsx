import Artist from "@/app/components/modules/Services/Artist/Artist";

import { Metadata } from "next";

export default function IndexPage() {
  return (
    <>
      <Artist />
    </>
  );
}

export const metadata: Metadata = {
  title: "Художник Декоратор",
};
