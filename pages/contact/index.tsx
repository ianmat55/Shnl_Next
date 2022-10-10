import styles from "../../styles/Contact.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
// test background images
import aboutImage from "../../public/assets/desktop_images/about.jpg";
import weddingBackground from "../../public/assets/test_images/wedding/wedding6.jpg";
import commercialBackground from "../../public/assets/test_images/lifestyle/header1.jpeg";
import lifestyleBackground from "../../public/assets/test_images/lifestyle/header2.jpeg";
import { StaticImageData } from "next/image";
import { useState } from "react";

interface IFormInput {
  category: string;
  fullName: string;
  phoneNumber: any;
  email: string;
  insta?: string;
  eventDate?: any;
  message?: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const [step, setStep] = useState(1);
  const [validated, setValidated] = useState(false);

  const handleNext = () => {
    const form = document.getElementById("form");
    form!.style.transform = `translateY(-${step * 100}vh)`;
    form!.style.transition = "transform .8s ease-in-out";
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
    const form = document.getElementById("form");
    form!.style.transform = `translateY(-${step * 100}vh)`;
    form!.style.transition = "transform .8s ease-in-out";
  };

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
            <div>
              <p> Add image here </p>
            </div>
            <div>
              <p> 1 </p>
              <h1> Interested in a photoshoot? </h1>
            </div>
            <div className={styles.formElement}>
              <label htmlFor="category"> Select a category </label>
              <label htmlFor="wedding"> Wedding </label>
              <input
                {...(register("category"), { required: false })}
                type="radio"
                name="category"
                value="wedding"
              />
              <label htmlFor="business"> Business </label>
              <input
                {...(register("category"), { required: false })}
                type="radio"
                name="category"
                value="business"
              />
              <label htmlFor="general"> General </label>
              <input
                {...(register("category"), { required: false })}
                type="radio"
                name="category"
                value="general"
              />
              <button type="button" onClick={handleNext}>
                {" "}
                Next{" "}
              </button>
            </div>
          </div>

          <div className={styles.formDiv} id="step2">
            <button onClick={handleBack}> back </button>
            <div>
              <p> 2 </p>
              <label htmlFor="name"> What is your Name? </label>
            </div>
            <div className={styles.formElement}>
              <input {...register("fullName")} type="text" name="name" />
            </div>
            <button type="button" onClick={handleNext}>
              {" "}
              Next{" "}
            </button>
          </div>

          <div className={styles.formDiv} id="step3">
            <button onClick={handleBack}> back </button>
            <div>
              <p> 3 </p>
              <h1> Aloha insert name, how can I reach you? </h1>
            </div>
            <div className={styles.formElement}>
              <label htmlFor="email"> Email </label>
              <input {...register("email")} type="text" name="email" />
            </div>
            <div className={styles.formElement}>
              <label htmlFor="phone"> Phone number </label>
              <input {...register("phoneNumber")} type="text" name="email" />
            </div>
            <div className={styles.formElement}>
              <label htmlFor="insta"> Insta Handle (if applicable) </label>
              <input {...register("insta")} type="text" name="insta" />
            </div>
            <button type="button" onClick={handleNext}>
              {" "}
              Next{" "}
            </button>
          </div>

          <div className={styles.formDiv} id="step4">
            <button onClick={handleBack}> back </button>
            <div>
              <p> 4 </p>
              <label htmlFor="name"> Save the date? </label>
            </div>
            <div className={styles.formElement}>
              <label htmlFor="general-date"> Photoshoot Date </label>
              <input
                {...register("eventDate")}
                style={{ width: "100%" }}
                type="date"
                name="general-date"
              />
            </div>
            <button type="button" onClick={handleNext}>
              {" "}
              Next{" "}
            </button>
          </div>

          <div className={styles.formDiv}>
            <button onClick={handleBack}> back </button>
            <div>
              <p> 5 </p>
              <label htmlFor="name">
                {" "}
                Anything else you would like me to know?{" "}
              </label>
            </div>
            <div className={styles.formElement}>
              <label htmlFor="message"> Message </label>
              <textarea {...register("message")} name="message"></textarea>
            </div>
            <button id={styles.submit} type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
