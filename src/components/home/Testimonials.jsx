const testimonials = [
  {
    name: "Rahul Sharma",
    review:
      "Amazing quality products and fast delivery.",
  },
  {
    name: "Priya Verma",
    review:
      "The shopping experience was smooth and easy.",
  },
  {
    name: "Arjun Kumar",
    review:
      "Best prices compared to other stores.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-slate-100 text-stone-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white p-6 rounded-xl shadow"
            >
              <p className="text-gray-600">
                "{item.review}"
              </p>

              <h4 className="font-semibold mt-4">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;