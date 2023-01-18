import styles from "../styles/navbar.module.css";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SocialIcons() {
  console.log("fuck");
  return (
    <ul className={styles.iconContainer}>
      <a href="https://www.instagram.com/shanellenahs/">
        <li className={styles.social_icon_wrapper} id={styles.instaIcon}>
          <FontAwesomeIcon
            className={styles.sIcon}
            icon={faInstagram}
            size="sm"
          />
          <div className={styles.handle_wrapper}>
            <p className={styles.handle}>shanellnahs</p>
          </div>
        </li>
      </a>
      {/* <li className={styles.social_icon_wrapper} id={styles.fbIcon}>
        <FontAwesomeIcon className={styles.sIcon} icon={faFacebook} size="sm" />
        <div className={styles.handle_wrapper}>
          <p className={styles.handle}>shanellnahs</p>
        </div>
      </li> */}
      <a href="mailto: abc@example.com">
        <li className={styles.social_icon_wrapper} id={styles.emailIcon}>
          <FontAwesomeIcon
            className={styles.sIcon}
            icon={faEnvelope}
            size="sm"
          />
          <div className={styles.handle_wrapper}>
            <p className={styles.handle}>shanellnahs</p>
          </div>
        </li>
      </a>
    </ul>
  );
}
