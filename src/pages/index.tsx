import { Box, Button, Typography } from "@mui/material";
import styles from './home.module.css'
import { League_Spartan, Roboto } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { ROUTE } from "@/constants/enum";
 
const spartan = League_Spartan({
  variable: '--font-spartan',
  subsets: ["latin"]
})
 
const roboto = Roboto({
  variable: '--font-roboto',
  weight: '400',
  style: 'normal',
  subsets: ["latin"]
})

export default function Home() {
  const router = useRouter()

  const handleNavigate = (route: ROUTE) => {
    router.push(route);
  }
  return (
    <main>
      <Box className={styles.homeContainer}>
        <Typography className={`${styles.title} ${spartan.variable}`}>
          About me
        </Typography>
        <Typography className={`${styles.content} ${roboto.variable}`}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </Typography>
        <Typography className={`${styles.title} ${spartan.variable}`}>
          My skills
        </Typography>
        <Box className={styles.skillsContainer}>

        </Box>
        <Box className={styles.projectsContainer}>

        </Box>
        <Box className={styles.buttonsContainer}>
          <Button variant='contained' className={styles.button} onClick={() => {handleNavigate(ROUTE.PROJECTS)}}>
            <Typography className={`${styles.buttonText} ${roboto.variable}`}>
              All Projects
            </Typography>
          </Button>
          <Button variant='contained' className={styles.button} onClick={() => {handleNavigate(ROUTE.CONTACT)}}>
            <Typography className={`${styles.buttonText} ${roboto.variable}`}>
              Contact Me
            </Typography>
          </Button>
        </Box>
      </Box>
    </main>
  );
}