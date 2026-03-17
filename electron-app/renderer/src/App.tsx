import React from "react"
import AccountMenu from "./dashboard/AccountMenu.js"
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.js";

const App = () => {

    return (
        <React.StrictMode>
             <ThemeProvider theme={theme}>
     <AccountMenu />
     </ThemeProvider>
        </React.StrictMode>
    )
}

export default App