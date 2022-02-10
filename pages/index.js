import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

import homeImg from '../public/assets/desktop_images/home.jpg'
import weddingImg from '../public/assets/desktop_images/wedding.jpg'
import commercialImg from '../public/assets/desktop_images/commercial.jpg'
import lifestyleImg from '../public/assets/desktop_images/lifestyle.jpg'
import galleryImg from '../public/assets/desktop_images/gallery.jpg'
import contactImg from '../public/assets/desktop_images/contact.jpg'

import img1 from '../public/assets/mobile_images/img1.jpg'
import img2 from '../public/assets/mobile_images/img2.jpg'
import img3 from '../public/assets/mobile_images/img3.jpg'
import img4 from '../public/assets/mobile_images/img4.jpg'
import img5 from '../public/assets/mobile_images/img5.jpg'

const MobileImages = ({ mobileImages }) => {
	const [count, setCount] = useState(0);
  	const [width, setWidth] = useState(undefined);
	// const length = mobileImages.length;
  	useEffect(() => {
    	if (typeof window !== 'undefined') {
      		console.log(window.innerWidth)
      		setWidth(window.innerWidth)
    	}
  	})
	// const width = window.innerWidth;

	// const nextSlide = () => {
	// 	setCount(count === length - 1 ? 0 : count + 1)
	// }

	const transform = {
		transform: `translateX(-${width * count}px)`,
		transition: 'transform 0.6s ease-in-out'
	}

	useEffect(() => {
		const incrementCount = setInterval(() => setCount(count === mobileImages.length - 1 ? 0 : count + 1), 9000);
		return () => clearInterval(incrementCount);
	}, [count]);

	return (
		<>
			{mobileImages.map((image, index) => {	
				return (
					<Image key={index} id={index} className={`${transform} ${styles.mobileBackground}`} src={image} alt='idk' />
				)
			})};
		</>
	);
};

const DesktopImages = ({ backgroundImages, mainImage }) => {
	return(
		<div id='imageWrapper'>
			{backgroundImages.map((image, index) => {
				if (image===backgroundImages[mainImage]) {
					return (
						<div key={index} id={index} className={styles.imgWrapper}>
							<Image className={styles.deskImg} src={image} alt={image.toString()} />
						</div>
					);
				} else {
					return (
						<div key={index} id={index} className={styles.imageWrapperHidden}>
							<Image className={styles.deskImg} src={image} alt={image.toString()} />
						</div>
					);
				} 
			})}
		</div>
	)
};

export default function Home({ desktopImg }) {
	const backgroundImages = [homeImg, weddingImg, commercialImg, lifestyleImg, galleryImg, contactImg];
	const mobileImages = [img1, img2, img3, img4, img5];

	return (
		<section className={styles.home}>
			<div id={styles.mobileWrapper}>
				<MobileImages mobileImages={mobileImages} />
			</div>
			<div id={styles.desktopWrapper}>
				<DesktopImages backgroundImages={backgroundImages} mainImage={desktopImg} />
			</div>
		</section>
	)
};

