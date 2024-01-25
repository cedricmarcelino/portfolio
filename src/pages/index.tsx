import { Box, Button, Typography } from "@mui/material";
import styles from './home.module.css'
import { League_Spartan, Roboto } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { ROUTE } from "@/constants/enum";
import { CSSIcon, DockerIcon, FigmaIcon, GithubIcon, HTMLIcon, JavascriptIcon, JenkinsIcon, JestIcon, MUIIcon, NPMIcon, NextJSIcon, RTLIcon, ReactIcon } from "@/components/Icons";
 
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
  const skills = [
    {
      icon: <ReactIcon className={styles.icon}/>,
      skill: 'ReactJS'
    },
    {
      icon: <RTLIcon className={styles.icon}/>,
      skill: 'React Testing Library'
    },
    {
      icon: <JestIcon className={styles.icon}/>,
      skill: 'Jest Testing Framework'
    },
    {
      icon: <GithubIcon className={styles.icon}/>,
      skill: 'Github'
    },
    {
      icon: <MUIIcon className={styles.icon}/>,
      skill: 'Material UI'
    },
    {
      icon: <HTMLIcon className={styles.icon}/>,
      skill: 'HTML'
    },
    {
      icon: <JavascriptIcon className={styles.icon}/>,
      skill: 'Javascript'
    },
    {
      icon: <CSSIcon className={styles.icon}/>,
      skill: 'CSS'
    },
    {
      icon: <DockerIcon className={styles.icon}/>,
      skill: 'Docker'
    },
    {
      icon: <JenkinsIcon className={styles.icon}/>,
      skill: 'Jenkins'
    },
    {
      icon: <NextJSIcon className={styles.icon}/>,
      skill: 'NextJS'
    },
    {
      icon: <FigmaIcon className={styles.icon}/>,
      skill: 'Figma'
    },
    {
      icon: <NPMIcon className={styles.icon}/>,
      skill: 'NPM'
    },
  ]

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
          {skills.map((skill,value) => {
            return(
              <Box className={styles.skillContainer} key={value}>
                {skill.icon}
                <Typography className={`${styles.skill} ${roboto.variable}`}>
                  {skill.skill}
                </Typography>
              </Box>
            )
          })}
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