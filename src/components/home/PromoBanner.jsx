import Button from "../ui/Button";

const PromoBanner = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-linear-to-r from-orange-500 to-red-500 rounded-3xl p-10 text-white">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold">
              Mega Summer Sale
            </h2>

            <p className="mt-4 text-lg">
              Get up to 50% off on selected products.
              Limited time offer.
            </p>

            <Button
              className="mt-6"
              variant="secondary"
            >
              Explore Deals
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;