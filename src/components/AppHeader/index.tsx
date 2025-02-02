import {
  Header as MTHeader,
  Space,
} from "@mantine/core";
import { useHistory } from "react-router-dom";
import { AppTitle } from "../AppTitle";
import { useIsInstalled } from "../../hooks/useIsInstalled";
import { getPosition } from "../../utils/getPosition";

const AppHeader = () => {
  const history = useHistory();
  const isInstalled = useIsInstalled();

  return (
    <MTHeader
      style={{
        position: "fixed",
        top: getPosition(isInstalled, 60, 10, 10),
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        borderBottom: "0px",
        left: "10px"
      }}
      height={60}
      onClick={() => history.push("/")}
    >
      <AppTitle />
      <Space sx={{ flexGrow: 1 }} />
    </MTHeader>
  );
};

export default AppHeader;
