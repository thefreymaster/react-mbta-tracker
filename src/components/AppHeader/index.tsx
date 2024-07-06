import {
  Box,
  Header as MTHeader,
  Space,
  useMantineColorScheme,
} from "@mantine/core";
import { TransitTitle } from "../../common/TransitTitle";
import { useHistory } from "react-router-dom";
import { AppTitle } from "../AppTitle";
import { useIsInstalled } from "../../hooks/useIsInstalled";
import { isMobile } from "react-device-detect";
import { getPosition } from "../../utils/getPosition";

const AppHeader = () => {
  const history = useHistory();
  const { colorScheme } = useMantineColorScheme();
  const isInstalled = useIsInstalled();

  return (
    <MTHeader
      style={{
        position: "fixed",
        top: getPosition(isInstalled, 60, 20, 10),
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        borderBottom: "0px",
      }}
      height={60}
      p="xs"
      pl="lg"
      onClick={() => history.push("/")}
    >
      <AppTitle />
      <Space sx={{ flexGrow: 1 }} />
    </MTHeader>
  );
};

export default AppHeader;
