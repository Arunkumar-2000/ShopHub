import { useState } from "react";

const ProductGallery = ({ images }) => {
  const [selected, setSelected] = useState(
    images[0]
  );

  return (
    <div>
      <img
        src={selected}
        alt="product"
        className="
          w-full
          h-112.5
          object-cover
          rounded-xl
          border
        "
      />

      <div className="flex gap-3 mt-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            onClick={() =>
              setSelected(img)
            }
            className="
              w-20
              h-20
              object-cover
              rounded-lg
              border
              cursor-pointer
            "
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;