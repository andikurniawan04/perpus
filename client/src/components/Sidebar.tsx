import { useLocation } from 'react-router-dom'

const Sidebar = () => {
    const location = useLocation();
    return (
        <div className='drawer-side z-10'>
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li className='my-2'>
                    <a href="/" className={`flex items-center px-2 py-3 rounded ${location.pathname == '/' ? 'bg-primary text-white hover:bg-primary hover:text-white' : 'hover:bg-base-300'}`}>
                        <i className="fa-solid fa-home"></i>
                        <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
                    </a>
                </li>
                <li className='my-2'>
                    <a href="/buku" className={`flex items-center px-2 py-3 rounded ${location.pathname == '/buku' ? 'bg-primary text-white hover:bg-primary hover:text-white' : 'hover:bg-base-300'}`}>
                        <i className="fa-solid fa-book"></i>
                        <span className="flex-1 ml-3 whitespace-nowrap">Buku</span>
                    </a>
                </li>
                <li className='my-2'>
                    <a href="/kategori" className={`flex items-center px-2 py-3  rounded ${location.pathname == '/kategori' ? 'bg-primary text-white hover:bg-primary hover:text-white' : 'hover:bg-base-300'}`}>
                        <i className="fa-solid fa-file-lines"></i>
                        <span className="flex-1 ml-3 whitespace-nowrap">Kategori</span>
                    </a>
                </li>
                <li className='my-2'>
                    <a href="/anggota" className={`flex items-center px-2 py-3  rounded ${location.pathname == '/anggota' ? 'bg-primary text-white hover:bg-primary hover:text-white' : 'hover:bg-base-300'}`}>
                        <i className="fa-solid fa-user"></i>
                        <span className="flex-1 ml-3 whitespace-nowrap">Anggota</span>
                    </a>
                </li>
                <li className='my-2'>
                    <a href="/pinjam" className={`flex items-center px-2 py-3 rounded ${location.pathname.startsWith('/pinjam') ? 'bg-primary text-white hover:bg-primary hover:text-white' : 'hover:bg-base-300'}`}>
                        <i className="fa-solid fa-book-open-reader"></i>
                        <span className="flex-1 ml-3 whitespace-nowrap">Pinjam Buku</span>
                    </a>
                </li>
                <li className='my-2'>
                    <a href="/laporan" className={`flex items-center px-2 py-3  rounded ${location.pathname == '/laporan' ? 'bg-primary text-white hover:bg-primary hover:text-white' : 'hover:bg-base-300'}`}>
                        <i className="fa-solid fa-file-lines"></i>
                        <span className="flex-1 ml-3 whitespace-nowrap">Laporan</span>
                    </a>
                </li>


            </ul>


        </div>
    )
}

export default Sidebar