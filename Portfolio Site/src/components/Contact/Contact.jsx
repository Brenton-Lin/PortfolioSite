import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:brenton.c.lin@gmail.com">brenton.c.lin@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/brenton-lin-61570b11a/">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Brenton-Lin">GitHub</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/drawing.png")} alt="Drawing icon" />
          <a href="https://www.flaticon.com/free-icons/3d" title="3d icons">3d icons created by xnimrodx - Flaticon</a>
        </li>
      </ul>
    </footer>
  );
};
