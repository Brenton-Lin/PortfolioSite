import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Brenton</h1>
          <p className={styles.description}>
            I'm a software developer with 2 years of experience building and supporting multiplayer, virtual-reality training software in the Unity game engine.  
          </p>
          <p className={styles.description}>
            I love thinking up creative solutions to functional problems. Also a general tech/fantasy nerd, ask me what I'm currently reading when you reach out!
          </p>
        <a href="mailto:brenton.c.lin@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/BrentonHero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
