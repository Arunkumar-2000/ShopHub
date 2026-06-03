const addresses = [
  {
    id: 1,
    type: "Home",
    address:
      "Soali Nagar,Avinashi, Tirupur, Tamil Nadu, India",
  },
  {
    id: 2,
    type: "Office",
    address:
      "GVT Apartment , Avinashi, Tirupur, Tamil Nadu, India",
  },
];

const SavedAddresses = () => {
  return (
    <div className="bg-white rounded-xl  text-olive-900 shadow p-6">
      <h2 className="text-xl font-bold mb-6">
        Saved Addresses
      </h2>

      <div className="space-y-4">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="border rounded-lg p-4"
          >
            <h3 className="font-semibold">
              {address.type}
            </h3>

            <p className="text-gray-600 mt-2">
              {address.address}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedAddresses;