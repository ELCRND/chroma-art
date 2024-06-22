import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import Header from "./components/modules/Header/Header";
import SessionLayout from "./layouts/SessionLayout";
import "./styles/globals.css";
import { Toaster } from "react-hot-toast";
import Hoc from "./components/modules/Hoc";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <SessionLayout>
      <StoreProvider>
        <Hoc>
          <html lang="en">
            <body>
              <Header />
              <main>{children}</main>
              <Toaster />
            </body>
          </html>
        </Hoc>
      </StoreProvider>
    </SessionLayout>
  );
}
