import { ReactElement } from "react"

interface ButtonProps {
    variant : "primary" | "secondary"
    size : "sm" | "md" | "lg"
    text : string
    startIcon? : ReactElement
    endIcon? : ReactElement
}

const variantStyles = {
    "primary" : "bg-purple-600 text-white",
    "secondary" : "bg-purple-300 text-purple-500"
}

const sizeStyles = {
    "sm" : "py-1 px-2",
    "md" : "py-2 px-4",
    "lg" : "py-4 px-6"
}

const defaultStyles = "rounded-md font-light flex items-center"

export const Button = ({variant, text,startIcon , endIcon ,size} : ButtonProps) => {
  return (
    <button className={`${variantStyles[variant]}
     ${defaultStyles} ${sizeStyles[size]}`}>
        {startIcon}
        <div className="pl-2 pr-2">
         {text}
        </div>
        {endIcon}
     </button>
  )
}
