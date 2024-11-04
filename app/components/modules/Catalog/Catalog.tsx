"use client";
import { useCallback, useMemo, useState } from "react";
import Modal from "../Modal/Modal";
import ProductCard from "./ProductCard/ProductCard";
import ProductModal from "../ProductModal/ProductModal";
import {
  selectFavorites,
  selectFavoritesId,
  selectFavoritesIsLoading,
} from "@/lib/features/favorites/favoritesSlice";
import { bodyScrollOff, bodyScrollOn } from "@/lib/utils/common";
import { useInitialFavorites } from "@/lib/hooks/useInitialFavorites";
import { useAppSelector } from "@/lib/hooks";
import { useInitialBasket } from "@/lib/hooks/useInitialBasket";
import useGetSession from "@/lib/hooks/useGetSession";
import { IProduct } from "@/types/products";

const Catalog = ({ products }: { products: IProduct[] }) => {
  const [showModal, setShowModal] = useState(false);
  const favoritesProducts = useAppSelector(selectFavoritesId);
  const isLoading = useAppSelector(selectFavoritesIsLoading);

  const { jwtSession, oAuthSession } = useGetSession();
  useInitialFavorites();
  useInitialBasket();

  const handleModalOpen = useCallback(() => {
    setShowModal(true);
    bodyScrollOff();
  }, []);
  const handleModalClose = () => {
    setShowModal(false);
    bodyScrollOn();
  };

  return (
    <section className="_container min-h-screen pt-40 bg-black bg-[url('/common_layers_base.jpeg')]">
      <h1 className="mb-16 pl-2 text-4xl text-white border-b-2">Каталог</h1>
      <div className="grid gap-x-10 gap-y-28 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] ">
        {products.map((product: IProduct) => (
          <ProductCard
            key={product._id}
            product={product}
            modalHandler={handleModalOpen}
            isFavorite={favoritesProducts?.includes(product._id)}
            email={
              jwtSession ? jwtSession?.email! : oAuthSession?.user?.email! || undefined
            }
            isLoading={isLoading}
          />
        ))}
      </div>

      {showModal && (
        <Modal
          onClose={handleModalClose}
          cnModal="_product-modal"
          cnModalWrapper="_common-modal-wrapper"
        >
          <ProductModal
            email={jwtSession ? jwtSession?.email! : oAuthSession?.user?.email! || ""}
          />
        </Modal>
      )}
    </section>
  );
};

export default Catalog;
