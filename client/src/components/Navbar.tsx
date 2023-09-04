import Sidebar from "./Sidebar";

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-md'>
            <div className="navbar w-11/12 m-auto">
                <div className="navbar-start">
                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <label tabIndex={0} className="btn btn-ghost btn-circle" htmlFor="my-drawer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <Sidebar />
                    </div>
                </div>
                <div className="flex-1 navbar-center">
                    <a href="/" className='text-xl font-bold'>ePerpus </a>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://www.w3schools.com/howto/img_avatar.png" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar