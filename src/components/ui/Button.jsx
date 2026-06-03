import React from "react";

const variants = {
  primary:
    "bg-blue-600 hover:bg-blue-700 text-white",
  secondary:
    "bg-slate-100 hover:bg-slate-200 text-slate-900",
  danger:
    "bg-red-600 hover:bg-red-700 text-white",
  success:
    "bg-green-600 hover:bg-green-700 text-white",
  outline:
    "border border-slate-300 hover:bg-slate-50 text-slate-900",
};

const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-6 py-3 text-lg",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  loading = false,
  disabled = false,
  ...props
}) => {
  return (
    <button
      disabled={loading || disabled}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-lg
        font-medium
        transition-all
        duration-200
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {loading && (
        <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      )}

      {children}
    </button>
  );
};

export default Button;