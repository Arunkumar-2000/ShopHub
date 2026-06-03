import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [showButton, setShowButton] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(
        window.scrollY > 500
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  if (!showButton) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
        fixed
        bottom-6
        right-6
        z-50
        p-3
        rounded-full
        bg-blue-600
        text-white
        shadow-lg
        hover:scale-110
        transition
      "
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default BackToTop;