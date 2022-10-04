import styles from "../../styles/Contact.module.css";
// test background images
import aboutImage from "../../public/assets/desktop_images/about.jpg";
import weddingBackground from "../../public/assets/test_images/wedding/wedding6.jpg";
import commercialBackground from "../../public/assets/test_images/lifestyle/header1.jpeg";
import lifestyleBackground from "../../public/assets/test_images/lifestyle/header2.jpeg";
import { StaticImageData } from "next/image";
import { useState } from "react";

interface formInfo {
  step: number;
  category: string;
  name: string;
  validated: boolean;
  background: StaticImageData;
}

export default function Contact() {
  const [step, setSet] = useState(1);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [validated, setValidated] = useState(false);

  return (
    <div className="content">
      {/* Listen for enter to navigate between form sections
			Change background based on category selected
			Change some input options based on category
			Add error messages for missing info
			Call function to validate and update on every next button click or 'enter' */}
      <form name="contact" method="POST">
        <div className={styles.formDiv} id="step1">
          <div>
            <p> Add image here </p>
          </div>
          <div>
            <p> {step} </p>
            <h1> Interested in a photoshoot? </h1>
          </div>
          <div className={styles.formElement}>
            <label htmlFor="category"> Select a category </label>
            <select name="cars" id="cars" form="carform">
              <option value="wedding">Wedding</option>
              <option value="business">Business</option>
              <option value="general">General</option>
            </select>
            <button> Next </button>
          </div>
        </div>

        <div className={styles.formDiv} id="step2">
          <div>
            <p> {step} </p>
            <label htmlFor="name"> What is your Name? </label>
          </div>
          <div className={styles.formElement}>
            <input type="text" name="name" />
          </div>
          <button> Next </button>
        </div>

        <div className={styles.formDiv} id="step3">
          <div>
            <p> {step} </p>
            <h1> Aloha {name}, how can I reach you? </h1>
          </div>
          <div className={styles.formElement}>
            <label htmlFor="email"> Email </label>
            <input type="text" name="email" />
          </div>
          <div className={styles.formElement}>
            <label htmlFor="phone"> Phone number </label>
            <input type="text" name="email" />
          </div>
          <div className={styles.formElement}>
            <label htmlFor="insta"> Insta Handle (if applicable) </label>
            <input type="text" name="insta" />
          </div>
        </div>

        <div className={styles.formDiv} id="step4">
          <div>
            <p> {step} </p>
            <label htmlFor="name"> When is your event? </label>
          </div>
          <div className={styles.formElement}>
            <label htmlFor="general-date"> Photoshoot Date </label>
            <input style={{ width: "100%" }} type="date" name="general-date" />
          </div>
        </div>

        <div className={styles.formDiv}>
          <div>
            <p> {step} </p>
            <label htmlFor="name">
              {" "}
              Anything else you would like me to know?{" "}
            </label>
          </div>
          <div className={styles.formElement}>
            <label htmlFor="message"> Message </label>
            <textarea name="message"></textarea>
          </div>
          <button id={styles.submit} type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
