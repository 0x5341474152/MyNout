import logo from '../../assets/logo.jpg'
export const Navbar = () => {
    return (
        <header className='flex px-5 py-2 gap-3 border-b-2 border-gray-100 ;'>
            <div className='w-12 h-12'>
                <img className='w-full h-full ' src={logo} alt='logo'/>
            </div>
            <h1 className='text-violet-800 text-4xl font-bold'>Notes</h1>
        </header>
    )
} 