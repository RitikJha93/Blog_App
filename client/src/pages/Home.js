import { useEffect, useState } from "react"
import Header from "../components/header/Header"
import Posts from "../components/posts/Posts"
import Sidebar from "../components/sidebar/Sidebar"
import axios from 'axios'
import { useLocation } from "react-router-dom"
const Home = () => {

  const [posts, setPosts] = useState([])
  const {search} = useLocation()
  const fetch = async()=>{
    const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_URI}/post${search}`)
    setPosts(data)
  }
  useEffect(() => {
    fetch()
  }, [search])
  
  return (
    <div>
        <Header />
        <div className="flex ">
            <Posts posts={posts}/>
            <Sidebar />
        </div>
    </div>
  )
}
export default Home