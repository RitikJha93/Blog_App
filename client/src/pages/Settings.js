import Sidebar from "../components/sidebar/Sidebar";
import {FaUserCircle} from 'react-icons/fa'
import { useContext } from "react";
import { Context } from "../context/Context";

const Settings = () => {

  const {user} = useContext(Context)
  return (
    <div className="flex">
      <div className="flex-[9] p-5">
        <div className="flex justify-between items-center">
            <span className="text-3xl text-red-400 mb-5">
                Update your account
            </span>
            <span className="text-red-700 text-xs cursor-pointer">
                Delete account
            </span>
        </div>
        <form className="flex flex-col">
            <label className="text-xl mt-5" htmlFor="">
                Profile Picture
            </label>
            <div className="flex items-center my-2">
                <img className="w-[70px] h-[70px] object-cover rounded-lg" src={user.profilePic} alt="" />
                <label htmlFor="fileInput">
                    <FaUserCircle className="w-[25px] h-[25px] object-cover ml-2 cursor-pointer"/>
                </label>
                <input type="file" id="fileInput" className="hidden"/>
            </div>
            <label className="text-xl mt-5">Username</label>
            <input className="text-gray-400 my-2 h-[30px] focus:outline-none border-b-2 " type="text" placeholder="ex.Ritik" />
            <label className="text-xl mt-5">Email</label>
            <input className="text-gray-400 my-2 h-[30px] focus:outline-none border-b-2 " type="email" placeholder="ex.example@gmail.com" />
            <label className="text-xl mt-5">Password</label>
            <input className="text-gray-400 my-2 h-[30px] focus:outline-none border-b-2 " type="password" placeholder="password" />
            <button className="w-[150px] self-center bg-teal-600 text-white p-2 rounded-lg mt-5 cursor-pointer" type="submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};
export default Settings;
