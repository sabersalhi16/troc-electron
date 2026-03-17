import Box from '@mui/material/Box';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';
import { Typography, useTheme } from '@mui/material';

export default function AccountMenu() {
const {palette} = useTheme()

  return (
    <>
      <Box sx={{ display: 'flex', padding: 1, margin: 0, alignItems: 'center', textAlign: 'center', bgcolor: palette.primary.main, height: 50}}>
        <DirectionsRailwayIcon style={{color: palette.primary.contrastText}}/>
        <Typography sx={{ minWidth: 100, color: palette.primary.contrastText,ml: 1, fontWeight: 700,fontSize: 22, fontFamily:"Open Sans, sans-serif"}}>Station Monitor</Typography>
      </Box>  
    </>
  );
}
