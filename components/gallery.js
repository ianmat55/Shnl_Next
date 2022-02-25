import Image from 'next/image'

export default function Gallery({ images }) {
	// console.log(images.data[0]['file'])
	
	return (
		<div>
			{images.data.map(image => {
				let source = `http://localhost:8055/assets/${image.file}`
				console.log(source)
				return (
					<Image loader={() => source} src={source} width={500} height={500} />
				)
			})}
		</div>
	)
}



