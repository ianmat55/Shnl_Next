import lifestyle1 from '../../public/assets/test_images/lifestyle_header.jpeg'
import lifestyle2 from '../../public/assets/test_images/lifestyle2_header.jpeg'
import Gallery from '../../components/gallery'
import Header from '../../components/header'
import axios from 'axios';

export default function Lifestyle({ images }: any) {
	return (
		<section className='content'>
			<Header photo1={lifestyle1} photo2={lifestyle2} />
			<Gallery images={images} />
		</section>
	)
}

export async function getStaticProps() {
	const res = await axios('https://api.shanelhonolulu.com/items/Test') 
	const images = res.data

	return {
	  props: { images }, // will be passed to the page component as props
	}
}