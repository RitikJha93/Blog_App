import { AiFillFacebook } from "react-icons/ai";
import { BsPinterest, BsSearch } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Topbar = () => {
  const { user, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <div
      style={{ fontFamily: "Josefin Sans" }}
      className="font-['Josefin Sans'] w-[100%] h-[50px] flex items-center sticky top-0 bg-white z-10"
    >
      <div className="flex-[3]  flex items-center justify-center">
        <AiFillFacebook className="text-[#444] mr-3 text-[20px] cursor-pointer" />
        <BsPinterest className="text-[#444] mr-3 text-[20px] cursor-pointer" />
        <AiOutlineTwitter className="text-[#444] mr-3 text-[20px] cursor-pointer" />
        <AiOutlineInstagram className="text-[#444] mr-3 text-[20px] cursor-pointer" />
      </div>
      <div className="flex-[6]">
        <ul className="flex justify-center">
          <Link to={"/"}>
            <li className="mr-5 text-lg font-[300] cursor-pointer">HOME</li>
          </Link>
          <li className="mr-5 text-lg font-[300] cursor-pointer">ABOUT</li>
          <li className="mr-5 text-lg font-[300] cursor-pointer">CONTACT</li>
          <Link to={"/write"}>
            <li className="mr-5 text-lg font-[300] cursor-pointer">WRITE</li>
          </Link>
          {user && (
            <li
              className="mr-5 text-lg font-[300] cursor-pointer"
              onClick={handleLogout}
            >
              LOGOUT
            </li>
          )}
        </ul>
      </div>
      <div className="flex-[3] flex justify-center items-center">
        {user ? (
          <>
            <img
              className="w-[40px] h-[40px] object-cover rounded-full"
              src={user?.profilePic}
              alt=""
            />
          </>
        ) : (
          <Link to={"/login"}>
            <li className="mr-5 text-lg font-[300] list-none cursor-pointer">
              LOGIN
            </li>
          </Link>
        )}
        <AiOutlineSearch className="cursor-pointer text-lg text-[#666] mr-4" />
      </div>
    </div>
  );
};
export default Topbar;
