import React from "react";
import style from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={style.homePage}>
      <div className={style.head}>
        <h1>
          Kerala's Leading We <br />
          Design Company
        </h1>
      </div>
      <div className={style.foot}>
        <h3>
          Global Web Designing Company That Provides Full-cycle Software
          Development Services, E- <br /> commerce & Mobile App Development
          Services.
        </h3>
      </div>
    </div>
  );
};

export default HomePage;
