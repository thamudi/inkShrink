import { createTransport } from 'nodemailer'

interface BodyData {
  name: string
  topic: string
  email: string
  message: string
}

function validateBodyData(body: BodyData): Boolean {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!body.name.trim()) {
    throw new Error('A Name is required!')
  }
  if (!body.topic.trim()) {
    throw new Error('A topic or a company name is required!')
  }
  if (!body.email.trim()) {
    throw new Error('An Email is required')
  }
  if (!emailRegex.test(body.email)) {
    throw new Error('The email is not correct!')
  }
  if (!body.message) {
    throw new Error('A Message is required!')
  }
  return true
}

function createNodeMailerTransport(config: any) {
  return createTransport({
    port: config.smtpPort || 465,
    host: config.smtpHost || 'smtp.gmail.com',
    auth: {
      user: config.smtpEmail || '',
      pass: config.smtpPass || '',
    },
    secure: true,
  })
}
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body: BodyData = await readBody(event)

  try {
    validateBodyData(body)
  } catch (error: any) {
    setResponseStatus(event, 400)
    return {
      type: 'info',
      message: error.message,
    }
  }

  try {
    const mailOptions = {
      from: body.email,
      to: config.mailTo,
      subject: `Message from ${body.email}`,
      text: `\n${body.message}.\n\n Email From: ${body.email} `,
    }
    const transporter = createNodeMailerTransport(config)
    await transporter.sendMail(mailOptions)
    return { type: 'success', message: 'Thank you! Your email has been sent!' }
  } catch (error: any) {
    console.log(error.message)
    setResponseStatus(event, 500)
    return {
      type: 'error',
      message: 'Something went wrong, please try again later',
    }
  }
})
