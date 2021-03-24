import Screen from "~/components/screen";
import LayoutContent from "~/components/console-layout-content";
import Layout, { useLayout } from "~/components/console-layout";
import Body from "~/components/body";

function Map({}) {
  const { openSidebar } = useLayout();
  return (
    <Screen title="Map">
      <Body/>
    </Screen>
  );
}

Map.shell = Layout;

export default Map;
