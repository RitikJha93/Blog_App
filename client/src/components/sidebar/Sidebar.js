import { AiFillFacebook } from "react-icons/ai";
import { BsPinterest, BsSearch } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const { data } = await axios.get("/categories");
    console.log(data);
    setCats(data);
  };
  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div className="flex-[3] m-5 pb-7 bg-[#fdfdfb] rounded-xl flex flex-col items-center">
      <div className="flex flex-col items-center">
        <span
          style={{ fontFamily: "Varela" }}
          className="m-2 p-1 w-[80%] border border-t-[#a7a4a4] border-b-[#a7a4a4] font-semibold text-[#222] text-center"
        >
          ABOUT ME
        </span>
        <img
          className="mt-4"
          src="https://images.pexels.com/photos/5967752/pexels-photo-5967752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p className="p-7">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio magni
          dicta quasi quis unde sed.
        </p>
      </div>
      <div className="flex flex-col items-center w-[100%]">
        <span
          style={{ fontFamily: "Varela" }}
          className="m-2 p-1 w-[80%] border border-t-[#a7a4a4] border-b-[#a7a4a4] font-semibold text-[#222] text-center"
        >
          CATEGORIES
        </span>
        <ul className="mb-7 text-center">
          {cats.map((c) => {
            return (
              <Link to={`/?catName=${c.name}`}>
                <li className="inline-block w-[50%] mt-4 cursor-pointer">
                  {c.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col items-center w-[100%]">
        <span
          style={{ fontFamily: "Varela" }}
          className="m-2 p-1 w-[80%] border border-t-[#a7a4a4] border-b-[#a7a4a4] font-semibold text-[#222] text-center"
        >
          FOLLOW US
        </span>
        <div className="flex items-center justify-center mt-4 w-[250px]">
          <AiFillFacebook className="text-[#444] mr-3 text-[20px] cursor-pointer" />
          <BsPinterest className="text-[#444] mr-3 text-[20px] cursor-pointer" />
          <AiOutlineTwitter className="text-[#444] mr-3 text-[20px] cursor-pointer" />
          <AiOutlineInstagram className="text-[#444] mr-3 text-[20px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
