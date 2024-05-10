import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/3d.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>High Performance 3D applications</h3>
              <p>
                I have extensive experience using C# and Unity to create fluid and engaging interactive experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/website.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Systems Integrator</h3>
              <p>
                I have experience integrating a wide variety of software frameworks (Node.js, Meta SDK, Blender, etc.) into cohesive final products.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/avatar.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Problem Solver</h3>
              <p>
                I possess a robust toolbox of problem solving skills drawing from dynamic positions in IT, math education and aircraft maintenance for the Air Force Reserve.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/growth.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Team Player</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
