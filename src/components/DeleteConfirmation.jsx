import { useEffect } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    // The problem is remove this timer when the modal is closed.
    // When having a function in pointer it could lead to infinite loop.
    const timer = setTimeout(() => {
      console.log("SET TIMEOUT");
      onConfirm();
    }, 3000);
    return () => {
      console.log("CLEAR TIMEOUT");
      clearTimeout(timer);
    };
  }, []);
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    </div>
  );
}
