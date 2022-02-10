import styles from '../styles/Wedding.module.css'
import Image from 'next/image'

const Header = () => {
	return(
		<div id={styles.weddingHeader}>
			<h1 id={styles.weddingTitle}> WEDDING <br /> PHOTOGRAPHY </h1>
			<img src='https://via.placeholder.com/180' id={styles.img1} />
			<img src='https://via.placeholder.com/100x130' id={styles.img2} />
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