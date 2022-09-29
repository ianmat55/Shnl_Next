import styles from '../styles/Contact.module.css'

export function WeddingForm() {
	return (
		<>
			<form name="contact" method="POST" data-netlify="true">
				<div className={styles.formDiv}>
					<div className={styles.formElement}>
						<label htmlFor='name'> Name </label> 
						<input type="text" name="name" />  
					</div>
					<div className={styles.formElement}>
						<label htmlFor='email'> Email </label>
						<input type="text" name="email" />
					</div>
				</div>
				<div className={styles.formElement}>
					<label htmlFor='wedding-location'> Wedding Location </label> 
					<input type='text' name='wedding-location' /> 
				</div>
                <div className={styles.formElement}>
                    <label htmlFor='wedding-date'> Wedding Date </label>
                    <input style={{width: '100%'}} type='date' name='wedding-date' />
                </div>
				<div className={styles.formElement}>
					<label htmlFor='message'> Message </label> 
					<textarea name='message'></textarea>
				</div>
				<button id={styles.submit} type='submit'>Send</button>
			</form>
		</>
	)
}

export function BusinessForm() {
	return (
		<>
			<form name="contact" method="POST" data-netlify="true">
				<div className={styles.formDiv}>
					<div className={styles.formElement}>
						<label htmlFor='name'> Name </label> 
						<input type="text" name="name" />  
					</div>
					<div className={styles.formElement}>
						<label htmlFor='email'> Email </label>
						<input type="text" name="email" />
					</div>
                    <div className={styles.formElement}>
						<label htmlFor='email'> Name of Business </label>
						<input type="text" name="business-name" />
					</div>
                    {/* <div className={styles.formElement}>
						<label htmlFor='email'> Business Address </label>
						<input type="text" name="business-address" />
					</div> */}
					<div className={styles.formElement}>
                    	<label htmlFor='business-date'> Photoshoot Date </label>
                    <input style={{width: '100%'}} type='date' name='business-date' />
                </div>
				</div>
				<div className={styles.formElement}>
					<label htmlFor='message'> Message </label> 
					<textarea name='message'></textarea>
				</div>
				<button id={styles.submit} type='submit'>Send</button>
			</form>
		</>
	)
}

export function GeneralForm() {
	return (
		<>
			<form name="contact" method="POST" data-netlify="true">
				<div className={styles.formDiv}>
					<div className={styles.formElement}>
						<label htmlFor='name'> Name </label> 
						<input type="text" name="name" />  
					</div>
					<div className={styles.formElement}>
						<label htmlFor='email'> Email </label>
						<input type="text" name="email" />
					</div>
                    <div className={styles.formElement}>
						<label htmlFor='insta'> Insta Handle (if applicable) </label>
						<input type='text' name='insta' />
					</div>
					<div className={styles.formElement}>
                    	<label htmlFor='general-date'> Photoshoot Date </label>
                    <input style={{width: '100%'}} type='date' name='general-date' />
                </div>
				</div>
				<div className={styles.formElement}>
					<label htmlFor='message'> Message </label> 
					<textarea name='message'></textarea>
				</div>
				<button id={styles.submit} type='submit'>Send</button>
			</form>
		</>
	)
}