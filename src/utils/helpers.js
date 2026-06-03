/*
|--------------------------------------------------------------------------
| Currency Formatter
|--------------------------------------------------------------------------
*/

export const formatCurrency = (
  amount
) => {
  return new Intl.NumberFormat(
    "en-IN",
    {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }
  ).format(amount);
};

/*
|--------------------------------------------------------------------------
| Percentage Discount Calculator
|--------------------------------------------------------------------------
*/

export const calculateDiscountPrice =
  (
    price,
    discount = 0
  ) => {
    return Math.round(
      price -
        (price * discount) /
          100
    );
  };

/*
|--------------------------------------------------------------------------
| Truncate Text
|--------------------------------------------------------------------------
*/

export const truncateText = (
  text,
  maxLength = 80
) => {
  if (
    text.length <= maxLength
  )
    return text;

  return (
    text.substring(
      0,
      maxLength
    ) + "..."
  );
};

/*
|--------------------------------------------------------------------------
| Generate Random ID
|--------------------------------------------------------------------------
*/

export const generateId = () => {
  return (
    Date.now().toString() +
    Math.random()
      .toString(36)
      .substring(2, 8)
  );
};

/*
|--------------------------------------------------------------------------
| Calculate Cart Total
|--------------------------------------------------------------------------
*/

export const calculateCartTotal =
  (cartItems = []) => {
    return cartItems.reduce(
      (total, item) =>
        total +
        item.price *
          item.quantity,
      0
    );
  };

/*
|--------------------------------------------------------------------------
| Calculate Cart Quantity
|--------------------------------------------------------------------------
*/

export const calculateCartItems =
  (cartItems = []) => {
    return cartItems.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );
  };

/*
|--------------------------------------------------------------------------
| Get Rating Stars Array
|--------------------------------------------------------------------------
*/

export const getRatingArray = (
  rating
) => {
  return Array.from(
    { length: 5 },
    (_, index) =>
      index + 1 <=
      Math.round(rating)
  );
};

/*
|--------------------------------------------------------------------------
| Product Search Helper
|--------------------------------------------------------------------------
*/

export const searchProducts =
  (
    products,
    searchTerm
  ) => {
    if (!searchTerm)
      return products;

    return products.filter(
      (product) =>
        product.title
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
    );
  };

/*
|--------------------------------------------------------------------------
| Product Category Filter
|--------------------------------------------------------------------------
*/

export const filterProductsByCategory =
  (
    products,
    category
  ) => {
    if (
      !category ||
      category === "All"
    )
      return products;

    return products.filter(
      (product) =>
        product.category ===
        category
    );
  };

/*
|--------------------------------------------------------------------------
| Product Sorting
|--------------------------------------------------------------------------
*/

export const sortProducts = (
  products,
  sortBy
) => {
  const sorted = [
    ...products,
  ];

  switch (sortBy) {
    case "low-high":
      return sorted.sort(
        (a, b) =>
          a.price - b.price
      );

    case "high-low":
      return sorted.sort(
        (a, b) =>
          b.price - a.price
      );

    case "rating":
      return sorted.sort(
        (a, b) =>
          b.rating - a.rating
      );

    case "name":
      return sorted.sort((a, b) =>
        a.title.localeCompare(
          b.title
        )
      );

    default:
      return products;
  }
};

/*
|--------------------------------------------------------------------------
| Local Storage Helpers
|--------------------------------------------------------------------------
*/

export const saveToStorage = (
  key,
  value
) => {
  localStorage.setItem(
    key,
    JSON.stringify(value)
  );
};

export const getFromStorage =
  (
    key,
    defaultValue = null
  ) => {
    const data =
      localStorage.getItem(key);

    return data
      ? JSON.parse(data)
      : defaultValue;
  };

export const removeFromStorage =
  (key) => {
    localStorage.removeItem(key);
  };

/*
|--------------------------------------------------------------------------
| Debounce Function
|--------------------------------------------------------------------------
*/

export const debounce = (
  func,
  delay = 500
) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(
      () => func(...args),
      delay
    );
  };
};

/*
|--------------------------------------------------------------------------
| Date Formatter
|--------------------------------------------------------------------------
*/

export const formatDate = (
  date
) => {
  return new Date(
    date
  ).toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }
  );
};