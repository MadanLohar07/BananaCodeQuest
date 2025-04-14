import React, { useContext } from "react";
import { assets, dummyEducatorData } from "../../assets/assets";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const { navigate } = useContext(AppContext);
  const educatorData = dummyEducatorData;
  const { user } = useUser();
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-purple-100 border-b border-gray-200 dark:border-gray-700 z-1000">
      <div className="max-w-screen-2xl flex items-center justify-between mx-auto py-4 px-10 flex-nowrap">
        <div onClick={() => navigate("/")}>Banana Code Quest</div>

        <div className="flex items-center gap-5 text-gray-500 relative">
          <p>Hi! {user ? user.fullName : "Developers"}</p>
          {user ? (
            <UserButton />
          ) : (
            <img src={assets.profile_img} className="max-w-8" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
