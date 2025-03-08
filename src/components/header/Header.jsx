import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import useScrollDirection from "../../hooks/useScrollDirection";
import { useAuth } from "../../provider/AuthProvider";
import showToast from "../../hooks/showToast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { VscSignOut } from "react-icons/vsc";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import fetchUserGender from "../../hooks/fetchUserGender";
import defaultMaleAvatar from "../../assets/man.png";
import defaultFemaleAvatar from "../../assets/woman.png";
import defaultUser from "../../assets/user.png";
import SpinnerCircle from "../spinnerCircle/SpinnerCircle";

// import "./style.css"

const Header = () => {
  const navigate = useNavigate();
  const { user, loading, logout, role } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { scrollDirection, lastScrollY } = useScrollDirection();
  const [photoURL, setPhotoURL] = useState(user?.photoURL);
  const [gender, setGender] = useState(null);

  useEffect(() => {
    setPhotoURL(user?.photoURL);
  }, [user]);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure Sign out?",
      text: "Confirm your desired service order before Sign out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I wanna Sign out now!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await logout();
          try {
            const jwtRes = await axiosSecure.post("/jwt-logout", null);
            // console.log(jwtRes);
            if (!jwtRes?.data?.success) {
              return console.error("Error while logout", "error");
            }
            showToast("Good bye! We waiting for you", "error");
          } catch (err) {
            console.error("Error while remove token from cookie: ", err);
          }
        } catch (err) {
          console.error("Error while logout: ", err);
        }
      }
    });
  };

  const navs = [
    { path: "/", label: "home" },
    { path: "/services", label: "services" },
    // { path: "/about", label: "about" },
    // { path: "/blog", label: "blog" },
    // { path: "/contact", label: "contact" },
  ];

  const authNavs = [{ path: "/order-cart", label: "order" }];
  if (role === "admin" || role === "officer") {
    authNavs.unshift(
      { path: "/add-service", label: "add service" },
      { path: "/all-service-orders", label: "all orders" }
    );
  }
  if (role === "admin") {
    authNavs.unshift({ path: "/users", label: "users" });
  }

  const displayNav = () => {
    return (
      <>
        {navs.map((nav, idx) => (
          <NavLink
            className={"p-2 font-semibold capitalize mx-2"}
            key={idx}
            to={nav?.path}
          >
            {nav?.label}
          </NavLink>
        ))}

        {!user ? (
          <NavLink
            className={"p-2 font-semibold capitalize mx-2"}
            to={"/login"}
          >
            {"login"}
          </NavLink>
        ) : (
          <>
            {authNavs.map((nav, idx) => (
              <NavLink
                className={"p-2 font-semibold capitalize mx-2"}
                key={idx}
                to={nav?.path}
              >
                {nav?.label}
              </NavLink>
            ))}

            <button
              title="Sign out"
              onClick={handleLogout}
              className={
                "p-2 text-2xl cursor-pointer hover:text-red-500 transition duration-200 font-semibold capitalize mx-2"
              }
            >
              <VscSignOut />
            </button>
          </>
        )}
      </>
    );
  };

  useEffect(() => {
    const getGender = async () => {
      const gender = await fetchUserGender(user && user?.displayName);
      setGender(gender);
    };
    getGender();
  }, [user]);

  return (
    <div
      className={`my-4 lg:my-8 w-full transform sticky top-0 left-0 z-[12] ${
        scrollDirection === "up" && lastScrollY > 50 && "bg-blur"
      } bg-white py-2 duration-500 ${
        scrollDirection === "down"
          ? "-translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <div className={`navbar p-0 `}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
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
              className={`p-0 transform duration-200 ${
                lastScrollY > 50 ? "scale-50" : "scale-75 lg:scale-100"
              }`}
              src="https://res.cloudinary.com/dwa2voehg/image/upload/v1738820018/logo_f3vjqp.svg"
              alt=""
            />{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{displayNav()}</ul>
        </div>
        <div className="navbar-end flex items-center gap-2 lg:gap-4">
          <button
            onClick={() => navigate("/order-cart")}
            className="text-2xl cursor-pointer hover:text-red-500 transition duration-200"
          >
            <MdOutlineShoppingBag />
          </button>
          <button className="text-2xl">
            <IoSearchOutline />
          </button>
          {loading ? (
            <SpinnerCircle />
          ) : (
            user && (
              <div className="">
                <div
                  className={`avatar ${
                    lastScrollY > 50 ? "scale-75" : "scale-100"
                  } avatar-online`}
                  title={user?.displayName}
                >
                  <div className={`w-16 md:w-20  rounded-full`}>
                    <img
                      src={photoURL}
                      onError={(e) =>
                        (e.target.src =
                          gender && gender === "male"
                            ? defaultMaleAvatar
                            : gender === "female"
                            ? defaultFemaleAvatar
                            : defaultUser)
                      }
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
