const Input = ({
  label,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium">
          {label}
        </label>
      )}

      <input
        className={`
          w-full
          px-4
          py-3
          border
          rounded-lg
          outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          transition
          ${error ? "border-red-500" : "border-slate-300"}
          ${className}
        `}
        {...props}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;