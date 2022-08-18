import React from "react";
import styles from "../style";
import Button from "./Button";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow`}
    >
      <div className="flex flex-1 flex-col">
        <h2 className={`${styles.heading2}`}>Try our services now!!</h2>
        <p className={`${styles.paragraph} max-w-[450px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet{" "}
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  );
};

export default CTA;
