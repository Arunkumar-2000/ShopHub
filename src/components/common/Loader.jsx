const Loader = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div
        className="
          h-12
          w-12
          rounded-full
          border-4
          border-blue-600
          border-t-transparent
          animate-spin
        "
      />

      <p className="mt-4 text-gray-500">
        {text}
      </p>
    </div>
  );
};

export default Loader;