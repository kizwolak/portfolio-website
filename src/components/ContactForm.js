import React from "react";
import { sendForm } from "@emailjs/browser";
import "../contactform.scss";

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
      .then(() => {
        setEmailSuccess(true);
      })
      .catch(() => {
        setEmailFail(true);
      });
  };
  return (
    <div className="contact-form">
      <p className="contact-desc">
        Get in touch if you'd like to work together or just say hello.
      </p>
      <form onSubmit={sendEmail} ref={form}>
        <label htmlFor="name" className="mono">name</label>
        <input
          type="text"
          id="name"
          name="from_name"
          value={toSend.from_name}
          required
          onChange={handleChange}
        />
        <label htmlFor="email" className="mono">email</label>
        <input
          type="email"
          id="email"
          name="from_email"
          value={toSend.from_email}
          required
          onChange={handleChange}
          minLength={6}
        />
        <label htmlFor="message" className="mono">message</label>
        <textarea
          name="message"
          id="message"
          value={toSend.message}
          required
          onChange={handleChange}
        />
        <button type="submit">Send message</button>
      </form>
      {emailSuccess && <p className="email-result">Message sent.</p>}
      {emailFail && <p className="email-result">Sending failed - try again.</p>}
    </div>
  );
}
