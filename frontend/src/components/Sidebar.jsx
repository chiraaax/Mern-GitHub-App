import React from "react";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";
import Logout from "./Logout";
import { useAuthContext } from "../context/AuthContext";

const Sidebar = () => {
  const { authUser } = useAuthContext(); // Correct data

  const navItemClasses =
    "p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800";

  const authLinks = (
    <>
      <Link to="/likes" className={navItemClasses}>
        <FaHeart size={22} />
      </Link>
      <Link to="/explore" className={navItemClasses}>
        <MdOutlineExplore size={25} />
      </Link>
    </>
  );

  const guestLinks = (
    <>
      <Link to="/login" className={navItemClasses}>
        <PiSignInBold size={25} />
      </Link>
      <Link to="/signup" className={navItemClasses}>
        <MdEditDocument size={25} />
      </Link>
    </>
  );

  return (
    <aside className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto border-r bg-glass">
      <nav className="h-full flex flex-col gap-3">
        <Link to="/" className="flex justify-center">
          <img className="h-8" src="/github.svg" alt="Go to Homepage" />
        </Link>

        <Link to="/" className={navItemClasses}>
          <IoHomeSharp size={20} />
        </Link>

        {authUser ? authLinks : guestLinks}

        {authUser && (
          <div className="flex flex-col gap-2 mt-auto">
            <Logout />
          </div>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
