import React from "react";
import style from "./Service.module.css";
const Service = () => {
  return (
    <div className={style.service}>
      <header>
        <div className={style.service_main_subHead}>
          <center>
            <strong>services we deliver</strong>
          </center>
        </div>
        <div className={style.service_main_head}>
          <center>
            <h2>
              Preparing for your success, we provide truly prominent IT
              solutions.
            </h2>
          </center>
        </div>
      </header>
      <footer>
        <div
          className={style.service_grid}
          style={{ backgroundColor: "#e7f0f7" }}
        >
          <div>
            <img
              src="https://woxro.com/public/assets/png/services/webdesigning.png"
              alt="web1"
              className={style.service_img}
            />
          </div>
          <div>
            <p>Web Designing</p>
          </div>
          <div>
            <p>
              We create impressive interfaces. Usability + user experience are
              created based on a study of preferences and user behavior, using
              the latest web design trends, our experience, and achievements.
            </p>
          </div>
        </div>
        <div
          className={style.service_grid}
          style={{ backgroundColor: "#f6f5f3" }}
        >
          <div>
            {" "}
            <img
              src="https://woxro.com/public/assets/png/services/webapplication.png"
              alt="web2nd"
              className={style.service_img}
            />
          </div>
          <div>
            <p>Web Application</p>
          </div>
          <div>
            <p>
              We have completed projects in full-cycle web applications
              including CRM, HRM, and project management solutions. Look no
              further if you are in search of a professional partner who can
              develop stunning web applications.
            </p>
          </div>
        </div>
        <div
          className={style.service_grid}
          style={{ backgroundColor: "#f6f5f3" }}
        >
          <div>
            <img
              src="https://woxro.com/public/assets/png/services/mobileappdevelopment.png"
              alt="web3rd"
              className={style.service_img}
            />
          </div>
          <div>
            <p>Mobile App Development</p>
          </div>
          <div>
            <p>
              We develop high-quality and effective applications for your
              business. Our expertise and knowledge help us create reliable
              mobile applications for iOS and Android and cross-platform
              solutions.
            </p>
          </div>
        </div>
        <div
          className={style.service_grid}
          style={{ backgroundColor: "#fcf0e4" }}
        >
          <div>
            <img
              src="	https://woxro.com/public/assets/png/services/ecommercedevelopment.png"
              alt="web4th"
              className={style.service_img}
            />
          </div>
          <div>
            <p>Ecommerce Development</p>
          </div>
          <div>
            <p>
              For some of you, our involvement as an eCommerce development and
              consulting partner will mean a powerful business launch with the
              right technology stack. For others – a possibility to give their
              business a fresh start.
            </p>
          </div>
        </div>
        <div
          className={style.service_grid}
          style={{ backgroundColor: "#f5f6f8" }}
        >
          <div>
            <img
              src="https://woxro.com/public/assets/png/services/digitalmarketing.png"
              alt="web5th"
              className={style.service_img}
            />
          </div>
          <div>
            <p>Digital Marketing</p>
          </div>
          <div>
            <p>
              We bring together expertise in brand marketing and sustainability
              to design and implement ideas in branding. We also bring brand
              purpose to life by communicating great stories. Now Maximize your
              online visibility.
            </p>
          </div>
        </div>
        <div
          className={style.service_grid}
          style={{ backgroundColor: "#effbfb" }}
        >
          <div>
            <img
              src="https://woxro.com/public/assets/png/services/graphic.png"
              alt="web6th"
              className={style.service_img}
            />
          </div>
          <div>
            <p>Graphic Designing</p>
          </div>
          <div>
            <p>
              We build sustainable, brands by connecting your product and
              message with audiences that would want to get your and or
              services. We nurture ideas to transform ands through creativity
              focussed on growth.{" "}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Service;
