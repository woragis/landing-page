import { ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import { GlobalStyles } from "../styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import Router from "../pages/router";

function App() {
  // const theme = useContext(theme)
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
