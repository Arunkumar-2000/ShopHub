import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Breadcrumb from "../components/common/Breadcrumb";

import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import QuantitySelector from "../components/product/QuantitySelector";
import ProductReviews from "../components/product/ProductReviews";
import RelatedProducts from "../components/product/RelatedProducts";

const ProductDetails = () => {
  const { id } = useParams();

  const products = useSelector(
    (state) => state.products.products
  );

  const product = products.find(
    (item) =>
      item.id === Number(id)
  );

  const [quantity, setQuantity] =
    useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20">
        Product Not Found
      </div>
    );
  }

  const images = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <Breadcrumb
        items={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Products",
            link: "/products",
          },
          {
            label: product.title,
          },
        ]}
      />

      <div className="grid lg:grid-cols-2 gap-12">
        <ProductGallery
          images={images}
        />

        <div>
          <ProductInfo
            product={product}
            quantity={quantity}
          />

          <div className="mt-8">
            <h3 className="font-semibold mb-3">
              Quantity
            </h3>

            <QuantitySelector
              quantity={quantity}
              setQuantity={
                setQuantity
              }
            />
          </div>
        </div>
      </div>

      <ProductReviews />

      <RelatedProducts
        currentProduct={product}
        products={products}
      />
    </div>
  );
};

export default ProductDetails;