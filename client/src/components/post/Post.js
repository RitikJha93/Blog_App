import { Link } from "react-router-dom";
const Post = ({ post }) => {
  return (
    <div className="w-[375px] mt-0 mx-6 mb-8">
      {post.photo && (
        <img
          className="w-[100%] h-[280px] object-cover rounded-lg"
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      )}
      <div className="flex flex-col items-center">
        <div>
          {post.categories.map((c) => {
            return (
              <span
                style={{ fontFamily: "Varela" }}
                className="text-xs leading-5 mt-4 mr-2 cursor-pointer text-[#be9656]"
              >
                {c.name}
              </span>
            );
          })}
        </div>
        <Link to={`/post/${post._id}`}>
          <span
            style={{ fontFamily: "Josefin Sans" }}
            className="text-2xl font-bold mt-4 cursor-pointer"
          >
            {post.title}
          </span>
        </Link>
        <hr />
        <span style={{ fontFamily: "Lora" }} className="text-sm text-[#999]">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p
        style={{ fontFamily: "Varela" }}
        className="leading-6 text-[#444] text-sm mt-4"
      >
        {post.desc}
      </p>
    </div>
  );
};
export default Post;
