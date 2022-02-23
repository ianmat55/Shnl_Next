import styles from '../styles/Wedding.module.css'
import Image from 'next/image'
import headImg1 from '../public/assets/test_images/wedding/wedding6.jpg'
import headImg2 from '../public/assets/test_images/wedding/wedding5.jpeg'


const Header = () => {
	return(
		<div id={styles.weddingHeader}>
			<h1 id={styles.weddingTitle}> WEDDING <br /> PHOTOGRAPHY </h1>
			<div id={styles.img1}>
				<Image src={headImg1} sizes='50vw' priority />
			</div>
			<div id={styles.img2}>
				<Image src={headImg2} sizes='40vw' />
			</div>
		</div>
	)
}

export default function Wedding() {
	// const images = ['https://via.placeholder.com/600x400', 'https://via.placeholder.com/600x400', 'https://via.placeholder.com/600x400', 'https://via.placeholder.com/600x400', 'https://via.placeholder.com/600x400']
	return (
		<section className='content'>
			<div className={styles.colorStrip}>
			<Header />
				{/* <Body /> */}
				{/* <Slider images={images} /> */}
				{/* <Banner /> */}
			</div>
		</section>
	)
}

// @refresh reset