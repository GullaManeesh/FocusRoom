import { useEffect, useState } from "react";

const Toast = ({ message, description, duration = 3000, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose && onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 max-w-xs w-full bg-black text-white p-4 rounded-lg shadow-lg border border-gray-700 flex flex-col space-y-1 z-50 transition-opacity duration-300 opacity-100">
      <strong className="font-semibold">{message}</strong>
      <span className="text-gray-400 text-sm">{description}</span>
    </div>
  );
};

export default Toast;
