import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navs = [
    { path: "/", label: "home" },
    { path: "/about", label: "about" },
    { path: "/services", label: "services" },
    { path: "/blog", label: "blog" },
    { path: "/contact", label: "contact" },
  ];

  const displayNav = () => {
    return navs.map((nav, idx) => (
      <NavLink
        className={"p-2 font-semibold capitalize mx-2"}
        key={idx}
        to={nav?.path}
      >
        {nav?.label}
      </NavLink>
    ));
  };
  return (
    <div>
      <div className="navbar p-0 my-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {displayNav()}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl p-0">
            <img
              className="p-0"
              src="https://res.cloudinary.com/dwa2voehg/image/upload/v1738820018/logo_f3vjqp.svg"
              alt=""
            />{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1"> {displayNav()}</ul>
        </div>
        <div className="navbar-end flex items-center gap-4">
          <button className="text-2xl">
            <MdOutlineShoppingBag />
          </button>
          <button className="text-2xl">
            <IoSearchOutline />
          </button>
          <button className="py-3 px-6 text-primary font-medium border rounded">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
