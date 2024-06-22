import Portal, { createContainer } from "@/lib/features/portal/portal";
import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type Props = {
  onClose?: VoidFunction;
  children: React.ReactNode;
  cnModal: string;
  cnModalWrapper: string;
};

const MODAL_CONTAINER_ID = "modal-container-id";

const Modal = ({ onClose, children, cnModal, cnModalWrapper }: Props) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isMounted, setMounted] = useState(false);

  const handleClose: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    onClose?.();
  }, [onClose]);

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID });
    setMounted(true);
  }, []);

  useEffect(() => {
    // const handleWrapperClick = (event: MouseEvent) => {
    // const { target } = event;

    //   if (target instanceof Node && rootRef.current === target) {
    //     onClose?.();
    //   }
    // };
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    // window.addEventListener("click", handleWrapperClick);
    window.addEventListener("keydown", handleEscapePress);

    return () => {
      // window.removeEventListener("click", handleWrapperClick);
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, [onClose]);

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <div ref={rootRef} className={cnModalWrapper}>
        <div className={cnModal}>
          <button
            className="text-white text-2xl ml-auto mr-4 block select-none"
            type="button"
            onClick={handleClose}
          >
            x
          </button>
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};

export default Modal;
