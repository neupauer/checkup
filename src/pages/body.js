import Screen from "~/components/screen";
import Layout, { useLayout } from "~/components/console-layout";
import FrontBody from "~/components/front-body";

function Map({}) {
  const { openSidebar } = useLayout();
  return (
    <Screen title="Map">
      HELLO
      <FrontBody />

    </Screen>
  );
}

Map.shell = Layout;

export default Map;
