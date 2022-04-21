import Image from 'next/image'

const Header = (photos) => { 
    const photoHeaders = photos.map((photo, index) => {
        <Image src={photo} alt={`header image ${index}`} />
    })
    return photoHeaders
}

