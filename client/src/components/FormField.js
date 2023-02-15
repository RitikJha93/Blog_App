import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

const FormField = ({ props }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const navigate = useNavigate();

  const { user, isFetching, dispatch } = useContext(Context);
  const handleSubmit = async (link) => {
    seterrorMessage("");
    console.log(link);
    if (link === "register") {
      try {
        setLoading(true);
        const { data } = await axios.post(
          `${process.env.REACT_APP_BACKEND_URI}/api/auth/${link}`,
          {
            username,
            email,
            password,
          }
        );
        console.log(data);
        setLoading(false);
        navigate("/login");
      } catch (error) {
        seterrorMessage("something went wrong");
        setLoading(false);
      }
    } else {
      try {
        setLoading(true);
        dispatch({ type: "LOGIN_START" });
        const { data } = await axios.post(
          `${process.env.REACT_APP_BACKEND_URI}/api/auth/${link}`,
          {
            username,
            password,
          }
        );
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
        setLoading(false);
        navigate("/");
      } catch (error) {
        console.log(error);
        dispatch({ type: "LOGIN_FAILURE" });
        seterrorMessage(error.response.data.message);
        setLoading(false);
      }
    }
  };

  console.log(isFetching);
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
            <label className="my-2">Email</label>
            <input
              className="p-2 bg-white  border focus:border-red-500 focus:outline-none rounded-lg"
              type="email"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </>
        )}
        <label className="my-2">Username</label>
        <input
          className="p-2 bg-white  border focus:border-red-500 focus:outline-none rounded-lg"
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="my-2">Password</label>
        <input
          className="p-2 bg-white border focus:border-red-500 focus:outline-none rounded-lg"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button
        onClick={() => handleSubmit(props.toLowerCase())}
        className="bg-teal-600 mt-5 rounded-lg p-2 text-white cursor-pointer"
      >
        {loading ? "loading" : props}
      </button>
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
      <span>{errorMessage}</span>
    </div>
  );
};
export default FormField;
