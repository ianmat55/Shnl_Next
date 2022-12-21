import styles from "../../styles/Contact.module.css";
import React, { useForm } from "react-hook-form";
import Image from "next/image";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import weddingRad from "../../public/assets/wedding.jpg";
import commercialRad from "../../public/assets/commercial.jpg";
import lifestyleRad from "../../public/assets/film.jpg";
import { useState } from "react";
import { useWindowSizeContext } from "utils/context";
import { Size } from "shared/types";
import { useRouter } from "next/router";

interface IFormInputs {
  category: any;
  fullName: any;
  phoneNumber: any;
  email: any;
  insta?: any;
  eventDate?: any;
  message?: any;
}

export default function Contact() {
  const router = useRouter();

  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();
  const [step, setStep] = useState(0);
  // const [validated, setValidated] = useState(false);
  const windowSize: Size = useWindowSizeContext();
  const translateDistance = windowSize!.width >= 1000 ? 96 : 100;

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const onSubmit = () => {
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

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
          action="../api/send_email"
          onSubmit={() => onSubmit()}
        >
          <div
            style={{
              transform: `translateY(-${translateDistance * step}vh)`,
              transition: "transform .8s ease-in-out",
            }}
          >
            <div className={styles.formDiv} id="step1">
              <h1> Howzit, </h1>
              <div className={styles.formStep}>
                <div>
                  <h1> Interested in a photoshoot? </h1>
                  <p> Select a Category </p>
                </div>
              </div>
              <div className={styles.formElement}>
                <div className={styles.category_choices}>
                  <label className={styles.radioLabel} htmlFor="general">
                    <div className={styles.radioImg}>
                      <Image src={lifestyleRad} layout="fill" alt="General" />
                    </div>
                    <i>General</i>
                    <input
                      {...register("category")}
                      type="radio"
                      name="category"
                      value="general"
                      className={styles.radioInput}
                      required
                    />
                  </label>
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
                    <i>Commercial</i>
                    <input
                      {...register("category")}
                      type="radio"
                      name="category"
                      value="business"
                      className={styles.radioInput}
                      required
                    />
                  </label>
                </div>
                <div className={styles.next_container}>
                  <FontAwesomeIcon
                    icon={faRightToBracket}
                    className={styles.next_btn}
                    type="button"
                    onClick={handleNext}
                  />
                </div>
              </div>
            </div>

            <div className={styles.formDiv} id="step2">
              <p className={styles.back_button} onClick={handleBack}>
                back
              </p>
              <div className={styles.formStep}>
                <h1> What is your Name? </h1>
              </div>
              <div className={styles.formElement}>
                <input
                  {...register("fullName")}
                  type="text"
                  name="fullName"
                  className={styles.input}
                  required
                />
                {errors.fullName && <span>This field is required</span>}
                <label className={styles.input_label} htmlFor="fullName">
                  {" "}
                  Name{" "}
                </label>
              </div>
              <div className={styles.next_container}>
                <FontAwesomeIcon
                  icon={faRightToBracket}
                  className={styles.next_btn}
                  type="button"
                  onClick={handleNext}
                />
              </div>
            </div>

            <div className={styles.formDiv} id="step3">
              <p className={styles.back_button} onClick={handleBack}>
                back
              </p>
              <div className={styles.formStep}>
                <h1> Aloha insert name, how can I reach you? </h1>
              </div>
              <div className={styles.formElement}>
                <input
                  {...register("email")}
                  type="text"
                  name="email"
                  className={styles.input}
                  required
                />
                <label className={styles.input_label} htmlFor="email">
                  {" "}
                  Email{" "}
                </label>
                {errors.email && <span>This field is required</span>}
              </div>
              <div className={styles.formElement}>
                <input
                  {...register("phoneNumber")}
                  type="text"
                  name="phoneNumber"
                  className={styles.input}
                  required
                />
                <label className={styles.input_label} htmlFor="phone">
                  {" "}
                  Phone number{" "}
                </label>
                {errors.phoneNumber && <span>This field is required</span>}
              </div>
              <div className={styles.next_container}>
                <FontAwesomeIcon
                  icon={faRightToBracket}
                  className={styles.next_btn}
                  type="button"
                  onClick={handleNext}
                />
              </div>
            </div>

            <div className={styles.formDiv} id="step4">
              <p className={styles.back_button} onClick={handleBack}>
                back
              </p>
              <div className={styles.formStep}>
                <h1> Save the date? </h1>
              </div>
              <div className={styles.formElement}>
                <label className={styles.input_label} htmlFor="general-date">
                  {" "}
                  Photoshoot Date{" "}
                </label>
                <input
                  {...register("eventDate")}
                  style={{ width: "100%" }}
                  type="date"
                  name="eventDate"
                  className={`${styles.input}, ${styles.date_input}`}
                  required
                />
                {errors.eventDate && <span>This field is required</span>}
              </div>
              <div className={styles.next_container}>
                <FontAwesomeIcon
                  icon={faRightToBracket}
                  className={styles.next_btn}
                  type="button"
                  onClick={handleNext}
                />
              </div>
            </div>

            <div className={styles.formDiv}>
              <p className={styles.back_button} onClick={handleBack}>
                back
              </p>
              <div className={styles.formStep}>
                <h1>Anything else?</h1>
              </div>
              <div className={styles.formElement}>
                <textarea
                  className={styles.input}
                  {...register("message")}
                  name="message"
                ></textarea>
                <label className={styles.input_label} htmlFor="message">
                  {" "}
                  Message{" "}
                </label>
              </div>
              <button id={styles.submit} type="submit">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
