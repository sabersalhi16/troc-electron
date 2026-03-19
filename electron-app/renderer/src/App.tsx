import React, { useEffect, useState } from "react"
import AccountMenu from "./dashboard/AccountMenu.js"
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.js";

const App = () => {
const [version, setVersion] = useState("")


useEffect(() => {
    window.electronAPI.getStationsList().then((v) => {
        setVersion(v)
    })
}, [])
    return (
        <React.StrictMode>
        <ThemeProvider theme={theme}>
            <p>{version}</p>
     <AccountMenu />
     </ThemeProvider>
        </React.StrictMode>
    )
}

export default App