import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  useMantineTheme,
} from "@mantine/core";

import Router from "./routes";
import AppHeader from "./components/AppHeader";
import { setThemeColor } from "./utils/setThemeColor";

const queryClient = new QueryClient();

const App = () => {
  const [colorScheme, setColorScheme] = React.useState<any>(
    localStorage.getItem("colorScheme") ?? "light"
  );
  const theme = useMantineTheme();


  const toggleColorScheme = (value: ColorScheme) => {
    localStorage.setItem("colorScheme", value);
    return setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  React.useLayoutEffect(() => {
    const [html] = document.getElementsByTagName("html");

    if (colorScheme === "light") {
      html.style.backgroundColor = theme.colors.gray[1];
      setThemeColor("#f6f2e8");
    } else {
      html.style.backgroundColor = theme.colors.gray[8];
      setThemeColor("#1a202c");
    }
  }, [colorScheme]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <QueryClientProvider client={queryClient}>
          <AppShell
            sx={{ padding: "0px !important", minHeight: "100%" }}
            header={<AppHeader />}
          >
            <Router />
          </AppShell>
        </QueryClientProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
