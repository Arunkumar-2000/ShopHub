import { X } from "lucide-react";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/50
        z-50
        flex
        items-center
        justify-center
        p-4
      "
      onClick={onClose}
    >
      <div
        className="
          bg-white
          rounded-xl
          shadow-xl
          w-full
          max-w-lg
          overflow-hidden
        "
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <div
          className="
            flex
            items-center
            justify-between
            p-5
            border-b
          "
        >
          <h2 className="text-lg font-semibold">
            {title}
          </h2>

          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="p-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;