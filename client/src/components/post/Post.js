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
            <span>Music</span>
            <span>Life</span>
        </div>
        <span>
            Lorem ipsum dolor sit amet.
        </span>
        <hr />
        <span>1 hr ago</span>
      </div>
    </div>
  );
};
export default Post;
