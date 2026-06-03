const orders = [
  {
    id: "#ORD-1001",
    date: "01 June 2026",
    total: 2499,
    status: "Delivered",
  },
  {
    id: "#ORD-1002",
    date: "15 May 2026",
    total: 5999,
    status: "Delivered",
  },
  {
    id: "#ORD-1003",
    date: "02 May 2026",
    total: 1499,
    status: "Processing",
  },
];

const OrderHistory = () => {
  return (
    <div className="bg-white rounded-xl text-olive-900 shadow p-6">
      <h2 className="text-xl font-bold mb-6">
        Order History
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">
                Order ID
              </th>
              <th className="text-left py-3">
                Date
              </th>
              <th className="text-left py-3">
                Amount
              </th>
              <th className="text-left py-3">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b"
              >
                <td className="py-4">
                  {order.id}
                </td>

                <td className="py-4">
                  {order.date}
                </td>

                <td className="py-4">
                  ₹{order.total}
                </td>

                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      order.status ===
                      "Delivered"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;