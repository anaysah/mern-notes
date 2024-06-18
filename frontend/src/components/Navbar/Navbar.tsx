import Menubar from "./Menubar"
import Searchbox from "./Searchbox"

const Navbar = () => {
  return (
    <div className="bg-back flex justify-between p-5 py-3 items-center text-pri drop-shadow">
      <div className="text-2xl font-bold tracking-wide flex-1">Notes</div>
      <div className="flex-1">
        <Searchbox />
      </div>
      <div className="flex-1">
        <Menubar/>
      </div>
    </div>
  )
}

export default Navbar