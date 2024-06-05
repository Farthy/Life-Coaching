import React from "react";
import "../../styles/start.css";
import trainerImg from "../../assets/img/trainer.png";

const Start = () => {
  return (
    <section>
      <div className="container">
        <div className="start__wrapper">
          <div className="start__img">
            <img src={trainerImg} alt="" />
          </div>
          <div className="start__content">
            <h2 className="section__title"> Ready to make a change?</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate quis vero exercitationem iste, voluptatibus suscipit
              ipsa totam sequi commodi officiis est provident quae, optio dolore
              ad. Odio minima est repudiandae.
            </p>
            <button className="register__btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
