import { createMuiTheme } from "@material-ui/core/styles";
const arcGrey = "#868686";
const arcGreen = "#1C8D73";
const arcBlue = "#1769aa";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#ff4400",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#64b5f6",
      main: "#2196f3",
      // dark: will be calculated from palette.secondary.main,
    },
    arcOrange: "#ff8f00",
    arcBlue: arcBlue,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 500,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
    },
    heroText: {
      fontFamily: "Chango",
      fontSize: "40px",
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "1.5rem",
      color: "#ff8f00",
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: arcGreen,
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: arcBlue,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      color: arcGrey,
      fontSize: "0.75rem",
    },
  },
  // overrides component style , anytime that component renders it uses this styles
  overrides: {
    MuiInputLabel: {
      root: {
        color: arcBlue,
        fontSize: "1rem",
      },
    },
    MuiInput: {
      root: {
        color: arcGrey,
        fontWeight: 300,
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcBlue}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcBlue}`,
        },
        "&:after": {
          borderBottom: `2px solid ${arcBlue}`,
        },
      },
    },
  },
});
export default theme;
