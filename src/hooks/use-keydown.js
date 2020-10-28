import useWindowEvent from "~/hooks/use-window-event";

function useKeydown(key, callback) {
  useWindowEvent("keydown", (evt) => {
    if (evt.key === key) {
      callback(evt);
    }
  });
}

export default useKeydown;
