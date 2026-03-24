import emailjs from "emailjs-com"
import { useRef } from "react"

function Join() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_vjolr9g",
      "template_ibsgjvv",
      form.current,
      "tzIZpkU6eXU3CpSGm"
    ).then(
      () => {
        alert("Message sent successfully!")
      },
      () => {
        alert("Failed to send message.")
      }
    )

    e.target.reset()
  }

  return (
    <section id="join">
      <h2>Join Us</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="first_name" placeholder="First Name" required />
        <input type="text" name="last_name" placeholder="Last Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="course" placeholder="Course / Year" />
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default Join
