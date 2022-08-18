import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Card = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find exciting credit card <br className="sm:block hidden" /> deals
          easily
        </h2>
        <p className={`${styles.paragraph} max-w-[450px] mt-5`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
          nulla aspernatur quis, delectus laboriosam aliquid quaerat ea deserunt
          ex consectetur, dicta vel.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default Card;
