import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ isOpen, children }) {
  const dialog = useRef();
  // useRef() is executed AFTER App rebuild.
  useEffect(() => {
    isOpen ? dialog.current.showModal() : dialog.current.close();
  }, [isOpen]);

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
