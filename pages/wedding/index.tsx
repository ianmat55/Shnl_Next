import styles from '../../styles/Wedding.module.css'
import Image from 'next/image'
import headImg1 from '../../public/assets/test_images/wedding/wedding6.jpg'
import headImg2 from '../../public/assets/test_images/wedding/wedding3.jpeg'
import axios from 'axios'
import Gallery from 'components/gallery'

export async function getStaticProps() {
	const res = await axios('https://api.shanelhonolulu.com/items/Test') 
	const images = res.data

	return {
	  props: { images }, // will be passed to the page component as props
	}
}

const Header = () => {
	return(
		<div id={styles.weddingHeader}>
			<h1 id={styles.weddingTitle} className="title"> WEDDING <br /> PHOTOGRAPHY </h1>
			<div id={styles.img1}>
				<Image src={headImg1} sizes='50vw' priority alt='header image 1' />
			</div>
			<div id={styles.img2}>
				<Image src={headImg2} sizes='40vw' alt='header image 2' />
			</div>
		</div>
	)
}

export default function Wedding({ images }: any) {
	return (
		<section className='content'>
			<Header />
			<Gallery images={images} />
		</section>
	)
}
