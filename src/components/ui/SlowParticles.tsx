import React from "react";
import SPStyle from "./SlowParticles.module.scss";

const SlowParticles = () => {
  const htmlParticles = [];

  for (let i = 0; i < 7; i++) {
    htmlParticles.push(
      <div className={SPStyle.circle_container} key={i}>
        <div className={SPStyle.circle} />
      </div>
    );
  }

  return <div className={SPStyle.slow_particle_container}>{htmlParticles}</div>;
};

export default SlowParticles;
