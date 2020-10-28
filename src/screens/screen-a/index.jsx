import LayoutContent from "~/components/console-layout-content";
import Layout from "~/components/console-layout";
import Screen from "~/components/screen";

function ScreenAScreen({}) {
  return (
    <Screen title="Screen A">
      <LayoutContent title="Screen A"></LayoutContent>
    </Screen>
  );
}

ScreenAScreen.shell = Layout;

export default ScreenAScreen;
