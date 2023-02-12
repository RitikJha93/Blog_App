import { AiFillFacebook } from "react-icons/ai";
import { BsPinterest, BsSearch } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

const Topbar = () => {
  return (
    <div style={{fontFamily : 'Josefin Sans'}} className="font-['Josefin Sans'] w-[100%] h-[50px] flex items-center sticky top-0">
      <div className="flex-[3]  flex items-center justify-center">
        <AiFillFacebook className="text-[#444] mr-3 text-[20px] cursor-pointer" />
        <BsPinterest className="text-[#444] mr-3 text-[20px] cursor-pointer" />
        <AiOutlineTwitter className="text-[#444] mr-3 text-[20px] cursor-pointer" />
        <AiOutlineInstagram className="text-[#444] mr-3 text-[20px] cursor-pointer" />
      </div>
      <div className="flex-[6]">
        <ul className="flex justify-center">
          <li className="mr-[20px] text-[18px] font-[300] cursor-pointer">
            HOME
          </li>
          <li className="mr-5 text-lg font-[300] cursor-pointer">
            ABOUT
          </li>
          <li className="mr-5 text-lg font-[300] cursor-pointer">
            CONTACT
          </li>
          <li className="mr-5 text-lg font-[300] cursor-pointer">
            WRITE
          </li>
          <li className="mr-5 text-lg font-[300] cursor-pointer">
            LOGOUT
          </li>
        </ul>
      </div>
      <div className="flex-[3] flex justify-center items-center">
        <img
          className="w-[40px] h-[40px] object-cover rounded-full"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <AiOutlineSearch className="cursor-pointer text-lg text-[#666] mr-4" />
      </div>
    </div>
  );
};
export default Topbar;
