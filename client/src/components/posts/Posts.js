import Post from "../post/Post";

const Posts = ({ posts }) => {
  return (
    <div className="flex-[9] flex flex-wrap m-5">
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
};
export default Posts;
