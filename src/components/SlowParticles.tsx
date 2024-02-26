import React from "react";
import SPStyle from "src/styles/animations/SlowParticles.module.scss";

const SlowParticles = () => {
  return (
    <div className={SPStyle.slow_particle_container}>
      <div className={SPStyle.circle_container}>
        <div className={SPStyle.circle} />
      </div>
      <div className={SPStyle.circle_container}>
        <div className={SPStyle.circle} />
      </div>
      <div className={SPStyle.circle_container}>
        <div className={SPStyle.circle} />
      </div>
      <div className={SPStyle.circle_container}>
        <div className={SPStyle.circle} />
      </div>
      <div className={SPStyle.circle_container}>
        <div className={SPStyle.circle} />
      </div>
      <div className={SPStyle.circle_container}>
        <div className={SPStyle.circle} />
      </div>
      <div className={SPStyle.circle_container}>
        <div className={SPStyle.circle} />
      </div>
    </div>
  );
};

export default SlowParticles;
