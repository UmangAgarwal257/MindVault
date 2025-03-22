import { ReactNode } from "react";

type Variants = "primary" | "secondary"

interface ButtonProps {
    variant : Variants;
    size : "sm" | "md" | "lg";
    text : string;
    startIcon? : ReactNode;
    endIcon? : ReactNode;
    onClick? : () => void;
}

const variantStyles  = {
    "primary" : "bg-purple-600 text-white",
    "secondary" : "bg-purple-300 text-purple-500"
}

const sizeStyles = {
    "sm" : "py-1 px-2",
    "md" : "py-2 px-4",
    "lg" : "py-4 px-6"
}

const defaultStyles = "rounded-md flex items-center"

export const Button = (props : ButtonProps) => {
  return (
    <button className={`${variantStyles[props.variant]}
     ${defaultStyles} ${sizeStyles[props.size]}`}>
        {props.startIcon}
        <div className="pl-2 pr-2">
        {props.text} 
        </div>
        {props.endIcon}
    </button>
  )
}

<Button variant = "primary" size = "md" onClick={() => {}} text = {"asd"}  />