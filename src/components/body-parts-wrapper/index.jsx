import { Children, cloneElement } from "react";
import clsx from "clsx";

function BodyPartsWrapper({ selected = [], readOnly = false, handleClick, children, ...rest }) {
  return Children.map(children, (child, idx) =>
    cloneElement(child, {
      ...rest,
      id: idx,
      className: clsx("", {
        "text-red-500": selected.has(idx),
        "cursor-pointer hover:text-red-400": readOnly === false,
      }),
      onClick: () => {
        if (readOnly === false) {
          handleClick(idx);
        }
      },
    })
  );
}

export default BodyPartsWrapper;
