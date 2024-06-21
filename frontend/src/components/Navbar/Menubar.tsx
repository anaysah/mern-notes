import ProfileInfo from "./ProfileInfo"
import ThemeBtn from "./ThemeBtn"

const Menubar = () => {
  return (
    <div className="flex justify-end gap-2">
      <ThemeBtn/>
      <ProfileInfo/>
    </div>
  )
}

export default Menubar