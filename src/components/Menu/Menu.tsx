import { Box, Typography } from "@mui/material";
import styles from './Menu.module.css'
import { CloseIcon, FacebookIcon, GithubIcon, LinkedInIcon } from "../Icons";
import { Dispatch, SetStateAction } from "react";
import { League_Spartan } from "next/font/google";
import { ROUTE } from "@/constants/enum";
import { useRouter } from "next/navigation";


interface IMenuProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>
    isOpen: boolean
}
 
const spartan500 = League_Spartan({
    variable: '--font-spartan-500',
    weight: '500',
    style: 'normal',
    subsets: ["latin"]
})
 
const spartan700 = League_Spartan({
    variable: '--font-spartan-700',
    weight: '700',
    style: 'normal',
    subsets: ["latin"]
})
 
const spartan600 = League_Spartan({
    variable: '--font-spartan-600',
    weight: '600',
    style: 'normal',
    subsets: ["latin"]
})

export default function Menu(props: IMenuProps) {
    const {setIsOpen, isOpen} = props
    const router = useRouter()
    
    const handleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleNavigate = (route: ROUTE) => {
        router.push(route)
        setIsOpen(false)
    }

    
    const handleClick = (link: string) => {
        window.open(link,'_blank');
    }

    return (
        <Box className={`${styles.menuContainer} ${spartan500.variable} ${spartan700.variable} ${spartan600.variable}`}>
            <Box className={styles.closeContainer}>
                <CloseIcon className={styles.closeIcon} onClick={handleMenu}/>
            </Box>
            <Box className={styles.menuContentContainer}>
                <Box className={styles.menuListContainer}>
                    <Typography className={styles.menuLabel}>
                        MENU
                    </Typography>
                    <Box className={styles.menuLinks}>
                        <Typography className={styles.menuLink} onClick={() => {handleNavigate(ROUTE.HOME)}}>
                            HOME
                        </Typography>
                        <Typography className={styles.menuLink} onClick={() => {handleNavigate(ROUTE.PROJECTS)}}>
                            PROJECTS
                        </Typography>
                        <Typography className={styles.menuLink} onClick={() => {handleNavigate(ROUTE.ABOUT)}}>
                            ABOUT
                        </Typography>
                        <Typography className={styles.menuLink} onClick={() => {handleNavigate(ROUTE.CONTACT)}}>
                            CONTACT
                        </Typography>
                    </Box>
                </Box>
                <Box className={styles.contactsContainer}>
                    <Typography className={styles.contactInfo}>
                        cedricmarcelino1105@gmail.com
                    </Typography>
                    <Typography className={styles.contactInfo}>
                        +639171406665
                    </Typography>
                    <Box className={styles.socialLinksContainer}>
                        <GithubIcon className={styles.socialLinkIcon} onClick={() => {handleClick('https://github.com/cedricmarcelino/')}}/>
                        <LinkedInIcon className={styles.socialLinkIcon} onClick={() => {handleClick('https://www.linkedin.com/in/cedric-marcelino-882966199/')}}/>
                        <FacebookIcon className={styles.socialLinkIcon} onClick={() => {handleClick('https://www.facebook.com/CJBMarcelino')}}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}