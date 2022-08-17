import axios from 'axios'
import Gallery from 'components/gallery'
import { GalleryProps } from '../../shared/types'
import Header from 'components/header'

export async function getStaticProps() {
	const res = await axios('https://api.shanelhonolulu.com/items/Test') 
	const images = res.data

	return {
	  props: { images }, // will be passed to the page component as props
	}
}

export default function Wedding({ images }: GalleryProps) {
	return (
		<section className='content'>
			<Header title="WEDDING PHOTOGRAPHY"/>
			<Gallery images={images} />
		</section>
	)
}
