import { EyeIcon, EyeOff } from "lucide-react"
import { useState } from "react"

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClick = () => setShowPassword(!showPassword)

    return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        id="password"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Password"
      />
      {
        showPassword ?
        <EyeOff className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={handleClick} />
        :
        <EyeIcon className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={handleClick} />
      }
    </div>
  )
}

export default PasswordInput