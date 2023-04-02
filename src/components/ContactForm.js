import React from "react";
import { sendForm } from "@emailjs/browser";

export default function ContactForm() {
  const [toSend, setToSend] = React.useState({
    from_name: "",
    message: "",
    from_email: "",
  });
  const [emailSuccess, setEmailSuccess] = React.useState(false);
  const [emailFail, setEmailFail] = React.useState(false);
  const form = React.useRef();
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    sendForm(
      "service_10b1z59",
      "template_ld2q2j9",
      form.current,
      "EOQEGGgqwdDnJBH77"
    )
      .then((response) => {
        setEmailSuccess(true);
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        setEmailFail(true);
        console.log("FAILED...", err);
      });
  };
  return (
    <div className="contact-form">
      <h3>Or maybe now? Feel free to send me a message here!</h3>
      <form onSubmit={sendEmail} ref={form}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="from_name"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <label htmlFor="email">E-mail address</label>
        <input
          type="email"
          id="email"
          name="from_email"
          value={toSend.from_email}
          onChange={handleChange}
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          value={toSend.message}
          onChange={handleChange}
        />
        <input type="submit" value="Send" />
      </form>
      <p
        className="emailResult"
        style={{ display: emailSuccess ? "block" : "none" }}
      >
        Message sent!
      </p>
      <p
        className="emailResult"
        style={{ display: emailFail ? "block" : "none" }}
      >
        Sending failed...
      </p>
    </div>
  );
}
