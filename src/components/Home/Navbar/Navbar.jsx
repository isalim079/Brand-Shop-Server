import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Router/AuthProvider";
import { BiSolidUserCircle } from "react-icons/bi";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log("you have logged out successfully");
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    };

    const navLinks = (
        <>
            <div className="text-lg font-normal flex-col md:flex-row flex gap-1 text-center md:text-left md:gap-10 list-none font-poppins">
                <li>
                    <NavLink
                        to="/"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                textDecoration: isActive ? "underline" : "",
                                textDecorationColor: isActive ? "red" : "",
                                color: isPending ? "black" : "",
                            };
                        }}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/addProducts"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                textDecoration: isActive ? "underline" : "",
                                textDecorationColor: isActive ? "red" : "",
                                color: isPending ? "black" : "",
                            };
                        }}
                    >
                        Add Product
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/myCarts"
                        style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                textDecoration: isActive ? "underline" : "",
                                textDecorationColor: isActive ? "red" : "",
                                color: isPending ? "black" : "",
                            };
                        }}
                    >
                        My Cart
                    </NavLink>
                </li>
            </div>
        </>
    );

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl text-gray-800 font-orbitron font-black">
                        E-TECH
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="px-1">{navLinks}</ul>
                </div>
                <div>
                    {user ? (
                        <div className="flex ml-6 items-center">
                            <div className="flex items-center">
                                <div>
                                    {user?.photoURL ? (
                                        <img
                                            className="w-10 h-10 rounded-full"
                                            src={user?.photoURL}
                                        />
                                    ) : (
                                        <BiSolidUserCircle className="text-5xl text-black"></BiSolidUserCircle>
                                    )}
                                </div>
                                <div className="ml-4">
                                    {user?.displayName ? (
                                        <p className="mr-3 text-black text-base font-poppins underline">
                                            {user?.displayName}
                                        </p>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                            <button
                                onClick={handleSignOut}
                                className="px-4 py-2 bg-orange-600 text-base text-white font-semibold font-poppins"
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className="ml-4 px-10 py-2 bg-orange-600 text-white text-base font-semibold">
                                Login
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
