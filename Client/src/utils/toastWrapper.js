import { toast } from "react-hot-toast";

let currentToast = null;

const showToast = (toastFunction, message, options) => {
  if (currentToast) {
    toast.dismiss(currentToast);
  }

  currentToast = toastFunction(message, {
    ...options,
    duration: 2000, // Adjust this value as needed
    id: "single-toast",
    onClose: () => {
      currentToast = null;
    },
  });

  return currentToast;
};

export const toastError = (message) => {
  return showToast(toast.error, message, { position: "top-left" });
};

export const toastSuccess = (message) => {
  return showToast(toast.success, message, { position: "top-left" });
};

export const toastInfo = (message) => {
  return showToast(toast, message, { position: "top-left" });
};
