import { useState } from "react";

const useToggleStatus = (initialStatus: string) => {
  const [status, setStatus] = useState(initialStatus);

  const toggleStatus = () => {
    setStatus((prevStatus) => (prevStatus === "active" ? "expired" : "active"));
  };

  return { status, toggleStatus };
};

export default useToggleStatus;
