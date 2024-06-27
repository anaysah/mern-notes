import { LogOutIcon } from "lucide-react"
import { getInitialName } from "../../utils/helpers"
import { useEffect, useState } from "react"
import axiosInstance from "../../utils/axiosInstance"
import { useNavigate } from "react-router-dom"
import ContentToolpit from "../Toolpits/ContentToolpit"

interface user {
  name: string, 
  email: string, 
}

const ProfileMenu = ({userInfo, logout}:{userInfo: user, logout: () => void}) => {
  return (
    <>
      <div className="text-sm nowrap whitespace-nowrap">{userInfo.name}</div>
      <button onClick={logout} className="text-xs flex gap-1 items-center hover:text-blue-500 cursor-pointer hover:underline"><LogOutIcon className="w-3 h-3"/>Logout</button>
    </>
  )
}

const ProfileInfo = () => {
  const [userInfo, setUserInfo] = useState<user>({
    name: "Unknown" ,
    email: ""
  })

  const [isShown, setIsShown] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    getUserInfo()
  }, [])


  const getUserInfo = async () =>{
    try{
      const res = await axiosInstance.get("/user")
      setUserInfo(res.data)
    }catch(err){
      navigate("/login")
      console.log(err)
    }
  }

  const logout = async () => {
    try {
      // Assuming your API has an endpoint for logging out
      await axiosInstance.get('/logout');
      // Redirect to the login page or home page after logout
      navigate('/login');
    } catch (error) {
      console.error("Logout failed", error);
      // Handle logout failure
    }finally{
      window.location.reload()
    }
  };

  return (
    <div className="flex gap-2 items-center relative">
        <button onClick={() => setIsShown(!isShown)} className="rounded-full bg-fore-pri w-10 h-10 flex justify-center items-center traking-widest">{getInitialName(userInfo.name)}</button>

        <ContentToolpit isShown={isShown}>
          <ProfileMenu userInfo={userInfo} logout={logout}/>
        </ContentToolpit>
        <div className="flex flex-col h-10 justify-around hidden sm:block">
            <ProfileMenu userInfo={userInfo} logout={logout}/>
        </div>
    </div>
  )
}

export default ProfileInfo