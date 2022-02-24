import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Gallery({ images }) {
	for (let image of images.data) {
		console.log(image.title)
	}
	return (
		<div>
			<p> testing </p>
		</div>
	)
}



