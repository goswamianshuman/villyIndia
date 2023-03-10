import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <p className="success-message">
      Your Message has been successfully sent. I will contact you soon.
    </p>
  );
};
function FormStyle({ props }) {
  const [result, showresult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bvsegu3",
        "template_60iu81y",
        e.target,
        "user_bwSFJf6mNkd3G77UGBDxw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showresult(true);
  };

  setTimeout(() => {
    showresult(false);
  }, 5000);

  return (
    <div className="form-wrapper">
      <form action="" onSubmit={sendEmail}>
        <div className="rn-form-group">
          <input type="text" name="fullname" placeholder="Your Name" required />
        </div>

        <div className="rn-form-group">
          <input type="email" name="email" placeholder="Your Email" required />
        </div>

        <div className="rn-form-group">
          <input type="text" name="phone" placeholder="Phone Number" required />
        </div>

        <div className="rn-form-group">
          <input type="text" name="subject" placeholder="Subject" required />
        </div>

        <div className="rn-form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <div className="rn-form-group">
          <button
            className="btn-default btn-normal size-sm"
            type="submit"
            value="submit"
            name="submit"
            id="mc-embedded-subscribe"
          >
            Submit Now
          </button>
        </div>

        <div className="rn-form-group">{result ? <Result /> : null}</div>
      </form>
    </div>
  );
}
export default FormStyle;
