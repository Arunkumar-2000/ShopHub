import { Link } from "react-router-dom";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <section className="bg-linear-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              New Collection 2026
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight">
              Discover Premium Products For Your Lifestyle
            </h1>

            <p className="mt-6 text-lg text-blue-100">
              Shop the latest fashion, electronics,
              furniture and accessories with amazing
              deals and fast delivery.
            </p>

            <div className="flex gap-4 mt-8">
              <Link to="/products">
                <Button size="lg">
                  Shop Now
                </Button>
              </Link>

              <Button
                variant="outline"
                size="lg"
                className="bg-white text-black"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200"
              alt="Hero"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;