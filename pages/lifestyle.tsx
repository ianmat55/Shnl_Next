import styles from '../styles/Lifestyle.module.css'
import lifestyle1 from '../public/assets/test_images/lifestyle_test1-min.jpeg'
import lifestyle2 from '../public/assets/test_images/lifestyle_test2-min.jpeg'
// import Gallery from '../components/gallery'
import Header from '../components/header'
// import axios from 'axios';

// const Hero = () => {
// 	return(
// 		<div id={styles.lifestyleHero}>
// 			<h1 id={styles.lifestyleTitle} className='title'> Waikiki/ <br /> Downtown/ <br /> Nature </h1>
// 			<div id={styles.img1}>
// 				<Image src={header1} priority />
// 			</div>
// 			<div id={styles.img2}>
// 				<Image src={header2} />
// 			</div>
// 			<div id={styles.img3}>
// 				<Image src={header3} />
// 			</div>
// 		</div>
// 	)
// };

interface LifestyleProps {
	images: string
}

export default function Lifestyle({ images }: LifestyleProps) {
	console.log(images)
	return (
		<section className='content'>
			<div className={styles.colorStrip}>
				<Header photo1={lifestyle1} photo2={lifestyle2} />
			</div>
			{/* <div>
				<Gallery images={images} />
			</div> */}
		</section>
	)
}

// export async function getStaticProps() {
// 	const res = await axios('https://api.shanelhonolulu.com/items/Lifestyle')
// 	// const res = await fetch('http://localhost:8055/items/Lifestyle')
// 	const values = await res.data
// 	const images = values.map((value: { image: string}) => value.image)


// 	return {
// 	  props: { images }, // will be passed to the page component as props
// 	}
// }