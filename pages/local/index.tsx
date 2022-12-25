import styles from "../../styles/Commercial.module.css";
import local_header from "../../public/assets/commercial.jpg";
import local_mobile from "../../public/assets/commercial_mobile.jpg";
import Header from "components/header";
import React from "react";
import { Size } from "shared/types";
import { useWindowSizeContext } from "utils/context";

const Body = () => {
  return (
    <div className={styles.bodyContainer}>
      {/* <h1 id={styles.catchline} className='text-2xl'> HELPING LOCAL <br /> BUSINESSES <br /> GROW </h1> */}
      <p className={styles.bodyText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{" "}
      </p>
    </div>
  );
};

export default function Commercial() {
  const windowSize: Size = useWindowSizeContext();
  const heroImage = windowSize!.width >= 650 ? local_header : local_mobile;
  return (
    <div className="content">
      {/* <div className={styles.localHeader}>
				<Image src={localHeader} />
			</div> */}
      <Header title="LOCAL BUSINESSES" image={heroImage} />
      <Body />
    </div>
  );
}
