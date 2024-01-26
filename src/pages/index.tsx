import { Box, Button, Typography } from "@mui/material";
import styles from './home.module.css'
import { League_Spartan, Roboto } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { ROUTE } from "@/constants/enum";
import { CSSIcon, DockerIcon, FigmaIcon, GithubIcon, HTMLIcon, JavascriptIcon, JenkinsIcon, JestIcon, MUIIcon, NPMIcon, NextJSIcon, RTLIcon, ReactIcon, ReduxIcon, TypescriptIcon } from "@/components/Icons";
 
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

type ISkills = ISkill[]

interface ISkill {
  icon: JSX.Element
  skill: string
}

export default function Home() {
  const router = useRouter()
  const skills: ISkills = [
    {
      icon: <ReactIcon className={`${styles.icon} ${styles.reactIcon}`}/>,
      skill: 'ReactJS'
    },
    {
      icon: <RTLIcon className={`${styles.icon} ${styles.RTLIcon}`}/>,
      skill: 'React Testing Library'
    },
    {
      icon: <ReduxIcon className={styles.icon}/>,
      skill: 'Redux Toolkit'
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
    {
      icon: <TypescriptIcon className={styles.icon}/>,
      skill: 'Typescript'
    },
  ]

  const handleNavigate = (route: ROUTE) => {
    router.push(route);
  }
  return (
    <main>
      <Box className={styles.homeContainer}>
        <Typography className={`${styles.title} ${spartan.variable}`}>
          About Me
        </Typography>
        <Box className={styles.contentContainer}>
          <Typography className={`${styles.content} ${roboto.variable}`}>
            As a web developer, I help companies achieve a consistent look and theme across their web applications.
            I help them implement a robust coding practice to improve web applications performance and mitigate application bugs.
          </Typography>
          <Typography className={`${styles.content} ${roboto.variable}`}>
            I thrive best in a collaborative evironment, I believe that a team that collaborates effectively will achieve their goals efficiently.
          </Typography>
          <Typography className={`${styles.content} ${roboto.variable}`}>
            I also like being outside my comfort zone, it helps me try my best to keep up and keep on learning new things.
            I believe that I would be a great addition to any companies or development team out there looking for a good web developer.
          </Typography>
        </Box>
        <Typography className={`${styles.title} ${spartan.variable}`}>
          My Skills
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