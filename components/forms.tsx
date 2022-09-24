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
				{/* <div className={styles.formDiv}>
					<div className={styles.formElement}>
						<label htmlFor='type'> Type </label>
						<select name='type text-center'>
							<option value='Wedding'>Wedding</option>
							<option value='Commercial'>Commercial</option>
							<option value='Lifestyle'>Lifestyle</option>
							<option selected value="General">General</option>
						</select>
					</div> 
				</div> */}
				<div className={styles.formElement}>
					<label htmlFor='wedding-location'> Wedding Loation </label> 
					<input type='text' name='wedding-location' /> 
				</div>
                <div className={styles.formElement}>
                    <label htmlFor='wedding-date'> Wedding Date </label>
                    <input type='date' name='wedding-date' />
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
                    <div className={styles.formElement}>
						<label htmlFor='email'> Business Address </label>
						<input type="text" name="business-address" />
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