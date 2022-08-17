interface HeaderProps {
    title: string
}

export default function Header({ title }: HeaderProps) {
    return (
        <div className='headerSection'>
            <h1 className='title'> {title} </h1>
        </div>
    )
}