import { Box, Button, Typography } from "@mui/material"
import styles from './Projects.module.css'
import { Roboto } from "next/font/google"
import shoppingCartImage from '../../../public/images/shopping-carts.jpg'
import bankImage from '../../../public/images/bank.jpg'

type IProjects = IProject[]
interface IProject {
    title: string,
    techs: string[]
    repo: string,
    deployment: string,
    image: string,
}
 
const roboto900 = Roboto({
  variable: '--font-roboto',
  weight: '900',
  style: 'normal',
  subsets: ["latin"]
})
 
const roboto700 = Roboto({
  variable: '--font-roboto',
  weight: '700',
  style: 'normal',
  subsets: ["latin"]
})


 
const roboto400 = Roboto({
    variable: '--font-roboto',
    weight: '400',
    style: 'normal',
    subsets: ["latin"]
  })
  
  

export default function ProjectsComponent() {
    const handleClick = (link: string) => {
        window.open(link,'_blank');
    }
    const projects: IProjects = [
        {
            title: 'Limited E-commerce Site',
            techs: ['NextJS', 'Material UI', 'Redux Toolkit', 'Lodash', 'Typescript','DummyJSON API'],
            repo: 'https://github.com/cedricmarcelino/sample-ecommerce',
            deployment: 'https://sample-ecommerce-delta.vercel.app/',
            image: shoppingCartImage.src
        },
        {
            title: 'Banking App',
            techs: ['ReactJS', 'Tailwind'],
            repo: 'https://github.com/cedricmarcelino/banking-app-project',
            deployment: 'https://cedricmarcelino.github.io/banking-app-project/',
            image: bankImage.src
        }
    ]
    return (
        <Box className={styles.projectsContainer}>
            {projects.map((project, value) => {
                return (
                    <Box className={styles.projectContainer} key={value} sx={{backgroundImage: `url(${project.image})`}}>
                        <Box>
                            <Typography className={`${styles.projectTitle} ${roboto900.variable}`}>
                                {project.title}
                            </Typography>
                            <Typography className={`${styles.techTitle} ${roboto700.variable}`}>
                                Techs used:
                            </Typography>
                            <Box className={styles.techContainer}>
                                {project.techs.map((tech, value) => {
                                    return(
                                        <Typography className={`${styles.tech} ${roboto400.variable}`} key={`${value}-tech`}>
                                            {tech}
                                        </Typography>
                                    )
                                })}
                            </Box>
                        </Box>
                        <Box className={styles.buttonsContainer}>
                            <Button variant='contained' className={styles.button}>
                                <Typography className={`${styles.buttonText}  ${roboto400.variable}`} onClick={() => {handleClick(project.repo)}}>
                                    Repo
                                </Typography>
                            </Button>
                            <Button variant='contained' className={styles.button}>
                                <Typography className={`${styles.buttonText}  ${roboto400.variable}`} onClick={() => {handleClick(project.deployment)}}>
                                    Live
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                )
            })}
        </Box>
    )
}