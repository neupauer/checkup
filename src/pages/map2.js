import Screen from "~/components/screen";
import LayoutContent from "~/components/console-layout-content";
import Layout, { useLayout } from "~/components/console-layout";
import Body from "~/components/body";

import clsx from "clsx";
import { cloneElement, useMemo, Children } from "react";
import { DragSelection, useSelectableByDragging } from "react-drag-n-select";

const Item = () => {
  const [{ selected }, ref] = useSelectableByDragging();

  return (
    <div
      {...{ ref }}
      className={clsx("w-8 h-8 bg-gray-50 opacity-75 rounded-sm transform transition-all duration-300 ease-in-out", {
        "bg-red-400 scale-105 shadow-sm": selected,
      })}
    />
  );
};

function Selectable({ children }) {
  const [{ selected }, ref] = useSelectableByDragging();
  return cloneElement(children, {
    ...{ ref },
    className: selected ? "selected" : "",
    style: { stroke: selected ? "red" : "green" },
  });
}

function Wrapper({ children }) {
  return (
    <>
      {Children.map(children, (child) => (
        <Selectable>{child}</Selectable>
      ))}
    </>
  );
}

function Map({}) {
  const { openSidebar } = useLayout();
  return (
    <Screen title="Map">
      <div className="relative">
        <img src="./human.svg" className="absolute inset-0 w-full h-full select-none" draggable="false" />
        <div>
          <DragSelection>
            <div className="grid grid-cols-12 gap-1 p-8">
              {new Array(12 * 36).fill(0).map(() => (
                <Item />
              ))}
            </div>
          </DragSelection>
        </div>
      </div>
    </Screen>
  );
}

Map.shell = Layout;

export default Map;
