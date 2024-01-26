import { Box, Typography } from "@mui/material";
import styles from './Header.module.css';
import { ROUTE } from "@/constants/enum";
import { DoubleArrowDownIcon, HamburgerIcon } from "../Icons";
import { League_Spartan } from 'next/font/google'
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from "react";
import logo from '../../../public/images/logo.png'
 
const labelSubtitle = League_Spartan({
  variable: '--font-spartan',
  subsets: ["latin"]
})

interface IHeader {
    path: ROUTE
    setIsOpen: Dispatch<SetStateAction<boolean>>
    isOpen: boolean
}

export default function Header(props: IHeader) {
    const { path, setIsOpen, isOpen } = props
    const router = useRouter()
    let title
    let subtitle

    const handleNavigate = (route: ROUTE) => {
      router.push(route);
    }

    const handleMenu = () => {
        setIsOpen(!isOpen)
    }

    switch(path) {
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
                    <Box className={styles.logoContainer} onClick={() => {handleNavigate(ROUTE.HOME)}} sx={{backgroundImage: `url(${logo.src})`}}/>
                    <Box className={styles.menuButtonContainer} onClick={handleMenu}>
                        <HamburgerIcon/>
                    </Box>
                </Box>
                <Box className={styles.labelContainer}>
                    <Typography className={styles.labelTitle}>
                        {title}
                    </Typography>
                    <Typography className={`${labelSubtitle.variable} ${styles.labelSubtitle}`}>
                        {subtitle}
                    </Typography>
                </Box>
                <DoubleArrowDownIcon className={styles.arrowIcon}/>
            </Box>
        </Box>
    )
}