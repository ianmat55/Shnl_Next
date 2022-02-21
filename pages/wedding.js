import styles from '../styles/Wedding.module.css'
import Image from 'next/image'
import headImg1 from '../public/assets/test_images/wedding/wedding4.jpg'
import headImg2 from '../public/assets/test_images/wedding/wedding5.jpg'


const Header = () => {
	return(
		<div id={styles.weddingHeader}>
			<h1 id={styles.weddingTitle}> WEDDING <br /> PHOTOGRAPHY </h1>
			<Image src={headImg1} id={styles.img1} />
			<Image src={headImg2} id={styles.img2} />
		</div>
	)
}

export default function Wedding() {
	// const images = ['https://via.placeholder.com/600x400', 'https://via.placeholder.com/600x400', 'https://via.placeholder.com/600x400', 'https://via.placeholder.com/600x400', 'https://via.placeholder.com/600x400']
	return (
		<section className='content'>
			<Header />
			{/* <Body /> */}
			{/* <Slider images={images} /> */}
			{/* <Banner /> */}
		</section>
	)
}