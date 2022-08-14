import styles from '../../styles/Commercial.module.css'
import header from '../../public/assets/test_images/commercial/header.jpg'
import Image from 'next/image'

const Hero = () => {
	return (
		<div>
			<div id={styles.commercialHero}>
				<Image src={header} id={styles.commercialHeader} layout='fill' alt='commercial header' priority />
			</div>
			<h1 id={styles.commercialTitle} className="title"> COMMERCIAL </h1>
		</div>
	)
}

const Body = () => {
	return (
		<div className={styles.bodyContainer}>
			<h1 id={styles.catchline} className='text-2xl'> HELPING LOCAL <br /> BUSINESSES <br /> GROW </h1>
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