import { Box, Typography } from "@mui/material";
import styles from './Header.module.css';
import { ROUTE } from "@/constants/enum";
import { DoubleArrowDownIcon, HamburgerIcon } from "../Icons";

interface IHeader {
    path: ROUTE
}

export default function Header(props: IHeader) {
    let title
    let subtitle

    switch(props.path) {
        case ROUTE.HOME:
          title = 'Cedric Marcelino'
          subtitle = 'Web Developer'
          break;
        case ROUTE.ABOUT:
            title = 'About me'
            subtitle = 'Not your average joe!'
        break;
        case ROUTE.CONTACT:
            title = 'Contact me'
            subtitle = 'Say hi to me'
        break;
        case ROUTE.PROJECTS:
            title = 'My Projects'
            subtitle = 'Made with love'
        break;
        default:
            title = 'What are you doing here?'
            subtitle = 'This is the void. Go back!'
            break;
    }

    return (
        <Box className={styles.headerWrapper}>
            <Box className={styles.headerContainer}>
                <Box className={styles.buttonsContainer}>
                    <Box className={styles.logoContainer}>

                    </Box>
                    <Box className={styles.menuButtonContainer}>
                        <HamburgerIcon/>
                    </Box>
                </Box>
                <Box className={styles.labelContainer}>
                    <Typography className={styles.labelTitle}>
                        {title}
                    </Typography>
                    <Typography className={styles.labelSubtitle}>
                        {subtitle}
                    </Typography>
                </Box>
                <DoubleArrowDownIcon className={styles.arrowIcon}/>
            </Box>
        </Box>
    )
}