import axios from "axios";
import { useContext, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const handlePostSubmit = async (e) => {
    e.preventDefault()
    const newPost = {
      username: user.username,
      title: title,
      desc: desc,
    };
    if (file) {
      const formData = new FormData();
      const filename = Date.now() + file.name;
      formData.append("name", filename);
      formData.append("file", file);
      newPost.photo = filename;

      console.log(formData);
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_BACKEND_URI}/api/upload`,
          formData
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URI}/api/post`,newPost
      );
      navigate("/post/" + data._id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="pt-12">
      <form className="relative">
        {file && (
          <img
            className="w-[70vw] h-[250px] rounded-md object-cover ml-[150px]"
            src={URL.createObjectURL(file)}
          />
        )}
        <div className="ml-[150px] flex items-center">
          <label htmlFor="fileInput">
            <BiImageAdd className="w-[25px] h-[25px] rounded-full border-2 flex items-center justify-center text-xl text-[rgb(121,118,118)] cursor-pointer" />
          </label>
          <input
            type="file"
            id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden "
          />
          <input
            type="text"
            placeholder="Title"
            className="text-3xl border-none p-5 w-[70vw] focus:outline-none"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="ml-[150px] flex items-center">
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            className="w-[70vw] text-lg border-none focus:outline-none"
            type="text"
            placeholder="Tell your story...."
          ></textarea>
        </div>
        <button
          className="absolute top-5 right-12 text-white bg-teal-600 p-2 border-none cursor-pointer text-base rounded-lg"
          onClick={handlePostSubmit}
        >
          Publish
        </button>
      </form>
    </div>
  );
};
export default Write;
