import Sidebar from "../components/sidebar/Sidebar"
import SinglePost from "../components/singlePost/SinglePost"

const Single = () => {
  return (
    <div className="flex">
        <SinglePost />
        <Sidebar />
    </div>
  )
}
export default Single