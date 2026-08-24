import toast from "react-hot-toast";

const Toast = {
  success: (message) =>
    toast.success(message, {
      duration: 2200,
      position: "top-right",
    }),

  error: (message) =>
    toast.error(message, {
      duration: 2500,
      position: "top-right",
    }),

  loading: (message) =>
    toast.loading(message, {
      position: "top-right",
    }),

  custom: (message) =>
    toast(message, {
      duration: 2200,
      position: "top-right",
    }),
};

export default Toast;
