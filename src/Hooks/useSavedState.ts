import { useEffect, useState } from "react";

function useLocalStorage(key: string, initialValue: any) {
  const [state, setState] = useState<any>(initialValue);
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    const savedValue = localStorage.getItem(key);

    if (savedValue) {
      setState(JSON.parse(savedValue));
    } else {
      setState(initialValue);
    }
  }, [key, initialValue, setState]);

  useEffect(() => {
    const savedValue = localStorage.getItem(key);

    if (savedValue && initial) {
      setInitial(false);
      return;
    }

    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state, initial]);

  return [state, setState];
}

export default useLocalStorage;
