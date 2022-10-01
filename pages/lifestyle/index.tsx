import Gallery from '../../components/gallery'
import Header from '../../components/header'
import axios from 'axios';
import { GalleryProps } from 'shared/types';
import lifestyleImage from '../../public/assets/desktop_images/home1.jpeg'

export async function getStaticProps() {
	const res = await axios('https://api.shanelhonolulu.com/items/Test') 
	const images = res.data

	return {
	  props: { images }, // will be passed to the page component as props
	}
}

export default function Lifestyle({ images }: GalleryProps) {
	return (
		<section className='content'>
			<Header title='LIFESTYLE' image={lifestyleImage} />
			<Gallery images={images} />
		</section>
	)
}
