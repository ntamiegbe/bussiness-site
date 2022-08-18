import React from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div key={stat.id} className={`flex flex-1 justify-start items-center flex-row m-3`}>
          <h4 className="font-poppins font-semibold xs:text-[35px] text-[25px] xs:leading-[50px] leading-[40px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-white text-gradient uppercase ml-3">{stat.title}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
