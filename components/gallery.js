import Image from 'next/image'

export default function Gallery({ images }) {
	console.log(images)

	return (
		<div>
			{images.map((image, index) => {
				let source = `http://localhost:8055/assets/${image}`
				return (
					<Image key={index} loader={() => source} src={image} width={400} height={300} />
				)
			})}
		</div>
	)
}



