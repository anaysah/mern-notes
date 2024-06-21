import { LogOutIcon } from "lucide-react"
import { getInitialName } from "../../utils/helpers"

const ProfileInfo = () => {
  return (
    <div className="flex gap-2 items-center">
        <div className="rounded-full bg-fore-pri w-10 h-10 flex justify-center items-center traking-widest">{getInitialName("Ajay Sahu")}</div>
        <div className="flex flex-col h-10 justify-around">
            <div className="text-sm">Ajay Sahu</div>
            <div className="text-xs flex gap-1 items-center hover:text-blue-500 cursor-pointer hover:underline"><LogOutIcon className="w-3 h-3"/>Logout</div>
        </div>
    </div>
  )
}

export default ProfileInfo