import React from "react";

import { Box, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { isMobile } from "react-device-detect";
import { MdDarkMode, MdOutlineBrightnessLow } from "react-icons/md";
import {
  getBackgroundColor,
  getColor,
  getNavigationBackgroundColor,
} from "../../utils/getColors";
import MapInteractions from "../../components/MapInteractions";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useIsInstalled } from "../../hooks/useIsInstalled";
import { getPosition } from "../../utils/getPosition";

export const DarkModeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const isInstalled = useIsInstalled();

  const position = isMobile
    ? {
        bottom: getPosition(isInstalled, -20, 20, 10),
        right: 10,
      }
    : { top: 420, left: 20 };

  return (
    <MapInteractions.Container
      position={position}
      backgroundColor={getNavigationBackgroundColor({
        colorScheme,
        colors: theme.colors,
      })}
    >
      <MapInteractions.Button
        onClick={() => toggleColorScheme("light")}
        color={getColor({
          theme,
          active: colorScheme === "light",
          colorScheme,
        })}
        backgroundColor={getBackgroundColor({
          theme,
          active: colorScheme === "light",
          colorScheme,
        })}
        active={colorScheme === "light"}
      >
        <IoSunny />
      </MapInteractions.Button>
      <Box mb="xs" />
      <MapInteractions.Button
        onClick={() => toggleColorScheme("dark")}
        color={getColor({
          theme,
          active: colorScheme === "dark",
          colorScheme,
        })}
        backgroundColor={getBackgroundColor({
          theme,
          active: colorScheme === "dark",
          colorScheme,
        })}
        active={colorScheme === "dark"}
      >
        <IoMoon />
      </MapInteractions.Button>
    </MapInteractions.Container>
  );
};
