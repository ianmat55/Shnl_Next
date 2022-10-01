import Image from 'next/image'

interface HeaderProps {
    title: string
    image: any
}

export default function Header({ title, image }: HeaderProps) {
    return (
        <div className='headerSection'>
            <div className="headerImage">
                <Image src={image} />
            </div>
            <h1 className='title'> {title} </h1>
        </div>
    )
}