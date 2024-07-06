import { Box, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { isMobile } from "react-device-detect";
import { TbRoute, TbRouteOff } from "react-icons/tb";
import {
  getBackgroundColor,
  getColor,
  getNavigationBackgroundColor,
} from "../../utils/getColors";
import MapInteractions from "../MapInteractions";
import { useIsInstalled } from "../../hooks/useIsInstalled";
import { getPosition } from "../../utils/getPosition";

export const LinesToggle = ({
  linesVisible,
  setLinesVisible,
}: {
  linesVisible: boolean;
  setLinesVisible(v: boolean): void;
}) => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const isInstalled = useIsInstalled();

  const position = isMobile
    ? {
        bottom: getPosition(isInstalled, -20, 30, 10),
        left: 20,
      }
    : { top: 310, left: 20 };

  return (
    <MapInteractions.Container
      position={position}
      backgroundColor={getNavigationBackgroundColor({
        colorScheme,
        colors: theme.colors,
      })}
    >
      <MapInteractions.Button
        onClick={() => setLinesVisible(true)}
        color={getColor({
          theme,
          active: linesVisible === true,
          colorScheme,
        })}
        backgroundColor={getBackgroundColor({
          theme,
          active: linesVisible === true,
          colorScheme,
        })}
        active={linesVisible}
      >
        <TbRoute />
      </MapInteractions.Button>
      <MapInteractions.Button
        onClick={() => setLinesVisible(false)}
        color={getColor({
          theme,
          active: linesVisible === false,
          colorScheme,
        })}
        backgroundColor={getBackgroundColor({
          theme,
          active: linesVisible === false,
          colorScheme,
        })}
        active={!linesVisible}
      >
        <TbRouteOff />
      </MapInteractions.Button>
    </MapInteractions.Container>
  );
};
