import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SinglePost = () => {
  return (
    <div className="flex-[9]">
      <div className="p-5 pr-0" >
        <img
        className="w-[100%] h-[300px] rounded-md object-cover"
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <h1 style={{fontFamily:'Lora'}} className="text-center m-2 text-3xl font-bold">
          Lorem ipsum dolor sit amet.
          <div className="float-right text-base flex items-center">
            <FaEdit className="text-teal-600 text-xl mr-3 cursor-pointer"/>
            <MdDelete className="text-red-600 text-xl  cursor-pointer"/>
          </div>
        </h1>
        <div style={{fontFamily:'Varela'}} className="flex justify-between mb-5 text-base text-[#b39656]">
          <span>
            Author : <b>Ritik</b>
          </span>
          <span>1 hr ago</span>
        </div>
        <p className="text-lg leading-6 text-[#666] first-letter:ml-5 first-letter:text-2xl first-letter:font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
          aperiam ullam reiciendis saepe hic! Tempora, laudantium voluptas
          dolore labore dolor vel? Doloremque ad quasi iure voluptatum corporis
          magni quidem animi quaerat dignissimos. Nihil, itaque facilis hic ut
          dolorem reprehenderit doloremque enim nesciunt fugiat, dolore alias
          earum dignissimos, animi aut blanditiis?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
          aperiam ullam reiciendis saepe hic! Tempora, laudantium voluptas
          dolore labore dolor vel? Doloremque ad quasi iure voluptatum corporis
          magni quidem animi quaerat dignissimos. Nihil, itaque facilis hic ut
          dolorem reprehenderit doloremque enim nesciunt fugiat, dolore alias
          earum dignissimos, animi aut blanditiis?

        </p>
      </div>
    </div>
  );
};
export default SinglePost;
