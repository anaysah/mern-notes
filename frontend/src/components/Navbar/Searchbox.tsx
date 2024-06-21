import { Search } from "lucide-react"

const Searchbox = () => {
  return (
    <div className="flex items-center bg-fore-pri rounded px-2 py-2 w-full max-w-md">
      <input
        type="text"
        className="flex-grow bg-transparent outline-none text-pri placeholder-gray-500"
        placeholder="Search..."
      />
      <Search className="text-gray-500" />
    </div>
  )
}

export default Searchbox