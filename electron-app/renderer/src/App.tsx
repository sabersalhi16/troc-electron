import React from "react"
import AppTitle from "./dashboard/AccountMenu"
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.js";

const App = () => {

    return (
        <React.StrictMode>
        <ThemeProvider theme={theme}>
     <AppTitle />
     </ThemeProvider>
        </React.StrictMode>
    )
}

export default App