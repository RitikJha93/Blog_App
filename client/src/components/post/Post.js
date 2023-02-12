const Post = () => {
  return (
    <div className="w-[375px] mt-0 mx-6 mb-8">
      <img
        className="w-[100%] h-[280px] object-cover rounded-lg"
        src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="flex flex-col items-center">
        <div>
          <span
            style={{ fontFamily: "Varela" }}
            className="text-xs leading-5 mt-4 mr-2 cursor-pointer text-[#be9656]"
          >
            Music
          </span>
          <span
            style={{ fontFamily: "Varela" }}
            className="text-xs leading-5 mt-4 mr-2 cursor-pointer text-[#be9656]"
          >
            Life
          </span>
        </div>
        <span
          style={{ fontFamily: "Josefin Sans" }}
          className="text-2xl font-bold mt-4 cursor-pointer"
        >
          Lorem ipsum dolor sit amet.
        </span>
        <hr />
        <span style={{ fontFamily: "Lora" }} className="text-sm text-[#999]">
          1 hr ago
        </span>
      </div>
      <p style={{fontFamily:'Varela'}} className='leading-6 text-[#444] text-sm mt-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iure,
        ipsa quam nisi nesciunt explicabo modi voluptas fuga voluptates aperiam
        iste quibusdam dicta quis molestias.
      </p>
    </div>
  );
};
export default Post;
