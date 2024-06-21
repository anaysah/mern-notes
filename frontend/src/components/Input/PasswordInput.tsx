import { EyeIcon, EyeOff } from "lucide-react"
import { useState } from "react"
import Input from "./Input"

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClick = () => setShowPassword(!showPassword)

    return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        id="password"
        placeholder="Password"
        scale="small"
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