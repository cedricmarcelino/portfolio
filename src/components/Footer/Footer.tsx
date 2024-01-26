import { Box, Typography } from "@mui/material";
import styles from './Footer.module.css'
import { Roboto } from 'next/font/google';
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/enum";
 
const roboto = Roboto({
  variable: '--font-roboto',
  weight: '700',
  style: 'normal',
  subsets: ["latin"]
})

export default function Footer() {
    const router = useRouter()

    const handleNavigate = (route: ROUTE) => {
      router.push(route);
    }

    return (
        <Box className={styles.footerWrapper}>
            <Box className={styles.footerContainer}>
                <Box className={styles.linksContainer}>
                    <Typography className={`${styles.link} ${roboto.variable}`} onClick={() => {handleNavigate(ROUTE.PROJECTS)}}>
                        PROJECTS
                    </Typography>
                    <Typography className={`${styles.link} ${roboto.variable}`} onClick={() => {handleNavigate(ROUTE.ABOUT)}}>
                        ABOUT ME
                    </Typography>
                    <Typography className={`${styles.link} ${roboto.variable}`} onClick={() => {handleNavigate(ROUTE.CONTACT)}}>
                        CONTACT
                    </Typography>
                </Box>
                <Box className={styles.logoAndContactsContainer}>
                    <Box className={styles.logoContainer}  onClick={() => {handleNavigate(ROUTE.HOME)}}>

                    </Box>
                    <Box className={styles.contactsContainer}>
                        <Typography className={`${styles.contacts} ${roboto.variable} ${styles.contactEmail}`}>
                            cedricmarcelino1105@gmail.com
                        </Typography>
                        <Typography className={`${styles.contacts} ${roboto.variable}`}>
                            +639171406665
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}