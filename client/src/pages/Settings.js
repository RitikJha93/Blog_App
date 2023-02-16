import Sidebar from "../components/sidebar/Sidebar";
import { FaUserCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import axios from "axios";
const Settings = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [img, setImg] = useState();
  const [success, setSuccess] = useState(false);
  const { user,dispatch } = useContext(Context);

  const convertbase64 = async (file) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      setImg(fileReader.result);
    };
    fileReader.onerror = (error) => {
      console.log(error);
    };
  };
  const handleUpload = async (e) => {
    setFile(e.target.files[0]);
    const file = e.target.files[0];
    const base64 = await convertbase64(file);
  };
  const handleSubmit = async (e) => {
    dispatch({type:'UPDATE_START'})
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    if (img) {
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_BACKEND_URI}/api/upload`,
          { image: img }
        );
        console.log(data);
        updatedUser.profilePic = data.url;
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_BACKEND_URI}/api/users/${user._id}`,
        updatedUser
      );
      console.log(data);
      setSuccess(true);
      dispatch({type:'UPDATE_SUCCESS',payload:data})
    } catch (error) {
      console.log(error);
      dispatch({type:'UPDATE_FAILURE'})

    }
  };
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
            <img
              className="w-[70px] h-[70px] object-cover rounded-lg"
              src={file ? URL.createObjectURL(file) : user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <FaUserCircle className="w-[25px] h-[25px] object-cover ml-2 cursor-pointer" />
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={handleUpload}
              className="hidden"
            />
          </div>
          <label className="text-xl mt-5">Username</label>
          <input
            className="text-gray-400 my-2 h-[30px] focus:outline-none border-b-2 "
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="text-xl mt-5">Email</label>
          <input
            className="text-gray-400 my-2 h-[30px] focus:outline-none border-b-2 "
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="text-xl mt-5">Password</label>
          <input
            className="text-gray-400 my-2 h-[30px] focus:outline-none border-b-2 "
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-[150px] self-center bg-teal-600 text-white p-2 rounded-lg mt-5 cursor-pointer"
            onClick={handleSubmit}
          >
            Update
          </button>
        </form>
        {success && <span className="text-center text-green-600">profile has been updated successfully</span>}
      </div>
      <Sidebar />
    </div>
  );
};
export default Settings;
