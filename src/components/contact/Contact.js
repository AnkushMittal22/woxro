import React from "react";
import style from "./Contact.module.css";
import { Si1001Tracklists } from "react-icons/si";
const Contact = () => {
  return (
    <div
      className={style.contact}
      style={{
        backgroundImage:
          'url("https://woxro.com/' + 'public/assets/png/woxroglobe.png")',
        backgroundRepeat: "no-repeat",
      }}
    >
      <header>
        <div className={style.contact_text}>
          <p>We offer all kinds of IT services that ensure your success</p>
        </div>
        <div className={style.contact_link} style={{ color: "white" }}>
          <a
            href="https://www.tidio.com/talk/awy0oqhfhhgorwbfeet8ywkbg4off9sl"
            target={"_blank"}
          >
            <span class="material-symbols-outlined">chat</span>Lets Talk
          </a>
          <a href="https://woxro.com/contactus" target={"_blank"}>
            <span class="material-symbols-outlined">phone_in_talk</span>
            Contact Us
          </a>
        </div>
      </header>
    </div>
  );
};

export default Contact;
