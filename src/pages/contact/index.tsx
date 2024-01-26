import { Box, Button, TextField, Typography } from '@mui/material'
import styles from './contact.module.css'
import { League_Spartan, Roboto } from 'next/font/google'

const spartan700 = League_Spartan({
  variable: '--font-spartan',
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

const handleSendMessage = () => {

}

export default function Contact() {
    return (
        <Box className={`${styles.contactContainer} ${spartan700.variable} ${roboto400.variable}`}>
            <Typography className={`${styles.contactTitle}`}>
                Contact Me
            </Typography>
            <Box className={styles.nameAndEmailContainer}>
                <TextField
                    id='message-name'
                    label='Name'
                    variant='standard'
                    className={styles.nameField}
                    placeholder='Your Name'
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    id='message-email'
                    label='Email'
                    variant='standard'
                    className={styles.emailField}
                    placeholder='email@example.com'
                    InputLabelProps={{ shrink: true }}
                />
            </Box>
            <TextField
                id='message-content'
                label='Message'
                variant='standard'
                multiline 
                maxRows={10}
                className={styles.messageField}
                placeholder='Hello, my name is ...'
                InputLabelProps={{ shrink: true }}
            />
            <Button variant='contained' className={styles.button} onClick={handleSendMessage}>
                <Typography className={styles.buttonText}>
                    Send Message
                </Typography>
            </Button>
        </Box>
    )
}