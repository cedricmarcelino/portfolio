import { Alert, Box, Button, Snackbar, TextField, Typography } from '@mui/material'
import styles from './contact.module.css'
import { League_Spartan, Roboto } from 'next/font/google'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

enum FORM_FIELDS {
    NAME = 'name',
    MESSAGE = 'message',
    EMAIL = 'email',
}

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

export default function Contact() {
    const [email, setEmail] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [snackbarMessage, setSnackbarMessage] = useState<string>('')
    const [isError, setIsError] = useState<boolean>(false)
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true)
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    const errorMessage = 'Your message was not sent. Please send me an email directly at cedricmarcelino1105@gmail.com.'
    const successMessage = `Your email was sent. I'll respond shortly.`

    const handleClose = () => {
        setIsOpen(false)
        setIsError(false)
        setSnackbarMessage('')
    }

    const handleError = () => {
        setIsError(true)
        setIsOpen(true)
        setSnackbarMessage(errorMessage)
    }

    const handleSuccess = () => {
        setName('')
        setEmail('')
        setMessage('')
        setIsError(false)
        setIsOpen(true)
        setSnackbarMessage(successMessage)
    }

    const handleSendMessage = async () => {
        console.log(process.env.EMAILJS_SERVICE_ID, 'process.env.EMAILJS_SERVICE_ID')
        console.log(process.env.EMAILJS_TEMPLATE_ID, 'process.env.EMAILJS_TEMPLATE_ID')
        console.log(process.env.EMAILJS_PUBLIC_KEY, 'process.env.EMAILJS_PUBLIC_KEY')
        handleClose()
        const emailJS = {
            service_id: process.env.EMAILJS_SERVICE_ID as string,
            template_id: process.env.EMAILJS_TEMPLATE_ID as string,
            user_id: process.env.EMAILJS_PUBLIC_KEY as string,
            template_params: {
                name,
                email,
                message
            }
        };
        try {
                emailjs.send(emailJS.service_id, emailJS.template_id, emailJS.template_params, emailJS.user_id).then((response) => {
                    if(response.status === 200){
                        handleSuccess()
                    } else {
                        handleError()
                        console.log(response)
                    }
                    }, (error) => {
                        handleError()
                        console.log(error)
                    })
        } catch(error) {
            handleError()
            console.log(error)
        }
        
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
        switch(field) {
            case FORM_FIELDS.NAME:
                setName(event.target.value)
                break;
            case FORM_FIELDS.EMAIL:
                if(event.target.value.match(emailRegex)){
                    setIsEmailValid(true)
                } else {
                    setIsEmailValid(false)
                }
                setEmail(event.target.value)
                break;
            case FORM_FIELDS.MESSAGE:
                setMessage(event.target.value)
                break;
        }
    }

    return (
        <Box className={`${styles.contactContainer} ${spartan700.variable} ${roboto400.variable}`}>
            <Typography className={`${styles.contactTitle}`}>
                Contact Me
            </Typography>
            <Box className={styles.nameAndEmailContainer}>
                <TextField
                    required
                    id='message-name'
                    label='Name'
                    variant='standard'
                    className={styles.nameField}
                    placeholder='Your Name'
                    InputLabelProps={{ shrink: true }}
                    onChange={(event) => handleChange(event, FORM_FIELDS.NAME)}
                    value={name}
                />
                <TextField
                    error={!isEmailValid}
                    required
                    helperText={isEmailValid ? '' : 'Please provide a valid email address.'}
                    id='message-email'
                    label='Email'
                    variant='standard'
                    className={styles.emailField}
                    placeholder='email@example.com'
                    InputLabelProps={{ shrink: true }}
                    onChange={(event) => handleChange(event, FORM_FIELDS.EMAIL)}
                    value={email}
                />
            </Box>
            <TextField
                required
                id='message-content'
                label='Message'
                variant='standard'
                multiline 
                maxRows={10}
                className={styles.messageField}
                placeholder='Hello, my name is ...'
                InputLabelProps={{ shrink: true }}
                onChange={(event) => handleChange(event, FORM_FIELDS.MESSAGE)}
                value={message}
            />
            <Button variant='contained' className={styles.button} onClick={handleSendMessage} disabled={!(name.length !== 0 && message.length !==0 && email.match(emailRegex))}>
                <Typography className={styles.buttonText}>
                    Send Message
                </Typography>
            </Button>
            <Snackbar
                open={isOpen}
                autoHideDuration={isError ? null : 6000}
                onClose={handleClose}
                className={styles.snackbar}
                TransitionProps={{
                  appear: false,
                }}
            >
                <Alert
                    onClose={handleClose}
                    severity={isError ? 'error' : 'success'}
                    variant="filled"
                >
                    <Typography className={styles.snackbarMessage}>
                        {snackbarMessage}
                    </Typography>
                </Alert>
            </Snackbar>
        </Box>
    )
}