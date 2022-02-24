import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Gallery({ images }) {
	console.log(images)
	return (
		<div>
			<p> Testing </p>
		</div>
	)
}

// export async function getStaticProps() {
// 	console.log('API called')
// 	const res = await fetch('http://localhost:8055/items/Lifestyle')
// 	const images = await res.json()
// 	return {
// 	  props: { images }
// 	}
// }

