import { Search, X } from "lucide-react"
import { useRef, useState } from "react"

const Searchbox = () => {
  const [search, setSearch] = useState("")
  const searchInput = useRef<HTMLInputElement | null>(null);

  const handleSearch = () => {
    
  }

  const handleClear = () => {
    setSearch("")
    searchInput.current?.focus()
  }


  return (
    <div className="flex items-center bg-fore-pri rounded w-full max-w-md">
      <input
        type="text"
        className="flex-grow bg-transparent focus:outline-none p-2 text-sm"
        placeholder="Search..."
        ref={searchInput}
        value={search}
        onChange={(e) => { setSearch(e.target.value)}}
      />
      <button onClick={handleClear}>
        {
          search.length > 0 && <X className="text-gray-500 hover:text-red-700 cursor-pointer h-5 w-5" />
        }

      </button>
      <button onClick={handleSearch}>
        <Search className="text-gray-500 mx-2 hover:text-blue-700 cursor-pointer h-5 w-5" />
      </button>
    </div>
  )
}

export default Searchbox