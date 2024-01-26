import { Box, Button, Typography } from '@mui/material'
import styles from './about.module.css'
import { Roboto, League_Spartan } from 'next/font/google'
import { useRouter } from 'next/router'
import { ROUTE } from '@/constants/enum'

const roboto400 = Roboto({
  variable: '--font-roboto',
  weight: '400',
  style: 'normal',
  subsets: ["latin"]
})

const spartan700 = League_Spartan({
  variable: '--font-spartan',
  weight: '700',
  style: 'normal',
  subsets: ["latin"]
})

export default function About() {
    const router = useRouter()

    const handleNavigate = (route: ROUTE) => {
      router.push(route);
    }

    return (
        <Box className={styles.aboutContainer}>
            <Box className={styles.backgroundContainer}>
                <Typography className={`${styles.backgroundTitle} ${spartan700.variable}`}>
                    My Background
                </Typography>
                <Box className={styles.backgroundContentContainer}>
                    <Typography className={`${styles.backgroundContent} ${roboto400.variable}`}>
                        My journey into being a web developer has been a roller coaster ride, so buckle up and enjoy the ride! I finished high school with average remarks, nothing special.
                        In college, I was accepted in a famous state university in the Philippines, Polytechnic University of the Philippines. Growing up I excel in Math so
                        everyone kept on telling me to pursue an engineering course in college, so I did.
                    </Typography>
                    <Typography className={`${styles.backgroundContent} ${roboto400.variable}`}>
                        I enrolled for a bachelor&apos;s degree in Electronics and Communications Engineering, the first year was okay, but when my major classes came in on my second year,
                        I realized that it was not meant for me. However, we were taught some basic programming language in our first year, and I loved it! So I decided to transfer to a 
                        different university and enrolled for a bachelor&apos;s degree in Computer Science.
                    </Typography>
                    <Typography className={`${styles.backgroundContent} ${roboto400.variable}`}>
                        I really enjoyed any class that is related to programming, however I didn&apos;t quite enjoy minor classes like Foreign Language and Psychology, basically anything 
                        not related to programming. So I kind of got bored and gotten into selling E-Cigarette/Vape products. I was earning decent money while I was selling these 
                        products so I stopped going to school and did it full time.
                    </Typography>
                    <Typography className={`${styles.backgroundContent} ${roboto400.variable}`}>
                        I was doing financially well and I could&apos;ve just stuck with that business, however after a year or two, I realized that it isn&apos;t something I wanted to do for the rest 
                        of my life. So I decided to find another job that would hire me despite not having a bachelor degree. I got hired in a company called Furbo as a customer service representative, 
                        I lasted there for 2 years and I must say that I really did enjoy working there. But then again, I realized that it is not something I would want to do for the rest of my life.
                    </Typography>
                    <Typography className={`${styles.backgroundContent} ${roboto400.variable}`}>
                        So I decided to study programming again, however this time, I did it on my own. I self-studied web development until I landed a full-time job at HCL Technologies 
                        as a junior software engineer.
                    </Typography>
                    <Typography className={`${styles.backgroundContent} ${roboto400.variable}`}>
                        I felt so lucky to be given an opportunity to pursue my passion as a web developer despite not having a bachelor degree in related fields, so I always give me 100% effort in 
                        all of the tasks given to me. After 2 years of being employed as a junior software engineer at HCL Technologies, I was promoted to a senior position and was given the highest rating attainable 
                        by a developer. I guess this shows how dedicated I am when I am doing something I love.
                    </Typography>
                    <Typography className={`${styles.backgroundContent} ${roboto400.variable}`}>
                        So, that is my story on how I became a web developer. I hope you enjoyed reading my journey!
                    </Typography>
                </Box>
            </Box>
            <Box className={styles.hobbiesContainer}>
                <Typography className={`${styles.hobbiesTitle} ${spartan700.variable}`}>
                    My Hobbies and Interests
                </Typography>
                <Box className={styles.hobbiesContentContainer}>
                    <Typography className={`${styles.hobbiesContent} ${roboto400.variable}`}>
                        One of my favorite things to do is play video games! Especially games that are under the MMORPG genre. I just enjoy the challenge it gives to grind out certain skills and levels while being able 
                        to still enjoy the game with other people.
                    </Typography>
                    <Typography className={`${styles.hobbiesContent} ${roboto400.variable}`}>
                        I enjoy spending the night out with friends and go to a night club to have some fun and enjoy our lives! I want to be as social as I can, I find it amusing learning things from other people&apos;s 
                        experiences in life.
                    </Typography>
                    <Typography className={`${styles.hobbiesContent} ${roboto400.variable}`}>
                        I also enjoy listening to podcasts that talks about anything related to conspiracy theories and our universe. I appreciate that I learn a lot of interesting things by listening to podcasts, so I just 
                        play it in the background whenever I am playing video games or doing my tasks at work.
                    </Typography>
                    <Typography className={`${styles.hobbiesContent} ${roboto400.variable}`}>
                        These are just some of my hobbies and interests so I hope you were able to relate in some of them!
                    </Typography>
                </Box>
            </Box>
            <Button variant='contained' className={styles.button} onClick={() => {handleNavigate(ROUTE.CONTACT)}}>
                <Typography className={`${styles.buttonText} ${roboto400.variable}`}>
                    Contact Me
                </Typography>
            </Button>
        </Box>
    )
}