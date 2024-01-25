import { Box, Button, Typography } from "@mui/material";
import styles from './projects.module.css'
import { Roboto } from "next/font/google";
import { ROUTE } from "@/constants/enum";
import { useRouter } from "next/navigation";
import ProjectComponent from "@/components/Projects/Projects";
 
const roboto = Roboto({
  variable: '--font-roboto',
  weight: '400',
  style: 'normal',
  subsets: ["latin"]
})

export default function Projects() {
    const router = useRouter()

    const handleNavigate = (route: ROUTE) => {
      router.push(route);
    }
    return (
        <Box className={styles.projectsContainer}>
            <ProjectComponent/>
            <Button variant='contained' className={styles.button} onClick={() => {handleNavigate(ROUTE.CONTACT)}}>
                <Typography className={`${styles.buttonText} ${roboto.variable}`}>
                    Contact Me
                </Typography>
            </Button>
        </Box>
    )
}