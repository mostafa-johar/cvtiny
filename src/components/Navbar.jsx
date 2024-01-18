import { Link, NavLink } from "react-router-dom";

// Navbar component
const Navbar = () => {
    // render
    return (
        <header className="w-full">
            <nav className="bg-black lg:w-[60%] md:ml-auto rounded-t-2xl text-white">
                <ul className="flex justify-around items-center p-3">
                    <li>
                        <NavLink to="/" className="hover:text-yellow-400  text-sm md:text-lg">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/resume" className="hover:text-yellow-400 text-sm md:text-lg">Resume</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portofolio" className="hover:text-yellow-400 text-sm md:text-lg">Portofolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="hover:text-yellow-400 text-sm md:text-lg">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;