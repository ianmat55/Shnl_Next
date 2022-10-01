import styles from '../../styles/Contact.module.css'
import Header from 'components/header'
// import Image from 'next/image'
// import contactHeader from '../../public/assets/test_images/lifestyle/header3.jpg'
import { BusinessForm, GeneralForm, WeddingForm } from 'components/forms'
// test background images
import aboutImage from '../../public/assets/desktop_images/about.jpg'
import weddingBackground from '../../public/assets/test_images/wedding/wedding6.jpg'
import commercialBackground from '../../public/assets/test_images/lifestyle/header1.jpeg'
import lifestyleBackground from '../../public/assets/test_images/lifestyle/header2.jpeg'

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

	const background = document.getElementById("formBackground")

	// put items into array for easy filtering
	const formArray = [ {tab: wedding_tab, form: wedding_form, background: weddingBackground}, 
						{tab: business_tab, form: business_form, background: commercialBackground}, 
						{tab: general_tab, form: general_form, background: lifestyleBackground} ]

	formArray.forEach((formObj: any) => {
		if (event.target == formObj.tab) {
			console.log(formObj)
			formObj.tab.classList = "selected"
			formObj.form.style.display = "block"
			background!.style.backgroundImage = `url(${formObj.background.src}`
			background!.style.backgroundSize = 'cover'
		} else {
			formObj.tab.classList = "not_selected"
			formObj.form.style.display = "none"
		}
	})
}

export default function Contact() {
	return (
		<div className='content'>
			<div id="formBackground">
				<div id={styles.aboutContainer}> 
					<Header title='HOWZIT' image={aboutImage} />
					{/* <Body /> */}
				</div>
				<div id={styles.contact_portrait_container}>
					<div id='formsContainer' className='form_background'>
						<div id={styles.tab_list}>
							<a id="wedding_tab" className='selected' onClick={changeSelected}> Wedding </a>
							<a id="business_tab" className='not_selected' onClick={changeSelected}> Business </a>
							<a id="general_tab" className='not_selected' onClick={changeSelected}> General </a>
						</div>
						<div id={styles.selected_form}>
							<div id='wedding_form_wrapper'> 
								<WeddingForm />
							</div>
							<div id='business_form_wrapper' className="not_selected_form">
								<BusinessForm />
							</div>
							<div id='general_form_wrapper' className="not_selected_form">
								<GeneralForm />
							</div>
						</div>
					</div>
					{/* <div id={styles.contact_header}>
							<Image id={styles.contact_header} src={contactHeader} alt='contact header' />
					</div> */}
				</div>
			</div>
		</div>
	)
}