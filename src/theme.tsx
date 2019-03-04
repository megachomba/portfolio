import { createMuiTheme } from '@material-ui/core/styles';

 const theme = createMuiTheme(
  {"palette": {
    "common": {
      "black":"rgba(0, 0, 0, 1)",
      "white":"#fff" },

    "background": {
      "paper": "rgba(9, 0, 0, 1)",
      "default": "#fafafa"},

    "primary":{
      "light":"rgba(0, 42, 255, 1)",
      "main":"rgba(0, 0, 0, 1)",
      "dark":"#303f9f",
      "contrastText":"rgba(255, 255, 255, 1)"},

    "secondary":{
      "light":"rgba(201, 24, 29, 1)",
      "main":"rgba(255, 0, 5, 1)",
      "dark":"#c51162",
      "contrastText":"rgba(255, 255, 255, 1)"},
    "error":{
      "light":"#e57373",
      "main":"#f44336",
      "dark":"#d32f2f",
      "contrastText":"#fff"},
    "text":{
      "primary":"rgba(0, 0, 0, 0.87)",
      "secondary":"rgba(0, 0, 0, 0.54)",
      "disabled":"rgba(0, 0, 0, 0.38)",
      "hint":"rgba(0, 0, 0, 0.38)"}
    }
  });
  export default theme;