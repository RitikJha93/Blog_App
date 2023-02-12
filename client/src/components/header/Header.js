const Header = () => {
  return (
    <div className="mt-16">
        <div style={{fontFamily:'Lora'}} className="flex flex-col items-center text-[#444]">
            <span className="absolute top-[18%] text-xl">React & Node</span>
            <span className="text-8xl absolute top-[20%]">Blog</span>
        </div>
        <img className="w-[100%] h-[450px] mt-20 object-cover" src="https://images.pexels.com/photos/2757549/pexels-photo-2757549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
  )
}
export default Header