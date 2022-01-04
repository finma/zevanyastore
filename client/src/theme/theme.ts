/* eslint-disable import/no-default-export */
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto"].join(","),
  },
});

export default theme;
