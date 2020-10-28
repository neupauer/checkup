import { useEffect } from "react";

const isBrowser = () => typeof window !== "undefined";

function useWindowEvent(evt, callback) {
  useEffect(() => {
    if (isBrowser()) {
      window.addEventListener(evt, callback);
      return () => window.removeEventListener(evt, callback);
    }
  }, [evt, callback]);
}

export default useWindowEvent;
