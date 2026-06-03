import Button from "../ui/Button";

const Newsletter = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-slate-900 rounded-3xl p-10 text-white text-center">
          <h2 className="text-4xl font-bold">
            Subscribe to Newsletter
          </h2>

          <p className="text-slate-300 mt-4">
            Get exclusive offers and updates.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-white border "
            />
            <Button>
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;