import { BiImageAdd } from "react-icons/bi";
const Write = () => {
  return (
    <div className="pt-12">
      <form className="relative">
        <img
          className="w-[70vw] h-[250px] rounded-md object-cover ml-[150px]"
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="ml-[150px] flex items-center">
          <label htmlFor="fileInput">
            <BiImageAdd className="w-[25px] h-[25px] rounded-full border-2 flex items-center justify-center text-xl text-[rgb(121,118,118)] cursor-pointer" />
          </label>
          <input type="file" id="fileInput" className="hidden " />
          <input
            type="text"
            placeholder="Title"
            className="text-3xl border-none p-5 w-[70vw] focus:outline-none"
            autoFocus={true}
          />
        </div>
        <div className="ml-[150px] flex items-center">
          <textarea className="w-[70vw] text-lg border-none focus:outline-none" type="text" placeholder="Tell your story...."></textarea>
        </div>
        <button
          type="submit"
          className="absolute top-5 right-12 text-white bg-teal-600 p-2 border-none cursor-pointer text-base rounded-lg"
        >
          Publish
        </button>
      </form>
    </div>
  );
};
export default Write;
