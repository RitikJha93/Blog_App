import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);

  // const [, set] = useState(second)

  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URI}/api/post/${post._id}`,{data:{username: user.username}});
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_BACKEND_URI}/api/post/${post._id}`,{username: user.username,title,desc});
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  const fetchSinglePost = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URI}/api/post/${path}`
    );
    setPost(data);
  };
  useEffect(() => {
    fetchSinglePost();
  }, [path]);

  const pf = `${process.env.REACT_APP_BACKEND_URI}/images`;
  return (
    <div className="flex-[9]">
      <div className="p-5 pr-0">
        <img
          className="w-[100%] h-[300px] rounded-md object-cover"
          src={`${pf}/${post.photo}`}
          alt=""
        />
        <h1
          style={{ fontFamily: "Lora" }}
          className="text-center m-2 text-3xl font-bold"
        >
          {post.title}
          {user.username === post.username && (
            <div className="float-right text-base flex items-center">
              <FaEdit className="text-teal-600 text-xl mr-3 cursor-pointer" />
              <MdDelete
                className="text-red-600 text-xl  cursor-pointer"
                onClick={handleDelete}
              />
            </div>
          )}
        </h1>
        <div
          style={{ fontFamily: "Varela" }}
          className="flex justify-between mb-5 text-base text-[#b39656]"
        >
          <span>
            Author :{" "}
            <Link to={`/?username=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="text-lg leading-6 text-[#666] first-letter:ml-5 first-letter:text-2xl first-letter:font-semibold">
          {post.desc}
        </p>
      </div>
    </div>
  );
};
export default SinglePost;
