"use client";
import { useState } from "react";
import Modal from "../../Modal/Modal";

const Feedback = () => {
  const [isModalActive, setModalActive] = useState(false);
  const handleModalOpen = () => {
    setModalActive(true);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };
  return (
    <div>
      <button
        type="button"
        onClick={handleModalOpen}
        className="mt-6 px-[60px] py-[14px] relative z-10 bg-transparent border border-white rounded-2xl text-2xl text-white hover:bg-white hover:text-black transition-colors active:bg-gray-300 select-none"
      >
        Оставить заявку
      </button>
      {isModalActive && (
        <Modal
          onClose={handleModalClose}
          cnModal={`_feedback-modal`}
          cnModalWrapper={`_common-modal-wrapper`}
        >
          <div className="text-white">Soon</div>
        </Modal>
      )}
    </div>
  );
};

export default Feedback;
