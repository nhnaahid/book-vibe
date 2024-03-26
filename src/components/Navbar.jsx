import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const navLinks = <>
        <li><NavLink to='/' style={({ isActive }) => ({
            color: isActive ? '#23BE0A' : '',
            border: isActive ? '1px solid #23BE0A' : '',
            background: 'none',
            fontWeight: isActive ? 'bolder' : 'bold'
        })}>Home</NavLink></li>
        <li><NavLink to='/listed-books' style={({ isActive }) => ({
            color: isActive ? '#23BE0A' : '',
            border: isActive ? '1px solid #23BE0A' : '',
            background: 'none',
            fontWeight: isActive ? 'bolder' : 'bold'
        })}>Listed Books</NavLink></li>
        <li><NavLink to='/pages-to-read' style={({ isActive }) => ({
            color: isActive ? '#23BE0A' : '',
            border: isActive ? '1px solid #23BE0A' : '',
            background: 'none',
            fontWeight: isActive ? 'bolder' : 'bold'
        })}>Pages to Read</NavLink></li>
    </>

    return (
        <nav>
            <div className="navbar bg-base-100 shadow-md fixed z-10 px-4 sm:px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl md:text-3xl font-bold">Book Vibe</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 md:text-base">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <a className="btn btn-xs sm:btn-sm md:btn-md bg-green-500 hover:bg-green-700 text-white">Sign In</a>
                    <a className="btn btn-xs sm:btn-sm md:btn-md bg-blue-400 hover:bg-blue-600 text-white">Sign Up</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;