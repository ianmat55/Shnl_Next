import styles from "../../styles/Commercial.module.css";
import localHeader from "../../public/assets/commercial.jpg";
import Header from "components/header";

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
  return (
    <div className="content">
      {/* <div className={styles.localHeader}>
				<Image src={localHeader} />
			</div> */}
      <Header title="LOCAL BUSINESSES" image={localHeader} />
      <Body />
    </div>
  );
}
