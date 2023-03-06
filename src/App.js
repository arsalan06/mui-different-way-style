import "./App.css";
import Notes from "./components/Notes";
import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#ec313b",
    },
  },
  typography: {
    h1: {
      color: "red",
      fontSize: "40px",
    },
    h2: {
      color: "green",
      fontSize: "20px",
    },
    pTage:{
      color:"yellow"
    }
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Notes />
      </ThemeProvider>
    </div>
  );
}

export default App;
