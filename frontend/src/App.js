import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Navbar from "./components/Navbar";
import InfoPage from "./components/InfoPage";
import GeneratePage from "./components/GeneratePage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FAAFBE", // donut pink
    },
    secondary: {
      main: "#ffffff", // white
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<InfoPage />} />
          <Route path="/generate" element={<GeneratePage />} />
        </Routes>
      </Router>
      </ThemeProvider>
  );
}

export default App;