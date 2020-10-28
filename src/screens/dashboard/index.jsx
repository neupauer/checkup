import LayoutContent from "~/components/console-layout-content";
import Layout from "~/components/console-layout";
import Screen from "~/components/screen";

function DashboardScreen({}) {
  return (
    <Screen title="Dashboard">
      <LayoutContent title="Dashboard"></LayoutContent>
    </Screen>
  );
}

DashboardScreen.shell = Layout;

export default DashboardScreen;
