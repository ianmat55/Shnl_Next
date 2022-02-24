import styles from '../styles/Lifestyle.module.css'
import header1 from '../public/assets/test_images/lifestyle/header1.jpeg'
import header2 from '../public/assets/test_images/lifestyle/header2.jpeg'
import header3 from '../public/assets/test_images/lifestyle/header3.jpg'
import Image from 'next/image'
import Gallery from '../components/gallery'

const Hero = () => {
	return(
		<div id={styles.lifestyleHero}>
			<h1 id={styles.lifestyleTitle} className='title'> Waikiki/ <br /> Downtown/ <br /> Nature </h1>
			<div id={styles.img1}>
				<Image src={header1} priority />
			</div>
			<div id={styles.img2}>
				<Image src={header2} />
			</div>
			<div id={styles.img3}>
				<Image src={header3} />
			</div>
		</div>
	)
};

export default function Lifestyle() {
	return (
		<section className='content'>
			<div className={styles.colorStrip}>
				<Hero />
			</div>
			<div>
				<Gallery />
			</div>
		</section>
	)
}