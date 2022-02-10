import styles from '../styles/Commercial.module.css'

const Hero = () => {
	return (
		<div id={styles.commercialHero}>
			<img src='https://via.placeholder.com/1000' id={styles.heroImg} />
			<h1 id={styles.commercialTitle}> COMMERCIAL </h1>
		</div>
	)
}

const Body = () => {
	return (
		<div className={styles.bodyContainer}>
			<h1 className='text-2xl'> HELPING LOCAL <br /> BUSINESSES <br /> GROW </h1>
			<p className={styles.bodyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>		
		</div>
	)
}

export default function Commercial() {
	return (
		<div className='content'>
			<Hero />
			<Body />
		</div>
	)
}