const QuantitySelector = ({
  quantity,
  setQuantity,
}) => {
  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center border rounded-lg overflow-hidden w-fit">
      <button
        onClick={decrease}
        className="px-4 py-2 bg-slate-100 hover:bg-slate-200"
      >
        -
      </button>

      <span className="px-6 py-2 font-medium">
        {quantity}
      </span>

      <button
        onClick={increase}
        className="px-4 py-2 bg-slate-100 hover:bg-slate-200"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;