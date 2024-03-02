import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ isOpen, children, onClose }) {
  const dialog = useRef();
  // useRef() is executed AFTER APP rebuild.
  useEffect(() => {
    isOpen ? dialog.current.showModal() : dialog.current.close();
  }, [isOpen]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {isOpen ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}
