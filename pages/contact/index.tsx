import styles from '../../styles/Contact.module.css'
import Header from 'components/header'
import Image from 'next/image'
import contactHeader from '../../public/assets/test_images/lifestyle/header3.jpg'
import { BusinessForm, GeneralForm, WeddingForm } from 'components/forms'

// const Body = () => {
// 	return (
// 		<section id={styles.about}>
// 			<h3 id={styles.aboutTitle}> About Me </h3>
// 			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
// 		</section>
// 	)
// }

const changeSelected = (event: any) => {
	// wedding form items
	const wedding_tab = document.getElementById("wedding_tab")
	const wedding_form = document.getElementById("wedding_form_wrapper")

	// business form items
	const business_tab = document.getElementById("business_tab")
	const business_form = document.getElementById("business_form_wrapper")

	// general form items
	const general_tab = document.getElementById("general_tab")
	const general_form = document.getElementById("general_form_wrapper")

	const background = document.getElementsByClassName("form_background")

	// put items into array for easy filtering
	const formArray = [ {tab: wedding_tab, form: wedding_form}, 
						{tab: business_tab, form: business_form}, 
						{tab: general_tab, form: general_form} ]

	formArray.forEach((formObj: any) => {
		if (event.target == formObj.tab) {
			console.log(formObj)
			formObj.tab.classList = "selected"
			formObj.form.style.display = "block"
		} else {
			formObj.tab.classList = "not_selected"
			formObj.form.style.display = "none"
		}
	})
}

export default function Contact() {
	return (
		<div className='content'>
			<div id={styles.aboutContainer}> 
			    <Header title='HOWZIT' />
		        {/* <Body /> */}
			</div>
			<div className='form_background' id={styles.contact_portrait_container}>
				<div id={styles.forms}>
					<div id={styles.tab_list}>
						<a id="wedding_tab" className='selected' onClick={changeSelected}> Wedding </a>
						<a id="business_tab" className='not_selected' onClick={changeSelected}> Business </a>
						<a id="general_tab" className='not_selected' onClick={changeSelected}> General </a>
					</div>
					<div id={styles.selected_form}>
						<div id='wedding_form_wrapper'> 
							<WeddingForm />
						</div>
						<div id='business_form_wrapper'>
							<BusinessForm />
						</div>
						<div id='general_form_wrapper'>
							<GeneralForm />
						</div>
					</div>
				</div>
				<div id={styles.contact_header}>
						<Image id={styles.contact_header} src={contactHeader} alt='contact header' />
				</div>
			</div>
		</div>
	)
}