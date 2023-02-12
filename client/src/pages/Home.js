import Header from "../components/header/Header"
import Posts from "../components/posts/Posts"
import Sidebar from "../components/sidebar/Sidebar"

const Home = () => {
  return (
    <div>
        <Header />
        <div className="flex ">
            <Posts />
            <Sidebar />
        </div>
    </div>
  )
}
export default Home