import { Search } from "lucide-react"
import Input from "../Input/Input"

const Searchbox = () => {
  return (
    <div className="flex items-center bg-fore-pri rounded w-full max-w-md">
      <Input
        type="text"
        className="flex-grow bg-transparent px-2 py-2"
        placeholder="Search..."
        scale="small"
        intent="normal"
      />
      <Search className="text-gray-500 mx-2" />
    </div>
  )
}

export default Searchbox