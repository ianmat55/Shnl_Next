import styles from "../../styles/Contact.module.css";
import { useForm } from "react-hook-form";
import Image from "next/image";
// test background images
import aboutImage from "../../public/assets/desktop_images/about.jpg";
import weddingRad from "../../public/assets/test_images/wedding/wedding6.jpg";
import commercialRad from "../../public/assets/test_images/lifestyle/header1.jpeg";
import lifestyleRad from "../../public/assets/test_images/lifestyle/header2.jpeg";
import { useState } from "react";

interface IFormInput {
  category: any;
  fullName: any;
  phoneNumber: any;
  email: any;
  insta?: any;
  eventDate?: any;
  message?: any;
}

export default function Contact() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [step, setStep] = useState(1);
  // const [validated, setValidated] = useState(false);

  const handleNext = () => {
    const form = document.getElementById("form");
    form!.style.transform = `translateY(-${step * 100}vh)`;
    form!.style.transition = "transform .8s ease-in-out";
    setStep(step + 1);
  };

  // const handleBack = () => {
  //   setStep(step - 1);
  //   const form = document.getElementById("form");
  //   form!.style.transform = `translateY(-${step * 100}vh)`;
  //   form!.style.transition = "transform .8s ease-in-out";
  // };

  const onFormSubmit = (data: IFormInput) => console.log(data);
  const onErrors = (errors: any) => console.error(errors);

  return (
    <div className="content">
      <div className={styles.formContainer}>
        {/* Listen for enter to navigate between form sections
			Change background based on category selected
			Change some input options based on category
			Add error messages for missing info
			Call function to validate and update on every next button click or 'enter' */}
        <form
          id="form"
          name="contact"
          method="POST"
          onSubmit={handleSubmit(onFormSubmit, onErrors)}
        >
          <div className={styles.formDiv} id="step1">
            <h1> Howzit, </h1>
            {/* <div id={styles.contactHeader}>
              <Image src={aboutImage} layout="fill" />
            </div> */}
            <div className={styles.formStep}>
              <p> 1 </p>
              <div>
                <h1> Interested in a photoshoot? </h1>
                <p> Select a Category </p>
              </div>
            </div>
            <div className={styles.formElement}>
              <div className={styles.category_choices}>
                <label className={styles.radioLabel} htmlFor="wedding">
                  <div className={styles.radioImg}>
                    <Image src={weddingRad} layout="fill" alt="Wedding" />
                  </div>
                  <i>Wedding</i>
                  <input
                    {...(register("category"), { required: true })}
                    type="radio"
                    name="category"
                    value="wedding"
                    className={styles.radioInput}
                  />
                </label>
                <label className={styles.radioLabel} htmlFor="business">
                  <div className={styles.radioImg}>
                    <Image src={commercialRad} layout="fill" alt="Business" />
                  </div>
                  <i>Business</i>
                  <input
                    {...(register("category"), { required: true })}
                    type="radio"
                    name="category"
                    value="business"
                    className={styles.radioInput}
                  />
                </label>
                <label className={styles.radioLabel} htmlFor="general">
                  <div className={styles.radioImg}>
                    <Image src={lifestyleRad} layout="fill" alt="General" />
                  </div>
                  <i>General</i>
                  <input
                    {...(register("category"), { required: true })}
                    type="radio"
                    name="category"
                    value="general"
                    className={styles.radioInput}
                  />
                </label>
              </div>
              <button
                className={styles.next_btn}
                type="button"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>

          <div className={styles.formDiv} id="step2">
            {/* <button className={styles.back_button} onClick={handleBack}>
              {" "}
              back{" "}
            </button> */}
            <div className={styles.formStep}>
              <p> 2 </p>
              <h1> What is your Name? </h1>
            </div>
            <div className={styles.formElement}>
              <input
                {...register("fullName")}
                type="text"
                name="fullName"
                className={styles.input}
              />
            </div>
            <button
              className={styles.next_btn}
              type="button"
              onClick={handleNext}
            >
              Next
            </button>
          </div>

          <div className={styles.formDiv} id="step3">
            {/* <button className={styles.back_button} onClick={handleBack}>
              {" "}
              back{" "}
            </button> */}
            <div className={styles.formStep}>
              <p> 3 </p>
              <h1> Aloha insert name, how can I reach you? </h1>
            </div>
            <div className={styles.formElement}>
              <label htmlFor="email"> Email </label>
              <input
                {...register("email")}
                type="text"
                name="email"
                className={styles.input}
              />
            </div>
            <div className={styles.formElement}>
              <label htmlFor="phone"> Phone number </label>
              <input
                {...register("phoneNumber")}
                type="text"
                name="phoneNumber"
                className={styles.input}
              />
            </div>
            <div className={styles.formElement}>
              <label htmlFor="insta"> Insta Handle (if applicable) </label>
              <input
                {...register("insta")}
                type="text"
                name="insta"
                className={styles.input}
              />
            </div>
            <button
              className={styles.next_btn}
              type="button"
              onClick={handleNext}
            >
              Next
            </button>
          </div>

          <div className={styles.formDiv} id="step4">
            {/* <button className={styles.back_button} onClick={handleBack}>
              {" "}
              back{" "}
            </button> */}
            <div className={styles.formStep}>
              <p> 4 </p>
              <h1> Save the date? </h1>
            </div>
            <div className={styles.formElement}>
              <label htmlFor="general-date"> Photoshoot Date </label>
              <input
                {...register("eventDate")}
                style={{ width: "100%" }}
                type="date"
                name="eventDate"
                className={styles.input}
              />
            </div>
            <button
              className={styles.next_btn}
              type="button"
              onClick={handleNext}
            >
              Next
            </button>
          </div>

          <div className={styles.formDiv}>
            {/* <button className={styles.back_button} onClick={handleBack}>
              {" "}
              back{" "}
            </button> */}
            <div className={styles.formStep}>
              <p> 5 </p>
              <h1>Anything else you would like me to know?</h1>
            </div>
            <div className={styles.formElement}>
              <label htmlFor="message"> Message </label>
              <textarea {...register("message")} name="message"></textarea>
            </div>
            <button
              className={styles.next_btn}
              id={styles.submit}
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
