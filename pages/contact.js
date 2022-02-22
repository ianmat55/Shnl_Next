import styles from '../styles/Contact.module.css'
import profilePic from '../public/assets/desktop_images/about.jpg'
import Image from 'next/image'

const Header = () => {
	return (
		<div className={styles.bioDiv}>
			<h1 className={styles.contactTitle}> HOWZIT </h1>
			<div id={styles.titleImage}>
				<Image src={profilePic} layout='responsive' priority />
			</div>
		</div>
	)
};

// const Body = () => {
// 	return (
// 		<section id={styles.about}>
// 			<h3 id={styles.aboutTitle}> About Me </h3>
// 			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
// 		</section>
// 	)
// }

const Form = () => {
	return (
		<>
			<form name="contact" method="POST" data-netlify="true">
				<div className={styles.formDiv}>
					<div className={styles.formElement}>
						<label for='name'> Name </label> 
						<input type="text" name="name" />  
					</div>
					<div className={styles.formElement}>
						<label for='email'> Email </label>
						<input type="text" name="email" />
					</div>
				</div>
				<div className={styles.formDiv}>
					<div className={styles.formElement}>
						<label for='type'> Type </label>
						<select name='type text-center'>
							<option value="Wedding">Wedding</option>
							<option value="Commercial">Commercial</option>
							<option value="Lifestyle">Lifestyle</option>
							<option selected value="General">General</option>
						</select>
					</div>
					<div className={styles.formElement}>
						<label for='insta'> Insta Handle (if applicable) </label>
						<input type='text' name='insta' />
					</div>
				</div>
				<div className={styles.formElement}>
					<label for='wedding-location'> Wedding Loation (if applicable) </label> 
					<input type='text' name='wedding-location' /> 
				</div>
				<div className={styles.formElement}>
					<label for='message'> Message </label> 
					<textarea name="message"></textarea>
				</div>
				<button type="submit">Send</button>
			</form>
		</>
	)
}

export default function Contact() {
	return (
		<div className='content'>
			<div id={styles.aboutContainer}> 
			    <Header />
		        {/* <Body /> */}
			</div>
			<Form />
		</div>
	)
}