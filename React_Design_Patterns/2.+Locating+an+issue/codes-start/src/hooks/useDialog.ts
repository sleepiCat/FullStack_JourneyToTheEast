import { useEffect, useState } from "react";
import useCounter from "./useCounter";

const useToggleDialog = () => {
  const [visible, setVisible] = useState(false);

  useCounter();
  
  // useToggleDialog is a custom hook
  // it returns an object that contains the:
  // 1. state, 2. function show, 3. function hide
  return {
    isVisible: visible,
    show: () => setVisible(true),
    hide: () => setVisible(false),
  };
};

export default useToggleDialog;
