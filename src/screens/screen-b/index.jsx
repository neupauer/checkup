import LayoutContent from "~/components/console-layout-content";
import Layout from "~/components/console-layout";
import Screen from "~/components/screen";

function ScreenBScreen({}) {
  return (
    <Screen title="Screen B">
      <LayoutContent title="Screen B"></LayoutContent>
    </Screen>
  );
}

ScreenBScreen.shell = Layout;

export default ScreenBScreen;
