import { Link } from "react-router-dom";

const FormField = ({ props }) => {
  return (
    <div
      style={{
        height: "calc(100vh - 50px)",
      }}
      className="flex relative justify-center items-center flex-col bg-gradient-to-tr from-slate-100 to-slate-400"
    >
      <span className="text-[50px]">{props}</span>
      <form className="mt-5 flex flex-col">
        {props === "Register" && (
          <>
            <label className="my-2">Username</label>
            <input
              className="p-2 bg-white  border focus:border-red-500 focus:outline-none rounded-lg"
              type="text"
              placeholder="Enter your username"
            />
          </>
        )}
        <label className="my-2">Email</label>
        <input
          className="p-2 bg-white  border focus:border-red-500 focus:outline-none rounded-lg"
          type="email"
          placeholder="Enter your email"
        />
        <label className="my-2">Password</label>
        <input
          className="p-2 bg-white border focus:border-red-500 focus:outline-none rounded-lg"
          type="password"
          placeholder="Enter your password"
        />
        <button
          type="submit"
          className="bg-teal-600 mt-5 rounded-lg p-2 text-white cursor-pointer
      "
        >
          {props}
        </button>
      </form>
      {props === "Login" ? (
        <Link to={"/register"}>
          <button className="absolute rounded-lg top-5 right-5 cursor-pointer p-2 text-white bg-red-500">
            Register
          </button>
        </Link>
      ) : (
        <Link to={"/login"}>
          <button className="absolute rounded-lg top-5 right-5 cursor-pointer p-2 text-white bg-red-500">
            Login
          </button>
        </Link>
      )}
    </div>
  );
};
export default FormField;
