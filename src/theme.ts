import { createTheme } from '@mui/material/styles';
import { League_Gothic } from "next/font/google";

const leagueGothic = League_Gothic({ subsets: ["latin"] });

const theme = createTheme({
    typography: {
        fontFamily: leagueGothic.style.fontFamily,
    }
});

export default theme